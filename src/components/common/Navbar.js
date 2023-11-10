// import React from 'react';
// import { useState } from 'react';

// const Navbar = () => {
//   const [mobileTabsVisible, setMobileTabsVisible] = useState(false);

//   const toggleMobileTabs = () => {
//     setMobileTabsVisible(!mobileTabsVisible);
//   };

//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <img src="your-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
//           <div className="hidden md:flex space-x-4">
//             <a href="#" className="text-white hover:text-gray-300">
//               Tab 1
//             </a>
//             <a href="#" className="text-white hover:text-gray-300">
//               Tab 2
//             </a>
//             <a href="#" className="text-white hover:text-gray-300">
//               Tab 3
//             </a>
//             <a href="#" className="text-white hover:text-gray-300">
//               Tab 4
//             </a>
//             <a href="#" className="text-white hover:text-gray-300">
//               Tab 5
//             </a>
//           </div>
//         </div>
//         <div className="md:hidden">
//           <button
//             className="text-white"
//             onClick={toggleMobileTabs}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//         <a
//           href="#"
//           className="hidden md:block bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100"
//         >
//           Button
//         </a>
//       </div>
//       {mobileTabsVisible && (
//         <div className="md:hidden bg-blue-500 p-4">
//           <a href="#" className="block text-white hover:text-gray-300">
//             Tab 1
//           </a>
//           <a href="#" className="block text-white hover:text-gray-300">
//             Tab 2
//           </a>
//           <a href="#" className="block text-white hover:text-gray-300">
//             Tab 3
//           </a>
//           <a href="#" className="block text-white hover:text-gray-300">
//             Tab 4
//           </a>
//           <a href="#" className="block text-white hover:text-gray-300">
//             Tab 5
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// // import Image from 'next/image'

// // export default function Navbar() {
// //   return (

// //     <div class="bg-blue-500 p-4">
// //       <div class="container mx-auto flex justify-between items-center">
// //         <div class="flex items-center">
// //           <img src="your-logo.png" alt="Logo" class="h-8 w-8 mr-2"/>

// //             <div class="hidden md:flex space-x-4">
// //               <a href="#" class="text-white hover:text-gray-300">Tab 1</a>
// //               <a href="#" class="text-white hover:text-gray-300">Tab 2</a>
// //               <a href="#" class="text-white hover:text-gray-300">Tab 3</a>
// //               <a href="#" class="text-white hover:text-gray-300">Tab 4</a>
// //               <a href="#" class="text-white hover:text-gray-300">Tab 5</a>
// //             </div>
// //         </div>

// //         <div class="md:hidden">
// //           <button class="text-white">
// //             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
// //             </svg>
// //           </button>
// //         </div>

// //         <a href="#" class="hidden md:block bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100">Button</a>
// //       </div>
// //     </div>


// //   )
// // }
