type MovieListErrorProps = {
  error: string;
};

export const MovieListError = ({ error }: MovieListErrorProps) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
      {error}
    </div>
  );
};
