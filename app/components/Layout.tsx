'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Frame from './Frame';
import Searchbar from './Searchbar';
import Contentbuttons from './Contentbuttons';
import StoryGrid from './StoryGrid';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Frame setSidebarOpen={setSidebarOpen} />

        {/* Sticky Top Filters */}
        <div className="bg-white z-10 sticky top-0 shadow-sm">
          <div className="p-4">
            <Searchbar />
            <Contentbuttons />
          </div>
        </div>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-scroll bg-gray-50 p-4">
          <StoryGrid />

          {/* Any other page content */}
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
