const API_URL =
  "https://my-json-server.typicode.com/ahmed5353/kid-friendly-films/data";

async function getMovies() {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}

export default getMovies;
