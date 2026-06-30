const SAFE_PROTOCOLS = new Set(["http:", "https:", "mailto:"]);

export function sanitizeUrl(url: string): string {
  const trimmed = url.trim();

  if (!trimmed) {
    return "#";
  }

  if (trimmed.startsWith("#")) {
    return trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    return SAFE_PROTOCOLS.has(parsed.protocol) ? parsed.toString() : "#";
  } catch {
    return "#";
  }
}
