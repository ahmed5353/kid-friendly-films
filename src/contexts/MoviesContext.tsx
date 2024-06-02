import { MovieProps } from "@/pages/Home";
import { createContext, useContext, useMemo, useState, ReactNode } from "react";

// Define the shape of the context value
interface MoviesContextValue {
  movies: Array<object>;
  movie: MovieProps | null;
  setMovie: (movie: MovieProps) => void;
}

interface MoviesProviderProps {
  children: ReactNode;
}

const MoviesContext = createContext<MoviesContextValue | undefined>(undefined);

function MoviesProvider({ children }: MoviesProviderProps): JSX.Element {
  // const [movies, setMovies] = useState<object>({});
  const [movie, setMovie] = useState<object>({});

  // console.log(movies);
  const value = useMemo(
    function () {
      return {
        movies: [],
        movie,
        setMovie,
      };
    },
    [movie]
  );

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

function useMoviesContext(): MoviesContextValue {
  const context = useContext(MoviesContext);
  if (!context) throw new Error("AppContext was used outside of AppProvider");
  return context;
}

export type { MoviesContextValue };
export { MoviesProvider, useMoviesContext };
