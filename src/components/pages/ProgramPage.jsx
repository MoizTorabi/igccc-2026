// import React, { useState } from 'react';
// import { Calendar, Clock, Mic, Users, BookOpen, Coffee } from 'lucide-react';
// import { programData, tracks } from '../../data/program';

// const ProgramPage = () => {
//   const [activeDay, setActiveDay] = useState(0);

//   // Helper to get the icon based on event type
//   const getEventIcon = (type) => {
//     switch (type) {
//       case 'keynote': return <Mic className="text-primary" />;
//       case 'panel': return <Users className="text-secondary" />;
//       case 'workshop': return <BookOpen className="text-indigo-600" />;
//       case 'break': return <Coffee className="text-orange-500" />;
//       default: return <Clock className="text-gray-500" />;
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
      
//       {/* Header */}
//       <div className="bg-primary text-white py-16 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Conference Schedule</h1>
//           <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//             A comprehensive 4-day program featuring keynotes, panels, and interdisciplinary sessions.
//           </p>
//         </div>
//       </div>

//       {/* Day Navigation Tabs */}
//       <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
//         <div className="bg-white rounded-xl shadow-lg p-2 flex flex-wrap md:flex-nowrap justify-between gap-2">
//           {programData.map((day, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveDay(index)}
//               className={`flex-1 py-4 px-4 rounded-lg text-center transition-all duration-200 ${
//                 activeDay === index
//                   ? 'bg-secondary text-white shadow-md transform -translate-y-1'
//                   : 'hover:bg-gray-50 text-gray-600'
//               }`}
//             >
//               <span className="block font-bold text-lg">{day.day}</span>
//               <span className={`text-sm ${activeDay === index ? 'text-blue-100' : 'text-gray-400'}`}>
//                 {day.date}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main Schedule Content */}
//       <div className="max-w-4xl mx-auto px-6 py-16">
//         <div className="space-y-6">
//           {programData[activeDay].events.map((event, idx) => (
//             <div
//               key={idx}
//               className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow"
//             >
//               {/* Time Column */}
//               <div className="w-24 flex-shrink-0 text-right pt-1 hidden md:block">
//                 <span className="font-bold text-gray-400 uppercase tracking-wider text-sm">
//                   {event.time}
//                 </span>
//               </div>

//               {/* Icon Column */}
//               <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full hidden md:block">
//                 {getEventIcon(event.type)}
//               </div>

//               {/* Content Column */}
//               <div>
//                 <span className="md:hidden text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">
//                   {event.time}
//                 </span>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
//                 <div className="flex items-center gap-2">
//                   <span className={`text-xs px-3 py-1 rounded-full font-medium ${
//                     event.type === 'keynote' ? 'bg-purple-100 text-purple-700' :
//                     event.type === 'panel' ? 'bg-blue-100 text-blue-700' :
//                     event.type === 'ceremony' ? 'bg-yellow-100 text-yellow-700' :
//                     'bg-gray-100 text-gray-600'
//                   }`}>
//                     {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Research Tracks Section */}
//       <div className="bg-white py-16 px-6 border-t border-gray-200">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Research Tracks</h2>
//           <div className="grid md:grid-cols-3 gap-4">
//             {tracks.map((track, index) => (
//               <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
//                 <div className="w-2 h-2 rounded-full bg-secondary"></div>
//                 <span className="font-medium text-gray-700">{track}</span>
//               </div>
//             ))}
//           </div>
          
//           {/* <div className="text-center mt-12">
//             <p className="text-gray-600 mb-6">Interested in presenting your research?</p>
//             <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
//               Submit an Abstract
//             </button>
//           </div> */}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ProgramPage;




import React, { useState } from 'react';
import { Calendar, Clock, Mic, Users, BookOpen, Coffee, Hourglass } from 'lucide-react';
import { programData, tracks } from '../../data/program';

const ProgramPage = () => {
  const [activeDay, setActiveDay] = useState(0);

  // Helper to get the icon based on event type
  const getEventIcon = (type) => {
    switch (type) {
      case 'keynote': return <Mic className="text-primary" />;
      case 'panel': return <Users className="text-secondary" />;
      case 'workshop': return <BookOpen className="text-indigo-600" />;
      case 'break': return <Coffee className="text-orange-500" />;
      default: return <Clock className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-primary text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conference Schedule</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A comprehensive 4-day program featuring keynotes, panels, and interdisciplinary sessions.
          </p>
        </div>
      </div>

      {/* Day Navigation Tabs */}
      <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-2 flex flex-wrap md:flex-nowrap justify-between gap-2">
          {programData.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`flex-1 py-4 px-4 rounded-lg text-center transition-all duration-200 ${
                activeDay === index
                  ? 'bg-secondary text-white shadow-md transform -translate-y-1'
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              <span className="block font-bold text-lg">{day.day}</span>
              <span className={`text-sm ${activeDay === index ? 'text-blue-100' : 'text-gray-400'}`}>
                {day.date}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Schedule Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 min-h-[400px]">
        {/* <div className="flex flex-col items-center justify-center text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="bg-blue-50 p-6 rounded-full mb-6 text-primary animate-pulse">
             <Hourglass size={48} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Schedule Coming Soon</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            We are currently finalizing the detailed agenda for {programData[activeDay].day}. 
            Please check back shortly for updates.
          </p>
        </div> */}

        {/* ORIGINAL SCHEDULE CODE (COMMENTED OUT FOR FUTURE USE) */}
        <div className="space-y-6">
          {programData[activeDay].events.map((event, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow"
            >
              <div className="w-24 flex-shrink-0 text-right pt-1 hidden md:block">
                <span className="font-bold text-gray-400 uppercase tracking-wider text-sm">
                  {event.time}
                </span>
              </div>

              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full hidden md:block">
                {getEventIcon(event.type)}
              </div>

              <div>
                <span className="md:hidden text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">
                  {event.time}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    event.type === 'keynote' ? 'bg-purple-100 text-purple-700' :
                    event.type === 'panel' ? 'bg-blue-100 text-blue-700' :
                    event.type === 'ceremony' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div> 
       

      </div>

      {/* Research Tracks Section */}
      {/* <div className="bg-white py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Research Tracks</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {tracks.map((track, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="font-medium text-gray-700">{track}</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default ProgramPage;