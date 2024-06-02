import { useState } from "react";
import MovieDetails from "../Movies/MovieDetails";
import MovieImage from "../Movies/MovieImage";

interface MovieCardProps {
  title: string;
  description: string;
  image: string;

  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  image,
  onClick,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <>
      {/* Movie Card */}

      <div
        className="relative w-64  h-80 overflow-hidden rounded-lg shadow-lg   cursor-pointer "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
      >
        <MovieImage image={image} />
        <div
          className={`absolute  h-80 bottom-0 left-0 right-0 bg-black bg-opacity-75 p-3 cursor-pointer  text-white transition-transform duration-300 ${
            hovered ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          {/* movie details */}
          <MovieDetails title={title} description={description} />
        </div>
      </div>
    </>
  );
};

export default MovieCard;
