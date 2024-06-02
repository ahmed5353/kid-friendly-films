import React from "react";
import useMovies from "@/features/Movies/useMovies";
import MetaDescription from "@/components/ui/metaDescription";
import { Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { MovieProps } from "./Home";

const MovieDetails: React.FC = () => {
  const { movieId } = useParams<{ movieId?: string }>();
  const { movies, isPending } = useMovies();
  const movie = movies?.find(
    (movie: MovieProps) => movieId === movie.id?.toString()
  );

  return (
    <div className="flex flex-col items-center md:flex-row  gap-8 md:gap-24">
      {isPending && <h1 className="text-2xl">Loading...</h1>}
      {!isPending && (
        <>
          <img
            src={movie?.image}
            alt="movie"
            className="rounded-3xl max-w-52 md:max-w-full shadow-lg max-h-[40rem] shadow-gray-800 md:max-h-[30rem] md:shadow-gray-900"
          />

          <div className="flex flex-col gap-8 p-2">
            <h1 className="text-3xl font-extrabold">{movie?.name}</h1>
            <p>
              <MetaDescription>Description:</MetaDescription>{" "}
              <span className="text-lg">{movie?.description}</span>
            </p>
            <div>
              <MetaDescription>Release date : </MetaDescription>
              <span className="text-xl">{movie?.release_year}</span>
            </div>

            <Button
              className="-bg--color-primary-light h-12 self-center md:self-start max-w-56 text-md"
              ripple={true}
              onClick={() => console.log("clicked")}
              placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
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
