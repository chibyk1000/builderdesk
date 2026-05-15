import fs from "fs";
import path from "path";

/**
 * Converts SVG files to TypeScript React components
 * Usage: node scripts/convert-svgs.js
 */

const ICONS_DIR = path.join(process.cwd(), "src/icons");
const OUTPUT_DIR = path.join(process.cwd(), "src/components/icons/generated");
const INDEX_FILE = path.join(process.cwd(), "src/components/icons/index.ts");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Convert kebab-case to PascalCase
function toPascalCase(str) {
  return str
    .replace(/[-_]([a-z0-9])/g, (_, char) => char.toUpperCase())
    .replace(/^[a-z]/, (char) => char.toUpperCase());
}

// Get all SVG files
const svgFiles = fs
  .readdirSync(ICONS_DIR)
  .filter((file) => file.endsWith(".svg"));

const componentExports = [];

svgFiles.forEach((file) => {
  const componentName = toPascalCase(path.basename(file, ".svg"));
  const componentFile = path.join(OUTPUT_DIR, `${componentName}.tsx`);

  // Read SVG content
  const svgContent = fs.readFileSync(path.join(ICONS_DIR, file), "utf-8");

  // Extract viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]*)/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

  // Extract inner SVG content (everything inside <svg> tags)
  const innerMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  const innerContent = innerMatch ? innerMatch[1] : "";

  // Create component
  const componentCode = `import React from 'react'
import { SVGIcon, type SVGIconProps } from '../svg-icon.tsx'

/**
 * ${componentName} Icon
 * Generated from: ${file}
 */
export const ${componentName} = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <SVGIcon
      ref={ref}
      size={size}
      viewBox="${viewBox}"
      className={className}
      {...props}
    >
${innerContent}
    </SVGIcon>
  )
)

${componentName}.displayName = '${componentName}'
`;

  // Write component file
  fs.writeFileSync(componentFile, componentCode, "utf-8");
  componentExports.push(
    `export { ${componentName} } from './generated/${componentName}'`,
  );

  console.log(`✓ Generated: ${componentName}`);
});

// Create IconName union type from exports
const iconNameType = componentExports
  .map((exp) => {
    const match = exp.match(/export { (\w+) }/);
    return match ? match[1] : "";
  })
  .filter(Boolean)
  .map((name) => `'${name}'`)
  .join(" | ");

// Update index.ts
const indexContent = `// This file auto-exports all icon components
// Import individual icons like: import { BuildingIcon } from '@/components/icons'

export type { SVGIconProps } from './svg-icon'
export { SVGIcon } from './svg-icon'

// Generated icon components
${componentExports.join("\n")}

// Icon type for selecting any icon  
export type IconName = ${iconNameType || "'none'"}
`;

fs.writeFileSync(INDEX_FILE, indexContent, "utf-8");

console.log(`\n✓ Generated ${componentExports.length} icon components`);
console.log(`✓ Updated index.ts with all exports`);
