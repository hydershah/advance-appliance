# PROJECT DEPENDENCIES

Maps relationships between modules, components, and functions in this project.

**Update Rules:**
- When you discover non-obvious dependencies → Add here
- When you trace a complex flow → Document here
- Before adding: Check if already documented

---

## Entry Template

```markdown
## [Component/Module/Function Name]

**Location:** path/to/file.ts

**Called By (Upstream):**
- `fileA.ts:functionX` - [why it calls this]
- `fileB.tsx:ComponentY` - [why it uses this]

**Depends On (Downstream):**
- `utilC.ts:helperZ` - [what it uses it for]
- `serviceD.ts:apiCall` - [what it fetches]

**State Affected:**
- [What state does this modify]

**Notes:**
[Any non-obvious behavior or gotchas]
```

---

## Dependencies Map

<!-- Dependency mappings will be appended below this line -->

