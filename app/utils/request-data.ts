import { getUrl } from './get-url';

type Method = 'GET' | 'PATCH' | 'DELETE' | 'POST';

export const requestData = <T>(
  url: string,
  method: Method,
  payload?: Record<string, unknown>
): Promise<T | void> =>
  fetch(getUrl(url), {
    method,
    body: payload && JSON.stringify(payload),
  })
    .then((res) => res.json())
    .catch((err) => {
      // Refer to point 3 in the improvement section on the README file
      console.error(err);
    });
