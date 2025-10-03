export function convertToTruncate(str: string): string {
  const firstChars = str.slice(0, 6);
  const lastChars = str.slice(-5);
  return `${firstChars}...${lastChars}`;
}
