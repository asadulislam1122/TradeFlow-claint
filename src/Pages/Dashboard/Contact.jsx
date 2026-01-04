import React, { useEffect, useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch("https://tradeflow-sarver.vercel.app/contact")
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 min-h-screen transition-colors duration-500">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-10 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-200 dark:shadow-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight">
              <span className="text-green-600 dark:text-green-400 uppercase">
                Messages
              </span>
            </h2>
            <p className="text-blue-500 dark:text-blue-400 font-bold text-sm">
              Total Received: {contact.length}
            </p>
          </div>
        </div>
      </div>

      {/* Message List */}
      <div className="space-y-6">
        {contact.map((item, index) => (
          <div
            key={item._id || index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                {/* Avatar with Gradient */}
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-blue-600 dark:to-indigo-700 rounded-full flex items-center justify-center text-white text-xl font-black shadow-md border-2 border-white dark:border-gray-700">
                  {item.name?.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-sm text-blue-500 dark:text-blue-300 font-semibold opacity-90">
                    {item.email}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                {formatDate(item.createdAt)}
              </span>
            </div>

            {/* Message Box */}
            <div className="relative group">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-blue-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-5 rounded-xl border border-gray-100 dark:border-gray-800">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm italic overflow-hidden">
                  "{item.message}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
