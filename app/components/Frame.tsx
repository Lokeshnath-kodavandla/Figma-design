import Image from 'next/image'
import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import logo from '../assets/user.png'
interface FrameProps {
  setSidebarOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}
const Frame = ({ setSidebarOpen }:FrameProps) => {
  return (
    <div className="h-16 flex items-center justify-between px-4 md:px-6 shadow-sm bg-white">
      {/* Left: Mobile Menu + Title */}
      <div className="flex items-center gap-3">
        {/* Hamburger for mobile */}
        <button
          onClick={() => setSidebarOpen(prev => !prev)}
          className="md:hidden"
        >
          <Menu size={24} className="text-gray-700" />
        </button>

        <div className="flex items-center gap-2 text-black font-semibold text-lg">
          <span className="hidden md:inline text-xl cursor-pointer">←</span>
          Stories
        </div>
      </div>

      {/* Right: Profile */}
      <div className="flex items-center bg-[#F9F9FB] border border-[#E6ECF1] rounded-xl px-4 py-2 shadow-sm max-w-xs">
        <Image
          src={logo}        
          alt="avatar"
          width={logo.width}     
          height={logo.height}
          className="w-9 h-9 rounded-xl object-cover"
        />
        <div className="ml-3">
          <div className="text-xs text-gray-500">Welcome back,</div>
          <div className="text-sm md:text-base font-semibold text-[#2C2C4A]">Akshita Patel</div>
        </div>
        <ChevronDown className="ml-3 w-4 h-4 text-[#2C2C4A]" />
      </div>
    </div>
  );
};

export default Frame;
