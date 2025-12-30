---
description: Orchestrate complex multi-step tasks by delegating to specialized agents
---

Use the Task tool with subagent_type='orchestrator' to analyze and coordinate this task. Break down the following request into subtasks and delegate to appropriate specialized agents.

**Available Agents:**
- **research-agent**: Web searches, documentation lookup, API research, gathering technical information
- **frontend-agent**: React/Vue components, TypeScript, CSS/Tailwind, UI/UX implementation
- **backend-agent**: Node.js/Python APIs, databases, server-side logic, authentication
- **bug-solver**: Bug investigation, debugging, root cause analysis, fixes
- **testing-agent**: Unit tests, integration tests, E2E tests, quality assurance
- **devops-agent**: Docker, CI/CD pipelines, cloud deployment, infrastructure
- **security-agent**: Security review, vulnerability assessment, OWASP compliance
- **docs-agent**: README files, API documentation, technical documentation

**Orchestration Process:**
1. Analyze the task and identify required subtasks
2. Determine dependencies between subtasks
3. Delegate to specialized agents (parallelize when possible)
4. Aggregate results and present coherent output

**Task to orchestrate:**
$ARGUMENTS
