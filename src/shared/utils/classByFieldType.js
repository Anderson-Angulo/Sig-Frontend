export const classByFieldType = (text) => {
  if (typeof text === 'number') return 'text-right';
  if (text.includes('/')) return 'text-center';
  if (typeof text === 'string') return 'text-left';
};
