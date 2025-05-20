import React, { useEffect, useState } from "react";

const StatusModal = ({ isOpen, onClose, message, isError }) => {
  const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    if (isOpen && !isError && message.includes("succesfully")) {
      setShowEmoji(false);
      setTimeout(() => setShowEmoji(true), 50); // trigger animation
    }
  }, [isOpen, isError, message]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-[#00000095] flex justify-center items-center px-2">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full text-center ">
        <div className="w-full">
          {!isError && showEmoji && (
            <span className="animate-pump-zing shadow-3xl">✉️</span>
          )}
        </div>
        <p
          className={`text-lg font-semibold whitespace-nowrap ${
            isError ? "text-red-600" : "text-green-600"
          }`}
        >
          {message}{" "}
        </p>
        <button
          onClick={onClose}
          className="mt-8 px-4 py-2 bg-[#555555] text-white-50 rounded-md hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default StatusModal;
