"""
Main entry point for OpsIQ Agents

Usage:
    python -m agents                          # Run all agents
    python -m agents p2p_optimizer            # Run specific agent
    python -m agents --list                   # List all agents
    python -m agents --info p2p_optimizer     # Get agent info
"""

import sys
import json
from typing import Optional

from agents.orchestrator import AgentOrchestrator


def main():
    """Main entry point."""
    orchestrator = AgentOrchestrator()
    
    # Parse command line arguments
    if len(sys.argv) < 2:
        # Run all agents
        print("Running all OpsIQ agents...")
        results = orchestrator.run_all_agents()
        print(json.dumps(results, indent=2))
        return
    
    command = sys.argv[1]
    
    if command == "--list":
        # List all agents
        print("Available OpsIQ Agents:\n")
        for agent in orchestrator.get_agent_list():
            status_emoji = "✅" if agent["status"] == "LIVE" else "🔄"
            print(f"{status_emoji} {agent['name']:30} | Accuracy: {agent['accuracy']}%")
        return
    
    if command == "--info":
        # Get agent info
        if len(sys.argv) < 3:
            print("Usage: python -m agents --info <agent_key>")
            return
        
        agent_key = sys.argv[2]
        agent_list = orchestrator.get_agent_list()
        agent_info = next((a for a in agent_list if a["key"] == agent_key), None)
        
        if agent_info:
            print(json.dumps(agent_info, indent=2))
        else:
            print(f"Agent '{agent_key}' not found")
        return
    
    if command.startswith("--"):
        print(f"Unknown option: {command}")
        print("\nUsage:")
        print("  python -m agents                    # Run all agents")
        print("  python -m agents <agent_key>        # Run specific agent")
        print("  python -m agents --list             # List all agents")
        print("  python -m agents --info <agent_key> # Get agent info")
        return
    
    # Run specific agent
    print(f"Running agent: {command}")
    result = orchestrator.run_agent(command)
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
