async function getMovies() {
  const res = await fetch("http://localhost:5173/db.json");
  const data = await res.json();
  return data?.data;
}

export default getMovies;
