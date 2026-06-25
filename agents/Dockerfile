# Dockerfile for OpsIQ AI Agents
# Enables deployment to Azure Container Apps or Azure Functions

FROM python:3.11-slim

WORKDIR /app

# Copy requirements
COPY agents/requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy agent code
COPY agents /app/agents

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Expose port for API server (optional)
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
    CMD python -c "from agents.orchestrator import AgentOrchestrator; AgentOrchestrator().get_agent_list()" || exit 1

# Default command - run orchestrator
CMD ["python", "-m", "agents"]
