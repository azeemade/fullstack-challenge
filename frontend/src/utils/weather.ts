const readFromCache = () => JSON.parse(localStorage.getItem('weather') || "[]");

const writeToCache = (data: any) =>
  localStorage.setItem('weather', JSON.stringify(data));

export { readFromCache, writeToCache };