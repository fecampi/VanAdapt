function printTree(node, depth = 0) {
  const indent = "  ".repeat(depth);
  let info = `<${node.constructor?.name || typeof node}`;
  if (node.color) info += ` color="${node.color}"`;
  if (node.text) info += ` text="${node.text}"`;
  info += ` x="${node.x}" y="${node.y}" w="${node.width}" h="${node.height}"`;
  info += ">";
  console.log(indent + info);
  if (node.children && Array.isArray(node.children)) {
    node.children.forEach((child) => printTree(child, depth + 1));
  }
  console.log(indent + `</${node.constructor?.name || typeof node}>`);
}

export { printTree };
