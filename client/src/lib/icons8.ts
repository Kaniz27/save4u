const ICON8_BASE = "https://img.icons8.com/fluency";

export function icon8Url(slug: string, size: 48 | 64 | 96 = 96): string {
  return `${ICON8_BASE}/${size}/${slug}.png`;
}
