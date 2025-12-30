# Advance Appliance Project

## Project Overview
This project has custom Claude Code agents and skills configured for efficient development workflows.

## Available Custom Agents

The following specialized agents are available via the Task tool or automatic delegation:

| Agent | Purpose | Skills Loaded |
|-------|---------|---------------|
| **frontend-agent** | React/Vue, TypeScript, CSS/Tailwind, UI/UX | react-patterns |
| **backend-agent** | Node.js/Python APIs, databases, server logic | api-design |
| **bug-solver** | Debugging, root cause analysis, bug fixes | bug-debugging |
| **testing-agent** | Unit, integration, E2E tests | testing-best-practices |
| **security-agent** | Code review, vulnerability assessment | security-checklist |
| **devops-agent** | Docker, CI/CD, cloud deployment | - |
| **docs-agent** | READMEs, API docs, technical docs | - |
| **research-agent** | Web searches, documentation lookup | - |
| **orchestrator** | Coordinates multi-agent tasks | - |

## Available Skills

Skills are automatically loaded based on task context:

- **react-patterns**: React hooks, component architecture, best practices
- **api-design**: RESTful API conventions, response formats, authentication
- **security-checklist**: OWASP Top 10, security headers, input validation
- **testing-best-practices**: Testing pyramid, AAA pattern, mocking strategies
- **bug-debugging**: Systematic debugging methodology, root cause analysis

## Slash Commands

- `/orchestrate <task>` - Orchestrate complex multi-step tasks using specialized agents

## Usage Examples

### Using agents directly:
```
"Use the frontend-agent to build a new component"
"Have the security-agent review the authentication code"
"Ask the research-agent to find documentation on XYZ"
```

### Using skills:
Skills are auto-invoked when Claude detects a matching task. You can also request them:
```
"Apply react-patterns to review this component"
"Use the security-checklist to audit this endpoint"
```

### Using orchestration:
```
/orchestrate Add a new user profile feature with API endpoint, UI component, and tests
```

## Code Standards

- Use TypeScript for type safety
- Follow existing project patterns and conventions
- Write tests for new features
- Review security implications before deployment
- Document API endpoints and complex logic
