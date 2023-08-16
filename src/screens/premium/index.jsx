// import React, { useState } from "react";
// import { Box, Card, CardContent, Typography } from "@mui/material";
// import { FaCheckCircle, FaMoneyBillAlt, FaUserFriends, FaClipboardList, FaCalendarAlt,FaTrophy } from "react-icons/fa";
// import { FiArrowRightCircle } from "react-icons/fi";
// import Header from "../../components/Header";
// function PremiumFeatures() {
//   <Header title="Premium Features" subtitle="Explore our premium offerings" />
//   return (
//     <Box m="20px">
//     <div className="flex items-center justify-center h-screen"> {/* Center vertically and horizontally */}
//       <section className="text-gray-600 body-font overflow-hidden">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-col text-center w-full mb-20">
//       <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
//       <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Empowering Change Through Collaboration: Join Hands with Us in Our Noble Mission!</p>
//       <div className="flex mx-auto border-2 border-[#4cceac] rounded overflow-hidden mt-6">
//         <button className="py-1 px-4 bg-[#4cceac] text-white focus:outline-none">Monthly</button>
//         <button className="py-1 px-4 focus:outline-none">Annually</button>
//       </div>
//     </div>
//     <div className="flex flex-wrap justify-center"> {/* Use justify-center to center the card container */}
//             <div className="p-4 xl:w-1/3 md:w-1/2 w-full"> {/* Increased width */}
//         <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
//           <h2 className="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
//           <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
//           <p className="flex items-center text-gray-600 mb-2">
//             <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
//               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
//                 <path d="M20 6L9 17l-5-5"></path>
//               </svg>
//             </span>Food donation platform
//           </p>
//           <p className="flex items-center text-gray-600 mb-2">
//             <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
//               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
//                 <path d="M20 6L9 17l-5-5"></path>
//               </svg>
//             </span>Basic analytics
//           </p>
//           <p className="flex items-center text-gray-600 mb-2">
//             <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
//               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
//                 <path d="M20 6L9 17l-5-5"></path>
//               </svg>
//             </span>Connection with NGOs
//           </p>
//           <p className="flex items-center text-gray-600 mb-6">
//             <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
//               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
//                 <path d="M20 6L9 17l-5-5"></path>
//               </svg>
//             </span>Limited visibility
//           </p>
//           <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button>
//           <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
//         </div>
//       </div>
//       <div className="p-4 xl:w-1/3 md:w-1/2 w-full"> {/* Increased width */}
//         <div className="h-full p-6 rounded-lg border-2 border-[#4cceac] flex flex-col relative overflow-hidden">
//           <span className="bg-[#4cceac] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
//           <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
//           <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
//             <span>$38</span>
//             <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
//           </h1>
//           <p className="flex items-center text-gray-600 mb-2">
//             <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
//               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
//                 <path d="M20 6L9 17l-5-5"></path>
//               </svg>
//             </span>Enhanced visibility
//           </p>
//           <p className="flex items-center text-gray-600 mb-2">
//             <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
//               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
//                 <path d="M20 6L9 17l-5-5"></path>
//               </svg>
//             </span>Dedicated support
//           </p>
//           <p className="flex items-center text-gray-600 mb-2">
//             <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
//               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
//                 <path d="M20 6L9 17l-5-5"></path>
//               </svg>
//             </span>Advanced analytics and reports
//           </p>
//           <p className="flex items-center text-gray-600 mb-6">
//             <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
//               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
//                 <path d="M20 6L9 17l-5-5"></path>
//               </svg>
//             </span>Customized donation reports
//           </p>
//           <button className="flex items-center mt-auto text-white bg-[#4cceac] border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </button>
//           <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
//         </div>
//       </div>
    
//     </div>
//   </div>
// </section>
//     </div>
//     </Box>
//   )
// }

// export default PremiumFeatures

import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { FaCheckCircle, FaMoneyBillAlt, FaUserFriends, FaClipboardList, FaCalendarAlt } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import Header from "../../components/Header";

const PremiumFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const primaryColor = "#4cceac"; // Greenish turquoise
  const secondaryColor = "black";

  const features = [
    {
      icon: FaClipboardList,
      text: "Food donation platform",
    },
    {
      icon: FaUserFriends,
      text: "Connection with NGOs",
    },
    {
      icon: FaMoneyBillAlt,
      text: "Limited visibility",
    },
    {
      icon: FaCalendarAlt,
      text: "Basic analytics",
    },
  ];

  const premiumFeatures = [
    {
      icon: FaMoneyBillAlt,
      text: "Enhanced visibility",
    },
    {
      icon: FaUserFriends,
      text: "Dedicated support",
    },
    {
      icon: FaCalendarAlt,
      text: "Advanced analytics and reports",
    },
    {
      icon: FaClipboardList,
      text: "Customized donation reports",
    },
    // Add more premium features
  ];

  return (
    <Box m="20px">
      <Header title="Premium Features" subtitle="Explore our premium offerings" />
      <Box display="flex" justifyContent="center" alignItems="stretch" mt={4}>
        {/* First Card */}
        <Card
          sx={{
            width: 400,
            height: "100%",
            margin: "0 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "transform 0.3s, box-shadow 0.3s",
            backgroundColor: primaryColor,
            color: secondaryColor,
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: `0px 8px 16px rgba(0, 0, 0, 0.2)`,
            },
          }}
          onMouseEnter={() => handleCardHover(0)}
          onMouseLeave={handleCardLeave}
        >
          <CardContent>
            <Typography variant="h6" style={{ color: "black", marginBottom: "8px", fontSize: "20px" }}>FREE</Typography>
            <Typography variant="h5" style={{ color: "white", fontSize: "28px", marginBottom: "12px", textAlign: "left" }}>Free Services</Typography>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "12px", textAlign: "left" }}>
              {features.map((feature, index) => (
                <li key={index} style={{ marginBottom: "8px", display: "flex", alignItems: "center" }}>
                  <FaCheckCircle style={{ fontSize: "18px", marginRight: "8px" }} />
                  <Typography variant="body1" style={{ fontSize: "16px" }}>{feature.text}</Typography>
                </li>
              ))}
            </ul>
          </CardContent>
          <Box
            p={2}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-end"
            style={{
              transform: `translateY(${hoveredCard === 0 ? 0 : 100}px)`,
              transition: "transform 0.5s, opacity 0.5s",
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <FiArrowRightCircle style={{ fontSize: "24px", marginRight: "8px", transition: "transform 0.3s" }} />
              <Typography variant="body2" style={{ fontSize: "16px", opacity: hoveredCard === 0 ? 1 : 0, transition: "opacity 0.3s" }}>
                Continue with Free
              </Typography>
            </Box>
          </Box>
        </Card>

        {/* Second Card */}
        <Card
          sx={{
            width: 400,
            height: "100%",
            margin: "0 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "transform 0.5s, box-shadow 0.5s",
            backgroundColor: primaryColor,
            color: secondaryColor,
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: `0px 8px 16px rgba(0, 0, 0, 0.2)`,
            },
          }}
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={handleCardLeave}
        >
          <CardContent>
            <Typography variant="h6" style={{ color: "black", marginBottom: "8px", fontSize: "20px" }}>$50</Typography>
            <Typography variant="h5" style={{ color: "white", fontSize: "28px", marginBottom: "12px", textAlign: "left" }}>Premium Services</Typography>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "12px", textAlign: "left" }}>
              {premiumFeatures.map((feature, index) => (
                <li key={index} style={{ marginBottom: "8px", display: "flex", alignItems: "center" }}>
                  <FaCheckCircle style={{ fontSize: "18px", marginRight: "8px" }} />
                  <Typography variant="body1" style={{ fontSize: "16px" }}>{feature.text}</Typography>
                </li>
              ))}
            </ul>
          </CardContent>
          <Box
            p={2}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-end"
            style={{
              transform: `translateY(${hoveredCard === 1 ? 0 : 100}px)`,
              transition: "transform 0.3s",
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <FiArrowRightCircle style={{ fontSize: "24px", marginRight: "8px", transition: "transform 0.3s" }} />
              <Typography variant="body2" style={{ fontSize: "16px", opacity: hoveredCard === 1 ? 1 : 0, transition: "opacity 0.3s" }}>
                Continue with Premium
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default PremiumFeatures;
