#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs");
const path = require("path");

// Convert kebab-case to camelCase
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

// Parse SVG and convert to React component
function svgToReact(svgContent, componentName) {
  // Extract viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 100 100";

  // Extract width and height from viewBox
  const viewBoxParts = viewBox.split(" ");
  const width = parseFloat(viewBoxParts[2]);
  const height = parseFloat(viewBoxParts[3]);

  // Calculate em dimensions - smaller dimension is 1em, larger is multiple
  const smaller = Math.min(width, height);
  const larger = Math.max(width, height);
  const ratio = larger / smaller;

  const widthEm = width <= height ? "1em" : `${ratio.toFixed(2)}em`;
  const heightEm = height <= width ? "1em" : `${ratio.toFixed(2)}em`;

  // Remove SVG opening tag and extract inner content
  let innerContent = svgContent
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>/, "")
    .trim();

  // Convert kebab-case attributes to camelCase
  innerContent = innerContent.replace(/clip-path/g, "clipPath");
  innerContent = innerContent.replace(/stroke-width/g, "strokeWidth");
  innerContent = innerContent.replace(/stroke-linecap/g, "strokeLinecap");
  innerContent = innerContent.replace(/stroke-linejoin/g, "strokeLinejoin");
  innerContent = innerContent.replace(/fill-rule/g, "fillRule");
  innerContent = innerContent.replace(/clip-rule/g, "clipRule");

  // Generate React component
  const component = `export default function ${componentName}({ style, ...rest }: React.ComponentProps<"svg">) {
  return (
    <svg
      width="${widthEm}"
      height="${heightEm}"
      viewBox="${viewBox}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...rest}
    >
${innerContent}
    </svg>
  );
}`;

  return { component, widthEm, heightEm };
}

// Main function
function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.log("Usage: node svg-to-react.js <svg-file> [component-name]");
    console.log("Example: node svg-to-react.js Logo-03.svg Logo");
    process.exit(1);
  }

  const svgFile = args[0];
  const componentName =
    args[1] || path.basename(svgFile, ".svg").replace(/[^a-zA-Z0-9]/g, "");

  if (!fs.existsSync(svgFile)) {
    console.error(`Error: File ${svgFile} not found`);
    process.exit(1);
  }

  try {
    const svgContent = fs.readFileSync(svgFile, "utf8");
    const { component, widthEm, heightEm } = svgToReact(
      svgContent,
      componentName
    );

    // Write to output file
    const outputFile = `${componentName}.tsx`;
    fs.writeFileSync(outputFile, component);

    console.log(`✅ Converted ${svgFile} to ${outputFile}`);
    console.log(`📏 Dimensions: ${widthEm} × ${heightEm}`);
    console.log(`�� Component name: ${componentName}`);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { svgToReact, toCamelCase };
