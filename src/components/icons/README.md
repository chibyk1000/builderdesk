### TypeScript Icon System - Usage Guide

Your SVGs have been converted to fully typed React components!

## ✨ Quick Start

### Import a single icon:

```tsx
import { Svgexport21 } from "@/components/icons";

export function MyComponent() {
  return <Svgexport21 size={32} />;
}
```

### Access the icon type:

```tsx
import type { IconName } from "@/components/icons";

// Get autocomplete for all available icons
const icon: IconName = "Svgexport21";
```

### Use the base SVGIcon component:

```tsx
import { SVGIcon, type SVGIconProps } from "@/components/icons";

// Create custom icon components using SVGIcon wrapper
```

## 🎨 Customization

Each icon component accepts these props:

- `size?: number | string` - Icon size in pixels (default: 24)
- `className?: string` - Additional CSS classes
- `ariaLabel?: string` - Accessibility label
- All standard SVG attributes

### Examples:

```tsx
<Svgexport21 size={48} className="text-red-500" />
<Svgexport21 size="2rem" />
<Svgexport21 ariaLabel="Settings icon" />
```

## 📝 What Was Created

```
src/components/icons/
├── index.ts                    # Main export file with all icons + types
├── svg-icon.tsx               # Reusable SVG wrapper component
└── generated/
    ├── Svgexport3.tsx
    ├── Svgexport4.tsx
    └── ... (35 total icon components)
```

## 🔄 Regenerate Icons

If you add new SVGs to `src/icons/`:

```bash
node scripts/convert-svgs.js
```

This will regenerate all icon components and update the index file.

## 💡 Tips

- Icons support `ref` forwarding for advanced use cases
- All icons are properly typed with TypeScript
- Use the `IconName` type for dynamic icon selection
- CSS classes work out of the box (Tailwind, etc.)

---

Generate more icons anytime by adding SVG files to `src/icons/` and running the conversion script!
