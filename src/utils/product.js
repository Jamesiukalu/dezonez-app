import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
  } from '@heroicons/react/24/outline'
  
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

  export const products = [
    { 
      name: 'POP Ceilings', 
      description: 'Description of plaster of Paris ceilings, designs, and benefits', 
      href: '/services/pop-ceilings', 
      icon: ChartPieIcon,
      image: 'https://via.placeholder.com/800x400',
      video: 'https://www.youtube.com/embed/StDDuQRO17A',
    },
    { 
      name: 'Electrical Installations', 
      description: 'Safe and modern electrical solutions for homes', 
      href: '/services/electrical-installations', 
      icon: CursorArrowRaysIcon,
      image: 'https://via.placeholder.com/800x400',
      video: 'https://www.youtube.com/embed/pY_6WAuVb7I',
    },
    { 
      name: 'Tiling', 
      description: 'Floor and wall tiling for aesthetics and durability', 
      href: '/services/tiling', 
      icon: FingerPrintIcon,
      image: 'https://via.placeholder.com/800x400',
      video: 'https://www.youtube.com/embed/yZM_o6Z5qmo',
    },
    { 
      name: 'Painting & Wall Finishing', 
      description: 'Satin, emulsion, matt paints, and wall screeding', 
      href: '/services/painting-wall-finishing', 
      icon: SquaresPlusIcon,
      image: 'https://via.placeholder.com/800x400',
      video: 'https://www.youtube.com/embed/bLbUIevOxzY',
    },
    { 
      name: 'House Interiors', 
      description: 'Furniture settings, curtains, TV consoles, and more.', 
      href: '/services/house-interiors', 
      icon: ArrowPathIcon,
      image: 'https://via.placeholder.com/800x400',
      video: 'https://www.youtube.com/embed/lQ-8lv1XSRE',
    },
    { 
      name: 'Rough Walls & Terrine', 
      description: 'Wall preparation and finishing for a polished look', 
      href: '/services/rough-walls-terrine', 
      icon: ArrowPathIcon,
      image: 'https://via.placeholder.com/800x400',
      video: 'https://www.youtube.com/embed/CKeXQRSjk_M',
    },
  ];
  
  export const callsToAction = [
    { name: 'Watch demo', href: '/portfolio', icon: PlayCircleIcon },
    { name: 'Contact Us', href: '/contact', icon: PhoneIcon },
  ];