// // src/components/WhatsAppChatWidget.js

// import React, { useState } from 'react';

// // --- You can customize these default values ---
// const DEFAULT_PHONE_NUMBER = '+91 9890467841'; // <-- IMPORTANT: Replace with your WhatsApp number
// const DEFAULT_CONTACT_NAME = 'Hypno Healing'; // Replace with your name or company name
// const DEFAULT_HEADER_TITLE = 'Chat with us';

// // --- SVG Icons (No image files needed) ---
// const WhatsAppIcon = () => (
//   <svg viewBox="0 0 32 32" style={{ width: '100%', height: '100%', fill: 'white' }}>
//     <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.52-1.29.37-.775.37-1.448.26-1.59-.11-.143-.372-.214-.6-.214zm-2.815 4.532c-.27.187-.945.44-1.29.44-.143 0-.73-.143-1.448-.44-2.193-.99-3.957-2.61-4.87-4.11-.688-1.14-.99-2.14-.99-3.06V11.1c.01-.93.53-1.66 1.01-2.15.37-.37 1.02-.53 1.52-.53.47 0 .99.143 1.29.37.28.21.73.97.83 1.21.14.37.21.88.07 1.39-.14.51-.83.14-.98-.04-.14-.18-.94-1.1-.94-1.29s-.14-.28-.3-.28c-.07 0-.14.04-.28.14-.28.21-.47.68-.47.97s.21.94.3 1.1c.14.18.47.28.58.28.14 0 .28-.04.42-.14.28-.21 1.03-1.62 1.17-1.87.14-.28.28-.42.47-.42.21 0 .42.14.58.21.37.3.87.98.98 1.21.14.21.14.47.04.68-.14.21-.42.47-.53.58-.14.11-.21.21-.21.33 0 .14.21.42.42.63.28.28.77.68 1.26 1.1.28.21.47.42.68.63.18.18.3.3.47.3.14 0 .21-.04.3-.14.21-.21.77-.94.87-1.14.14-.21.28-.3.47-.3.21 0 .42.07.53.21.28.28.47.98.53 1.21.07.21.07.47-.04.68-.11.21-.53.53-.68.63z" />
//   </svg>
// );

// const CloseIcon = () => (
//   <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%', fill: 'white' }}>
//     <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
//   </svg>
// );

// const WhatsAppChatWidget = ({
//   phoneNumber = DEFAULT_PHONE_NUMBER,
//   contactName = DEFAULT_CONTACT_NAME,
//   headerTitle = DEFAULT_HEADER_TITLE,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggles the chat box visibility
//   const toggleChatBox = () => {
//     setIsOpen(!isOpen);
//   };

//   // Opens WhatsApp chat in a new tab
//   const openWhatsApp = () => {
//     // Ensures the phone number is clean and correct for the wa.me link
//     const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
//     window.open(`https://wa.me/${cleanPhoneNumber}`, '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <div className="whatsapp-widget-container">
//       {/* All styles are defined here within the component */}
//       <style>{`
//         .whatsapp-widget-container {
//           position: fixed;
//           bottom: 25px;
//           right: 25px;
//           z-index: 1000;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-end;
//         }

//         .whatsapp-float-button {
//           width: 60px;
//           height: 60px;
//           padding: 14px;
//           border-radius: 50%;
//           background-color: #25D366;
//           border: none;
//           cursor: pointer;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
//           transition: transform 0.3s ease, background-color 0.3s ease;
//         }

//         .whatsapp-float-button:hover {
//           transform: scale(1.1);
//           background-color: #128C7E;
//         }

//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .whatsapp-chat-box {
//           width: 350px;
//           background-color: #f0f2f5;
//           border-radius: 12px;
//           box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
//           overflow: hidden;
//           margin-bottom: 15px;
//           animation: fadeInUp 0.3s ease-out forwards;
//         }

//         .whatsapp-chat-header {
//           background-color: #008069;
//           color: white;
//           padding: 16px;
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           font-weight: 500;
//           font-family: sans-serif;
//         }

//         .whatsapp-chat-header-icon {
//           width: 24px;
//           height: 24px;
//         }

//         .whatsapp-chat-body {
//           padding: 16px;
//         }

//         .whatsapp-contact-item {
//           background-color: white;
//           padding: 12px;
//           border-radius: 8px;
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           cursor: pointer;
//           transition: background-color 0.2s ease;
//           border: 1px solid #e9edef;
//         }

//         .whatsapp-contact-item:hover {
//           background-color: #f5f5f5;
//         }

//         .whatsapp-contact-avatar {
//           width: 48px;
//           height: 48px;
//           padding: 10px;
//           border-radius: 50%;
//           background-color: #25D366;
//           flex-shrink: 0;
//         }

//         .whatsapp-contact-info {
//           flex-grow: 1;
//           display: flex;
//           flex-direction: column;
//           font-family: sans-serif;
//         }

//         .whatsapp-contact-name {
//           font-weight: 600;
//           color: #111b21;
//         }

//         .whatsapp-contact-status {
//           font-size: 0.8rem;
//           color: #667781;
//         }

//         .whatsapp-contact-icon {
//           width: 24px;
//           height: 24px;
//           color: #25D366;
//           fill: #25D366;
//           flex-shrink: 0;
//         }

//         /* --- Responsive Design --- */
//         @media (max-width: 768px) {
//           .whatsapp-widget-container {
//             bottom: 15px;
//             right: 15px;
//           }
//           .whatsapp-float-button {
//             width: 55px;
//             height: 55px;
//             padding: 12px;
//           }
//           .whatsapp-chat-box {
//             width: calc(100vw - 30px);
//             max-width: 350px;
//             margin-bottom: 10px;
//           }
//         }
//       `}</style>
      
//       {/* The chat box that appears on click */}
//       {isOpen && (
//         <div className="whatsapp-chat-box">
//           <div className="whatsapp-chat-header">
//             <div className="whatsapp-chat-header-icon">
//               <WhatsAppIcon />
//             </div>
//             <span>{headerTitle}</span>
//           </div>
//           <div className="whatsapp-chat-body">
//             <div className="whatsapp-contact-item" onClick={openWhatsApp}>
//               <div className="whatsapp-contact-avatar">
//                 <WhatsAppIcon />
//               </div>
//               <div className="whatsapp-contact-info">
//                 <span className="whatsapp-contact-name">{contactName}</span>
//                 <span className="whatsapp-contact-status">Online</span>
//               </div>
//               <div className="whatsapp-contact-icon">
//                 <WhatsAppIcon />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* The main floating button */}
//       <button
//         className="whatsapp-float-button"
//         onClick={toggleChatBox}
//         aria-label="Toggle WhatsApp Chat"
//       >
//         {isOpen ? <CloseIcon /> : <WhatsAppIcon />}
//       </button>
//     </div>
//   );
// };

// export default WhatsAppChatWidget;


// src/components/WhatsAppChatWidget.js

import React, { useState } from 'react';

// --- You can customize these default values ---
const DEFAULT_PHONE_NUMBER = '+91 8806024494'; 
const DEFAULT_CONTACT_NAME = 'Neha Pattel';
const DEFAULT_HEADER_TITLE = 'Chat with us!';

// --- NEW SVG Icons to match your design ---
const TelephoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#FFFFFF" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%', fill: 'white' }}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const WhatsAppChatWidget = ({
  phone = DEFAULT_PHONE_NUMBER,
  contact = DEFAULT_CONTACT_NAME,
  headerTitle = DEFAULT_HEADER_TITLE,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBox = () => setIsOpen(!isOpen);

  const openWhatsApp = () => {
    const cleanPhoneNumber = phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent('Hello, I would like to book a hypno healing session');
    window.open(`https://wa.me/${cleanPhoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="whatsapp-widget-container">
      <style>{`
        .whatsapp-widget-container {
          position: fixed;
          bottom: 25px;
          right: 25px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 15px; /* Gap between chatbox and button */
        }

        .whatsapp-float-container {
          display: flex;
          align-items: center;
          gap: 15px;
          /* This is the container for the text bubble and button when closed */
        }

        .whatsapp-text-bubble {
          padding: 10px 18px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          font-family: sans-serif;
          font-size: 15px;
          color: #333;
          white-space: nowrap;
          transition: opacity 0.3s, transform 0.3s;
        }

        .whatsapp-float-button {
          width: 60px;
          height: 60px;
          padding: 16px;
          border-radius: 50%;
          background-color: #4CAF50; /* A nice green color */
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s, background-color 0.3s;
        }

        .whatsapp-float-button:hover {
          transform: scale(1.1);
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .whatsapp-chat-box {
          width: 350px;
          background-color: #f0f2f5; /* Light gray background like the screenshot */
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          animation: fadeInUp 0.3s ease-out forwards;
        }

        .whatsapp-chat-header {
          background-color: #4CAF50; /* Darker teal/green */
          color: white;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          font-family: sans-serif;
        }

        .whatsapp-chat-header-icon {
          width: 24px;
          height: 24px;
        }

        .whatsapp-chat-body {
          padding: 16px;
        }

        .whatsapp-contact-item {
          background-color: white;
          padding: 12px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          border: 1px solid #e9edef;
        }

        .whatsapp-contact-item:hover {
          background-color: #f5f5f5;
        }

        .whatsapp-contact-avatar {
          width: 36px;
          height: 36px;
          padding: 10px;
          border-radius: 50%;
          background-color: #4CAF50;
          flex-shrink: 0;
        }

        .whatsapp-contact-info {
          text-align: left;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
        }

        .whatsapp-contact-name {
          font-weight: 600;
          font-size: 1rem;
          color: #111b21;
        }

        .whatsapp-contact-status {
          font-size: 0.8rem;
          color: #667781;
        }
        
        /* --- Responsive Design --- */
        @media (max-width: 768px) {
          .whatsapp-widget-container {
            bottom: 15px;
            right: 15px;
            gap: 10px;
          }
          .whatsapp-text-bubble {
            /* Hide the text bubble on mobile to save space */
            display: none;
          }
          .whatsapp-float-button {
            width: 55px;
            height: 55px;
            padding: 14px;
          }
          .whatsapp-chat-box {
            width: calc(100vw - 30px);
            max-width: 350px;
          }
        }
      `}</style>
      
      {isOpen ? (
        // --- OPEN STATE ---
        <>
          <div className="whatsapp-chat-box">
            <div className="whatsapp-chat-header">
              <div className="whatsapp-chat-header-icon">
                <TelephoneIcon />
              </div>
              <span>{headerTitle}</span>
            </div>
            <div className="whatsapp-chat-body">
              <div className="whatsapp-contact-item" onClick={openWhatsApp}>
                <div className="whatsapp-contact-avatar">
                  <TelephoneIcon />
                </div>
                <div className="whatsapp-contact-info">
                  <span className="whatsapp-contact-name">{contact}</span>
                  <span className="whatsapp-contact-status">Online</span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="whatsapp-float-button"
            onClick={toggleChatBox}
            aria-label="Close Chat"
          >
            <CloseIcon />
          </button>
        </>
      ) : (
        // --- CLOSED STATE ---
        <div className="whatsapp-float-container">
          <div className="whatsapp-text-bubble">
            <span>Need Help? <strong>Chat with us</strong></span>
          </div>
          <button
            className="whatsapp-float-button"
            onClick={toggleChatBox}
            aria-label="Open Chat"
          >
            <TelephoneIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChatWidget;