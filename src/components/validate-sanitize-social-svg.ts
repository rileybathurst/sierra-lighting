export function validateSanitizeSocialSVG(svgString: string): string | null {
  const trimmedSvg = svgString.trim();
  if (!trimmedSvg.startsWith("<svg")) return null;

  return trimmedSvg.replace(/<title[\s\S]*?<\/title>/gi, "");
}
