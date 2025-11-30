type SearchNoResultsProps = {
  searchQuery: string;
};

export const SearchNoResults = ({ searchQuery }: SearchNoResultsProps) => {
  return (
    <div className="text-center py-16 lg:py-24">
      <p className="text-gray-400 text-lg">
        &quot;{searchQuery}&quot;에 대한 검색 결과가 없습니다.
      </p>
    </div>
  );
};
