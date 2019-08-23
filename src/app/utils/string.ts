function normalize(val: string): string {
  return val.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export const strings = {
  normalize
};
