interface MovieDetailsProps {
  title: string;
  description: string;
}

function MovieDetails({ title, description }: MovieDetailsProps) {
  return (
    <div className="flex flex-col gap-2 h-full overflow-y-scroll hide-scrollbar">
      <h2 className="text-xl font-bold -text--color-primary-light">{title}</h2>
      <p className="mt-2 text-gray-50 ">{description}</p>

      <a href="#" className="self-end mt-2">
        <u>More details &rarr; </u>{" "}
      </a>
    </div>
  );
}

export default MovieDetails;
