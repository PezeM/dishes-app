export const API_URL = 'https://frosty-wood-6558.getsandbox.com:443';

export const postFetch = (url: string, body: Object, extraOptions?: Partial<Request>) =>
  fetch(`${API_URL}/${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...extraOptions,
  });
