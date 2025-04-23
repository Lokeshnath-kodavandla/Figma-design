import { cloneElement } from 'react';
import {
  FileText, User, CheckSquare, MonitorSmartphone,
  BarChart3, Image, Sliders, Bell, CreditCard,
  Settings, Headphones, HomeIcon, X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const menuItems = [
    { name: 'Dashboard', icon: <HomeIcon size={18} /> },
    { name: 'Content', icon: <FileText size={18} /> },
    { name: 'User', icon: <User size={18} /> },
    { name: 'Task', icon: <CheckSquare size={18} /> },
    { name: 'App/Web', icon: <MonitorSmartphone size={18} /> },
    { name: 'Analytics', icon: <BarChart3 size={18} /> },
    { name: 'Media', icon: <Image size={18} /> },
    { name: 'Customize', icon: <Sliders size={18} /> },
    { name: 'Notifications', icon: <Bell size={18} /> },
    { name: 'Subscription', icon: <CreditCard size={18} /> },
    { name: 'Settings', icon: <Settings size={18} /> },
  ];

  return (
    <aside
      className={`
        fixed z-40 inset-y-0 left-0 w-[296px] transform bg-white shadow-sm border-r px-6 py-4
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:block
      `}
    >
      {/* Close Button (mobile) */}
      <div className="flex justify-end md:hidden">
        <button onClick={() => setIsOpen(false)}>
          <X size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-2 mt-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${
              item.name === 'Content'
                ? 'bg-[#1C1442] text-white font-semibold'
                : 'text-[#53545C] hover:bg-gray-100'
            }`}
          >
            <span className={item.name === 'Content' ? 'text-white' : 'text-[#292D32]'}>
              {cloneElement(item.icon, { color: item.name === 'Content' ? '#FFFFFF' : '#292D32' })}
            </span>

            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      {/* Contact Support */}
      <div className="mt-4 mb-10">
        <div className="flex items-center gap-3 bg-indigo-50 px-4 py-3 rounded-lg text-indigo-600 font-medium cursor-pointer">
          <Headphones size={18} className="text-[#292D32]" />
          <span>Contact Support</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
