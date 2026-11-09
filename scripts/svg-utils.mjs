const xmlEntities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

export function escapeXml(value) {
  return value.replace(/[&<>"']/g, (character) => xmlEntities[character]);
}
