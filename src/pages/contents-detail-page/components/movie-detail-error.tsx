type MovieDetailErrorProps = {
  error: string;
};

export const MovieDetailError = ({ error }: MovieDetailErrorProps) => {
  return (
    <div className="bg-red-900/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg">
      {error}
    </div>
  );
};


