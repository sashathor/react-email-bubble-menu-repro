# React Email bubble menu in a production build

This app uses the published `@react-email/editor@1.8.5` with its default theme and Next.js 16.4.6. The lockfile resolves TipTap to 3.33.1. [React Email issue #3895](https://github.com/resend/react-email/issues/3895)

## Reproduce

Run these commands with Node.js 24.

```sh
npm ci
npm run build
npm start
```

1. Open [localhost:3000](http://127.0.0.1:3000/).
2. Double-click **TypeScript** in the editor.
3. Inspect the floating menu. Its controls stack vertically over a transparent background. The parent of the two `[data-re-bubble-menu-group]` fieldsets has no `data-re-bubble-menu` attribute and its computed display is `block`.

The expected result is a horizontal toolbar with the default theme background and the `data-re-bubble-menu` attribute on its root.

With `npm run dev`, the same selection opens the toolbar with the expected layout.
