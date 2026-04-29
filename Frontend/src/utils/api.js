export async function fetchApi(endpoint, options = {}) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const url = `${apiUrl}${endpoint}`;

  const defaultHeaders = {
    "ngrok-skip-browser-warning": "69420",
    "Content-Type": "application/json",
  };

  options.headers = {
    ...defaultHeaders,
    ...options.headers,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}