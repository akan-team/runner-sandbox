# runner-sandbox

A public sandbox for testing the Akan ticket runner. It is a minimal [Akan.js](https://akanjs.com) workspace with one
app, `sandbox`, and contains no product code, no real configuration and no secrets.

```bash
bun install --frozen-lockfile
bunx akan lint sandbox
bunx akan typecheck sandbox
bunx akan build sandbox
```

The `akan` command comes from the pinned `@akanjs/cli` devDependency.
