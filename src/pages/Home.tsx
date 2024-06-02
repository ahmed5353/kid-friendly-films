import { MoviesContextValue, useMoviesContext } from "@/contexts/MoviesContext";
import MovieCard from "@/features/Movies/MovieCard";
import useMovies from "@/features/Movies/useMovies";
import { useNavigate } from "react-router-dom";

export interface MovieProps {
  id: number;
  name: string;
  description: string;
  image: string;
  release_year: number;
}

function Home() {
  const { movies } = useMovies();
  const navigate = useNavigate();
  const { setMovie } = useMoviesContext() as MoviesContextValue;

  function handleClick(movie: MovieProps) {
    const movieId = movie.id;
    setMovie(movie);
    navigate(`/moviedetail/${movieId}`);
  }

  console.log(movies);
  return (
    <div>
      <h1 className="mb-10 text-2xl font-semibold ">Most Popular</h1>

      {/* Movie Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-4  xl:grid-cols-5 xl:gap-x-24 gap-y-10">
        {movies?.map((movie: MovieProps) => (
          <MovieCard
            key={movie.id}
            title={movie.name}
            description={movie.description}
            image={movie.image}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
