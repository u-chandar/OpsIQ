# OpsIQ Agents - Deployment Guide

## Quick Start

Run agents locally:
```bash
cd agents
python -m agents
```

List all agents:
```bash
python -m agents --list
```

Get agent info:
```bash
python -m agents --info p2p_optimizer
```

## Deployment Options

### 1. Local Development

```bash
# Install dependencies
pip install -r agents/requirements.txt

# Run all agents
python -m agents

# Run specific agent
python -m agents p2p_optimizer

# Run tests
pytest agents/test_agents.py -v
```

### 2. Azure Functions

Deploy each agent as an HTTP-triggered Azure Function:

```bash
# Install Azure Functions Core Tools
# https://learn.microsoft.com/azure/azure-functions/functions-run-local

# Create function app
func init opsiq-agents --python

# Create function for P2P agent
func new --name p2p-optimizer --template "HTTP trigger"

# Modify function_app.py to import agent
# Add to function_app.py:
# from agents.p2p_optimizer import analyze_p2p_cycle
# 
# @app.route(route='p2p-optimizer')
# def p2p_optimizer(req: func.HttpRequest) -> func.HttpResponse:
#     result = analyze_p2p_cycle()
#     return func.HttpResponse(json.dumps(result))

# Deploy
func azure functionapp publish <FunctionAppName>
```

### 3. Azure Container Apps

```bash
# Build Docker image
docker build -t opsiq-agents:latest -f agents/Dockerfile .

# Tag for Azure Container Registry
docker tag opsiq-agents:latest myregistry.azurecr.io/opsiq-agents:latest

# Push to ACR
docker push myregistry.azurecr.io/opsiq-agents:latest

# Deploy to Container Apps
az containerapp create \
  --name opsiq-agents \
  --resource-group myResourceGroup \
  --image myregistry.azurecr.io/opsiq-agents:latest \
  --registry-server myregistry.azurecr.io \
  --registry-username <username> \
  --registry-password <password>
```

### 4. API Server

Create a Flask/FastAPI wrapper:

```python
# api_server.py
from flask import Flask, jsonify
from agents.orchestrator import AgentOrchestrator

app = Flask(__name__)
orchestrator = AgentOrchestrator()

@app.route('/agents', methods=['GET'])
def list_agents():
    return jsonify(orchestrator.get_agent_list())

@app.route('/agents/<agent_key>', methods=['GET'])
def run_agent(agent_key):
    result = orchestrator.run_agent(agent_key)
    return jsonify(result)

@app.route('/agents/all', methods=['GET'])
def run_all():
    result = orchestrator.run_all_agents()
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=8000)
```

Run with:
```bash
pip install flask
python api_server.py
```

### 5. Azure DevOps / CI/CD Pipeline

Example `azure-pipelines.yml`:

```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.11'

- script: |
    python -m pip install --upgrade pip
    pip install -r agents/requirements.txt
  displayName: 'Install dependencies'

- script: |
    pip install pytest pytest-cov
    pytest agents/test_agents.py -v --cov=agents
  displayName: 'Run tests'

- script: |
    docker build -f agents/Dockerfile -t opsiq-agents:$(Build.BuildId) .
  displayName: 'Build Docker image'

- task: Docker@2
  inputs:
    command: push
    repository: 'myregistry.azurecr.io/opsiq-agents'
    dockerfile: 'agents/Dockerfile'
    tags: $(Build.BuildId)
```

## Integration with OpsIQ Dashboard

### Connect to React App

```typescript
// In App.tsx or chatbot component
async function fetchAgentData(agentKey: string) {
  const response = await fetch(`https://api.opsiq.azure/agents/${agentKey}`);
  const data = await response.json();
  return data;
}

// Example: Update dashboard with P2P analysis
const p2pData = await fetchAgentData('p2p_optimizer');
setKpiData({
  cycletime: p2pData.current_cycle_time,
  target: p2pData.target_cycle_time,
  bottlenecks: p2pData.bottlenecks
});
```

### Chatbot Backend

```python
# chatbot_backend.py
from agents.orchestrator import AgentOrchestrator

orchestrator = AgentOrchestrator()

def process_chatbot_query(query: str) -> str:
    """Process user query and route to appropriate agent."""
    
    if 'p2p' in query.lower() or 'cycle' in query.lower():
        result = orchestrator.run_agent('p2p_optimizer')
        return format_response(result)
    
    elif 'discount' in query.lower():
        result = orchestrator.run_agent('discount_agent')
        return format_response(result)
    
    elif 'invoice' in query.lower() or 'anomal' in query.lower():
        result = orchestrator.run_agent('invoice_detector')
        return format_response(result)
    
    # ... more routing logic
    
    return "I can help with: P2P cycles, discounts, invoices, AP aging, recruiting, vendors, spend, compliance, risks, performance, documents, and predictions."

def format_response(result: dict) -> str:
    """Format agent result for chatbot display."""
    # Convert JSON result to natural language
    # Example: Convert P2P result to readable text
    pass
```

## Environment Variables

Create `.env` file:

```
AZURE_STORAGE_CONNECTION_STRING=<connection_string>
AZURE_OPENAI_API_KEY=<api_key>
AZURE_OPENAI_ENDPOINT=<endpoint>
DATABRICKS_HOST=<host>
DATABRICKS_TOKEN=<token>
```

Use in agents:

```python
import os
from dotenv import load_dotenv

load_dotenv()

storage_conn = os.getenv('AZURE_STORAGE_CONNECTION_STRING')
databricks_token = os.getenv('DATABRICKS_TOKEN')
```

## Monitoring & Logging

### Application Insights

```python
from opencensus.ext.azure.log_exporter import AzureLogHandler
import logging

# Setup Application Insights logging
handler = AzureLogHandler(connection_string='<connection_string>')
logger = logging.getLogger(__name__)
logger.addHandler(handler)

# In agents
logger.info(f"P2P analysis completed. Cycle time: {result['current_cycle_time']}")
```

### Performance Monitoring

```bash
# Install monitoring tools
pip install py-spy
pip install memory-profiler

# Profile agent performance
python -m cProfile -s cumtime agents/__main__.py

# Monitor memory usage
python -m memory_profiler agents/__main__.py
```

## Troubleshooting

### Import Errors
```bash
# Ensure agents directory is in PYTHONPATH
export PYTHONPATH="${PYTHONPATH}:$(pwd)"
```

### Agent Failures
```python
# Check agent status
from agents.orchestrator import AgentOrchestrator
orchestrator = AgentOrchestrator()
for agent_key in orchestrator.agents:
    result = orchestrator.run_agent(agent_key)
    if 'error' in result:
        print(f"ERROR in {agent_key}: {result['error']}")
```

### Performance Issues
```bash
# Run with verbose logging
export LOG_LEVEL=DEBUG
python -m agents

# Check agent response times
python -m agents --info p2p_optimizer  # Shows expected latency
```

## Support

For issues or questions:
1. Check agent logs: `python -m agents --list`
2. Review agent docstrings: `python agents/p2p_optimizer.py --help`
3. Run tests: `pytest agents/test_agents.py -v`
4. View dashboard logs: Azure Portal > App Service > Log Stream
