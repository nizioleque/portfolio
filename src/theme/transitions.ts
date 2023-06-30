const transitionDuration = 300;
const transitionEasing = 'ease';

export function transition(property: string | string[]): string {
  if (Array.isArray(property)) {
    const results = property.map((property) => transition(property));
    return results.join(',');
  }
  return `${property} ${transitionEasing} ${transitionDuration}ms`;
}
