# If demo fails

```typescript
// router.ts
  greetFunconFour: t.procedure
    .input(z.object({
      name: z.string()
    }))
    .query(({ input }) => {
      return {
        output: "Hello, " + input.name + "!"
      };
    }),

  getLogs: t.procedure
    .input(z.object({
      token: z.string().min(10),
      userId: z.string(),
    }))
    .query(({ input }): Result<string[], "Unauthorised" | "No permissions"> => {
      if (input.token !== "abcdefghikl") {
        return failure("Unauthorised");
      }
      if (input.userId !== "editor") {
        return failure("No permissions");
      }
      return success(["Someone did something"]);
    })

```


```typescript
// Greeter.tsx
  const response = trpc.greetFunconFour.useQuery({name: "Erik"})
  const data = response.data;
  if (!data) {
    return <div>Loading</div>
  }
  return <div>{data.output}</div>
```

```typescript
// Greeter.tsx
  const response = trpc.greetFunconFour.useQuery({name: "Erik"})
  const data = response.data;
  if (!data) {
    return <div>Loading</div>
  }
  return <div>{data.output}</div>
```

```typescript
  const response = trpc.getLogs.useQuery({token: "abcdefghikl", userId: "editor"});

  const data = response.data;

  if (!data) {
    return <div>Loading</div>
  }

  if (isFailure(data)) {
    return <div>{data.error}</div>
  } else {
    return <div>{data.data}</div>
  }
```