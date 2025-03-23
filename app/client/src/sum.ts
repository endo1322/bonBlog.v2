export function sum(a: number, b: number): number {
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  console.log("server url", serverUrl);
  return a + b;
}
