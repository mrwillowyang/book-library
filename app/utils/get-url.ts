export const getUrl = (path: string): string => {
  const isServer = typeof window === 'undefined';
  const baseURL = isServer
    ? process.env.NEXT_PUBLIC_SITE_URL!
    : window.location.origin;

  return new URL(path, baseURL).toString();
};
