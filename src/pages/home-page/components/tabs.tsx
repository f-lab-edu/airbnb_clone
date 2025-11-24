import { MovieType } from "@domains/movies";

type TabsProps = {
  tabs: { id: MovieType; label: string }[];
  activeTab: MovieType;
  onTabChange: (tab: MovieType) => void;
};

export const Tabs = ({ tabs, activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="sticky top-16 lg:top-20 z-40 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-gray-800 mb-6 lg:mb-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <nav
        className="flex space-x-4 lg:space-x-6 overflow-x-auto scrollbar-hide"
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              py-2 px-1 font-medium text-sm lg:text-base whitespace-nowrap transition-all duration-200
              ${
                activeTab === tab.id
                  ? "text-white border-b-2 border-[#FF0558]"
                  : "text-gray-400 hover:text-gray-300 border-b-2 border-transparent"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
