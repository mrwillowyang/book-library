import { getUrl } from './get-url';

type Method = 'GET' | 'PATCH' | 'DELETE';

export const requestData = <T>(
  url: string,
  method: Method
): Promise<T | void> =>
  fetch(getUrl(url), { method })
    .then((res) => res.json())
    .catch((err) => {
      // Refer to point 3 in the improvement section on the README file
      console.error(err);
    });
