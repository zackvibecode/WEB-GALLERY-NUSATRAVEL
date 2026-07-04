export function generateWhatsAppLink(number: string, text: string): string {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${encodedText}`;
}
