// utils/isMobile.ts
export const isMobile = (userAgent: string): boolean => {
  return /android.+mobile|ip(hone|[oa]d)|mac/i.test(userAgent);
};