interface MetaDescriptionProps {
  children: string;
}

const MetaDescription: React.FC<MetaDescriptionProps> = ({ children }) => {
  return (
    <span className="-text--color-primary text-xl font-bold me-2">
      {children}{" "}
    </span>
  );
};

export default MetaDescription;
