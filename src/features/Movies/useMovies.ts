import getMovies from "@/services/moviesApi";
import { useQuery } from "@tanstack/react-query";

const useMovies = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  return {
    movies: data,
    isPending,
    error,
  };
};

export default useMovies;
