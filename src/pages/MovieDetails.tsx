// import { useMoviesContext, MoviesContextValue } from "@/contexts/MoviesContext";
import useMovies from "@/features/Movies/useMovies";
import MetaDescription from "@/ui/metaDescription";
import { Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { MovieProps } from "./Home";

const MovieDetails: React.FC = () => {
  // const { movie } = useMoviesContext() as MoviesContextValue;
  const { movieId } = useParams<{ movieId?: string }>();
  console.log("ID,", movieId);

  const { movies, isPending } = useMovies();
  console.log(movies);
  const movie = movies?.find(
    (movie: MovieProps) => movieId === movie.id?.toString()
  );
  console.log(movie);
  return (
    <div className="flex items-center gap-24">
      {isPending && <h1 className="text-2xl">Loading...</h1>}
      {isPending || (
        <>
          <img
            src={movie?.image}
            alt="movie"
            className="rounded-3xl shadow-lg max-h-[40rem] shadow-gray-800"
          />

          <div className="flex flex-col gap-14">
            <h1 className="text-3xl font-extrabold ">{movie?.name}</h1>
            <p>
              {" "}
              <MetaDescription>Description:</MetaDescription>{" "}
              <span className="text-lg">{movie?.description}</span>
            </p>
            <div>
              <MetaDescription>Release date : </MetaDescription>
              <span className="text-xl ">{movie?.release_year}</span>
            </div>
            <Button
              className="-bg--color-primary-light h-12 max-w-56 text-md"
              ripple={true}
              onClick={() => console.log("clicked")}
            >
              Watch Now
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
