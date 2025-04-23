import React from 'react';
import { MoreHorizontal, Eye } from 'lucide-react';

type Status = 'Published' | 'Created' | 'Draft';

interface Story {
  id: number;
  title: string;
  category: string;
  date: string;
  status: Status;
  image: string;
  views: number;
}

const stories: Story[] = [
  {
    id: 1,
    title: 'How 7 lines code turned into $36 Billion Empire',
    category: 'BUSINESS',
    date: '20 Sep 2022',
    status: 'Published',
    image:
       'https://img.freepik.com/free-vector/abstract-style-big-data-background_23-2147909603.jpg?t=st=1745391644~exp=1745395244~hmac=1415bcd6c062e1ec1e686351ebaa366561b65886f3fcd0a733d22e648b7e5693&w=1060',
    views: 428,
  },
  {
    id: 2,
    title: 'Chez pierre restaurant in Monte Carlo by Vuidafieri',
    category: 'BUSINESS',
    date: '20 Sep 2022',
    status: 'Created',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_GGqWXsoNjgw0JvGUGWNR4EsK_U9eMlxNDg&s',
    views: 428,
  },
  {
    id: 3,
    title: 'Teknion wins Gold at 2022 International Design Awards',
    category: 'Politics',
    date: '20 Sep 2022',
    status: 'Draft',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nzHMa-FjzOh5bT9cwCppZfkf5HvzcughMfnJM7PAWFMIoYQl',
    views: 428,
  },
  {
    id: 4,
    title: 'How 7 lines code turned into $36 Billion Empire',
    category: 'BUSINESS',
    date: '20 Sep 2022',
    status: 'Published',
    image:
      'https://cdni.iconscout.com/illustration/premium/thumb/man-coder-programming-on-computer-illustration-download-in-svg-png-gif-file-formats--html-logo-java-web-developer-doing-coding-laptop-programmer-software-development-pack-design-illustrations-6200255.png?f=webp',
    views: 428,
  },
  {
    id: 5,
    title: 'How 7 lines code turned into $36 Billion Empire',
    category: 'BUSINESS',
    date: '20 Sep 2022',
    status: 'Published',
    image:
      'https://media.istockphoto.com/id/653836738/photo/he-puts-the-pro-in-programmer.jpg?s=612x612&w=0&k=20&c=NAe1yKNfefysvClfLDI2JB9leOPpzbppqpOrO60PgJA=',
    views: 428,
  },
  {
    id: 6,
    title: 'Chez pierre restaurant in Monte Carlo by Vuidafieri',
    category: 'BUSINESS',
    date: '20 Sep 2022',
    status: 'Created',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/640px-Gull_portrait_ca_usa.jpg',
    views: 428,
  },
  {
    id: 7,
    title: 'Teknion wins Gold at 2022 International Design Awards',
    category: 'Politics',
    date: '20 Sep 2022',
    status: 'Draft',
    image:
      'https://sanaelegance.com/cdn/shop/files/PastelTeal2.jpg?v=1731222654&width=416',
    views: 428,
  },
  {
    id: 8,
    title: 'How 7 lines code turned into $36 Billion Empire',
    category: 'BUSINESS',
    date: '20 Sep 2022',
    status: 'Published',
    image:
      'https://static.vecteezy.com/system/resources/previews/027/529/363/non_2x/young-man-writing-code-on-a-desktop-computer-software-developer-at-work-programming-coding-script-java-digital-program-code-on-monitor-screen-illustration-vector.jpg',
    views: 428,
  },
];

const statusColor: Record<Status, string> = {
  Published: 'bg-[#C6F6D5] text-[#276749]',
  Created: 'bg-[#BEE3F8] text-[#2B6CB0]',
  Draft: 'bg-[#E2E8F0] text-[#4A5568]',
};

// three bars + one bent arrow
const DataTrendIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Left bar */}
    <path 
      d="M4.58667 12.6C4.31334 12.6 4.08667 12.3733 4.08667 12.1V10.72C4.08667 10.4466 4.31334 10.22 4.58667 10.22C4.86 10.22 5.08667 10.4466 5.08667 10.72V12.1C5.08667 12.38 4.86 12.6 4.58667 12.6Z" 
      fill="#1A1443"
    />
    
    {/* Middle bar */}
    <path 
      d="M8 12.6C7.72667 12.6 7.5 12.3733 7.5 12.1V9.33331C7.5 9.05998 7.72667 8.83331 8 8.83331C8.27333 8.83331 8.5 9.05998 8.5 9.33331V12.1C8.5 12.38 8.27333 12.6 8 12.6Z" 
      fill="#1A1443"
    />
    
    {/* Right bar */}
    <path 
      d="M11.4133 12.6C11.14 12.6 10.9133 12.3733 10.9133 12.1V7.95331C10.9133 7.67997 11.14 7.45331 11.4133 7.45331C11.6867 7.45331 11.9133 7.67997 11.9133 7.95331V12.1C11.9133 12.38 11.6933 12.6 11.4133 12.6Z" 
      fill="#1A1443"
    />
    
    {/* Curved arrow body */}
    <path 
      d="M4.58665 8.78669C4.35999 8.78669 4.15999 8.63336 4.09999 8.40669C4.03332 8.14003 4.19332 7.86669 4.46665 7.80003C6.91999 7.18669 9.07999 5.84669 10.7267 3.93336L11.0333 3.57336C11.2133 3.36669 11.5267 3.34003 11.74 3.52003C11.9467 3.70003 11.9733 4.01336 11.7933 4.22669L11.4867 4.58669C9.70665 6.66669 7.35999 8.11336 4.70665 8.77336C4.66665 8.78669 4.62665 8.78669 4.58665 8.78669Z" 
      fill="#1A1443"
    />
    
    {/* Arrow head */}
    <path 
      d="M11.4133 6.34669C11.14 6.34669 10.9133 6.12002 10.9133 5.84669V4.40002H9.45999C9.18666 4.40002 8.95999 4.17336 8.95999 3.90002C8.95999 3.62669 9.18666 3.40002 9.45999 3.40002H11.4133C11.6867 3.40002 11.9133 3.62669 11.9133 3.90002V5.85336C11.9133 6.12669 11.6933 6.34669 11.4133 6.34669Z" 
      fill="#1A1443"
    />
    
    {/* Border square */}
    <path 
      d="M10 15.1666H6.00001C2.38001 15.1666 0.833344 13.62 0.833344 9.99998V5.99998C0.833344 2.37998 2.38001 0.833313 6.00001 0.833313H10C13.62 0.833313 15.1667 2.37998 15.1667 5.99998V9.99998C15.1667 13.62 13.62 15.1666 10 15.1666ZM6.00001 1.83331C2.92668 1.83331 1.83334 2.92665 1.83334 5.99998V9.99998C1.83334 13.0733 2.92668 14.1666 6.00001 14.1666H10C13.0733 14.1666 14.1667 13.0733 14.1667 9.99998V5.99998C14.1667 2.92665 13.0733 1.83331 10 1.83331H6.00001Z" 
      fill="#1A1443"
    />
  </svg>
);

const StoryGrid = () => (
  <div className="h-[600px] overflow-y-auto p-4 space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stories.map((story) => (
        <div
          key={story.id}
          className="group relative h-[360px] bg-cover bg-center rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          style={{ backgroundImage: `url(${story.image})` }}
        >
          {/* Top-right pills */}
          <div className="absolute top-3 right-3 flex space-x-2">
            <button className="flex items-center bg-white px-3 py-1 rounded-lg shadow text-xs space-x-1">
              <Eye className="w-4 h-4 text-[#1A1443]" />
              <span className="text-[#1A1443] font-medium">
                {story.views}
              </span>
            </button>
            <button className="flex items-center bg-white px-3 py-1 rounded-lg shadow text-xs">
              <DataTrendIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom overlay */}
          <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
            {/* Title */}
            <h3 className="text-base font-semibold mb-1 line-clamp-2">
              {story.title}
            </h3>

            {/* category/date + status on same row */}
            <div className="flex items-center justify-between text-xs text-gray-200 mb-3">
              <span>
                <strong className="uppercase">{story.category}</strong> • {story.date}
              </span>
              <span className={`px-3 py-1 rounded-sm ${statusColor[story.status]}`}>
                {story.status}
              </span>
            </div>

            {/* View + more buttons */}
            <div className="flex items-center gap-2">
              <button className="flex-1 bg-white text-[#1A1443] py-2 rounded-lg text-sm font-medium transition hover:bg-gray-100">
                View
              </button>
              <button className="p-2 bg-white rounded-lg transition hover:bg-gray-100">
                <MoreHorizontal className="w-4 h-4 text-[#1A1443]" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StoryGrid;
