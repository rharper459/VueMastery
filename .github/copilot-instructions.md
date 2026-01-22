# VueMastery Project Guidelines

## Project Overview
This is a **Vue Mastery learning workspace** with multiple lesson directories (`1st&2nd-Lesson/`, `3rd-Lesson/`). Each lesson is an independent Vue 3 + Vite project for progressive learning. Treat each lesson folder as a separate application—they don't share dependencies or state.

## Architecture & Structure

### Lesson Organization
- Each lesson directory is self-contained with its own `package.json`, dependencies, and build configuration
- Lessons demonstrate progressive Vue 3 concepts and may have different dependency versions
- When working on code, always specify which lesson directory you're targeting

### Technology Stack
- **Vue 3** with Composition API (`<script setup>` syntax)
- **Vite** for build tooling and dev server
- **Vue Router** for client-side routing
- **Pinia** for state management (composition-style stores)
- **ESLint + Prettier** for code quality

### Standard Project Structure (per lesson)
```
src/
  ├── App.vue              # Root component with RouterView
  ├── main.js              # App initialization with router + Pinia
  ├── assets/              # CSS and static assets
  ├── components/          # Reusable UI components
  │   └── icons/           # SVG icon components
  ├── router/index.js      # Route definitions with lazy loading
  ├── stores/              # Pinia stores (composition API style)
  └── views/               # Page-level route components
```

## Key Conventions

### Component Patterns
- **Always use `<script setup>`** for all components (not Options API)
- Props declared with `defineProps()`, no explicit imports needed
- Components use PascalCase naming: `HelloWorld.vue`, `TheWelcome.vue`
- Icon components prefixed with `Icon`: `IconCommunity.vue`

### State Management (Pinia)
- Stores use **composition API style** with `defineStore()` and setup function:
  ```javascript
  export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() { count.value++ }
    return { count, doubleCount, increment }
  })
  ```
- Store files in `stores/` named by domain: `counter.js`, not `useCounterStore.js`

### Routing
- Routes defined in `src/router/index.js`
- Home route uses direct import, secondary routes lazy-loaded: `component: () => import('../views/AboutView.vue')`
- Uses `createWebHistory` mode (requires server configuration for production)

### Path Aliases
- `@/` resolves to `src/` directory (configured in `vite.config.js`)
- Example: `import HelloWorld from '@/components/HelloWorld.vue'`

## Development Workflows

### Working with Lessons
Each lesson has independent commands—always `cd` into the lesson directory first:

```bash
cd "1st&2nd-Lesson"  # Note: Use quotes for directory names with special characters
npm install          # Install dependencies (first time only)
npm run dev          # Start dev server (typically http://localhost:5173)
npm run build        # Production build
npm run lint         # Run ESLint with auto-fix
npm run format       # Format with Prettier (1st&2nd-Lesson only)
```

### ESLint Configuration
- **1st&2nd-Lesson**: Modern flat config (`eslint.config.js`) with `@eslint/js@9.x`
- **3rd-Lesson**: Legacy config with `@rushstack/eslint-patch`
- Both enforce Vue 3 essential rules and skip Prettier formatting conflicts

### Vite Configuration
- Dev server alias: `@` → `src/`
- Vue DevTools plugin enabled in `1st&2nd-Lesson`
- Hot Module Replacement (HMR) works automatically for `.vue` files

## Common Patterns

### Component Imports in Setup
```javascript
import { RouterLink, RouterView } from 'vue-router'  // Router components
import HelloWorld from './components/HelloWorld.vue'  // Local components
```

### Scoped Styles
- Use `<style scoped>` to prevent style leakage
- CSS variables like `var(--color-text)` defined in `assets/base.css`

### Active Router Links
- Use `.router-link-exact-active` class for styling active navigation links

## Browser Setup
- Install Vue.js DevTools extension (Chrome/Firefox)
- Enable Custom Object Formatters in browser DevTools for better Vue debugging

## Troubleshooting

### Port Conflicts
If dev server fails to start, another process may be using port 5173. Check with `netstat` or change port in `vite.config.js`.

### Module Resolution Errors
Verify you're in the correct lesson directory and dependencies are installed (`npm install`).

### ESLint Errors
Run `npm run lint` to auto-fix most issues. Different lessons use different ESLint versions—don't mix configs.
