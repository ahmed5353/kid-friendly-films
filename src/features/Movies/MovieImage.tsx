interface ImageProps {
  image: string;
}

function MovieImage({ image }: ImageProps) {
  return <img src={image} className="w-full h-full" />;
}
export default MovieImage;
