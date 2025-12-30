---
name: react-patterns
description: React best practices, hooks patterns, and component architecture. Use when building React components or debugging React issues. (project)
allowed-tools: Read, Grep, Glob, Edit, Write, Bash
---

# React Patterns & Best Practices

## Component Structure
- Use functional components with hooks
- Keep components small and focused (single responsibility)
- Extract custom hooks for reusable logic
- Co-locate related files (component, styles, tests)

## State Management

### Local State
```typescript
const [value, setValue] = useState(initialValue);
```

### Complex State
```typescript
const [state, dispatch] = useReducer(reducer, initialState);
```

### Global State Options
- React Context for simple global state (auth, theme)
- Zustand for lightweight state management
- Jotai for atomic state
- Redux Toolkit for complex applications

## Hooks Patterns

### Custom Hooks
```typescript
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
```

### Data Fetching
```typescript
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
```

## Performance Optimization

### Memoization
```typescript
// Memoize expensive calculations
const expensiveValue = useMemo(() => computeExpensive(a, b), [a, b]);

// Memoize callbacks
const handleClick = useCallback(() => doSomething(id), [id]);

// Memoize components
const MemoizedComponent = React.memo(MyComponent);
```

### Lazy Loading
```typescript
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

## Component Patterns

### Compound Components
```typescript
<Select>
  <Select.Option value="a">Option A</Select.Option>
  <Select.Option value="b">Option B</Select.Option>
</Select>
```

### Render Props
```typescript
<DataFetcher url="/api/data">
  {({ data, loading }) => loading ? <Spinner /> : <List items={data} />}
</DataFetcher>
```

### Higher-Order Components
```typescript
const withAuth = (Component) => (props) => {
  const { user } = useAuth();
  if (!user) return <Redirect to="/login" />;
  return <Component {...props} user={user} />;
};
```
