import { Search, Calendar, Filter, Plus } from 'lucide-react';

const GroupTopBar = () => {
  return (
    <div
      className="
        flex flex-col sm:flex-row items-center justify-between gap-4
        px-4 sm:px-6 py-3 sm:py-4 rounded-md
        bg-white z-10
        sticky top-0
        w-full
        min-h-[50px]
        shadow-sm
      "
    >
      {/* Search Input */}
      <div className="flex items-center bg-[#F5F5F5] border border-[#D9DBE9] rounded-lg px-3 sm:px-4 py-2 w-full sm:w-[300px] h-[40px] sm:h-[44px] lg:ml-80">
        <Search className="w-4 h-4 text-[#A0A3BD] mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-[#6E7191] w-full"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
        <button className="w-[40px] sm:w-[44px] h-[40px] sm:h-[44px] rounded-md bg-[#F0F0F5] flex items-center justify-center hover:bg-[#E0E0EB] transition">
          <Calendar className="w-4 h-4 text-[#1A1443]" />
        </button>
        <button className="w-[40px] sm:w-[44px] h-[40px] sm:h-[44px] rounded-md bg-[#F0F0F5] flex items-center justify-center hover:bg-[#E0E0EB] transition">
          <Filter className="w-4 h-4 text-[#1A1443]" />
        </button>
        <button className="flex items-center justify-center gap-1 w-[40px] sm:w-[139px] h-[40px] sm:h-[44px] rounded-md bg-[#1A1443] text-white text-sm font-medium hover:bg-[#2B2660] transition">
          <Plus className="w-4 h-4 sm:mr-1" />
          <span className="hidden sm:inline">Add New Story</span>
        </button>
      </div>
    </div>
  );
};

export default GroupTopBar;