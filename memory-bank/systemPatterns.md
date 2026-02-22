# System Patterns

## System Architecture
- Single Page Application built with React 18+ and TypeScript.
- Vite for fast bundling and development.
- Server Components / Next.js are not strictly used here as we are scaffolding a standard React SPA, but we will isolate interactivity in leaf components where possible.

## Design Patterns & Standards
- **Typography**: Non-default high-end Sans-Serif (e.g., Geist, Satoshi).
- **Styling**: Tailwind CSS. Inline `className` usage, extracting complex effects into `index.css` via `@layer components`.
- **Layout**: CSS Grid preferred over complex flexbox math.
- **Motion**: Framer Motion for animations (`type: "spring"` mechanics).
- **File Structure**: Feature-based or modular component breakdown (`src/components/`, `src/features/`).

## Key Technical Decisions
- Use `@phosphor-icons/react` for iconography (no emojis!).
- Implement "Liquid Glass" refraction via inner borders and shadows instead of pure backdrop-blur.
- Use `min-h-[100dvh]` instead of `h-screen`.
