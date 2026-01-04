import {
  FaGlobe,
  FaUpload,
  FaUserCheck,
  FaHandshake,
  FaLock,
  FaChartLine,
} from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      icon: <FaGlobe />,
      title: "Easy Product Import",
      desc: "Import products safely and easily from any country around the world using our trusted global network.",
    },
    {
      icon: <FaUpload />,
      title: "Post Your Exports",
      desc: "Publish your export products and reach international buyers within minutes.",
    },
    {
      icon: <FaUserCheck />,
      title: "Verified Seller System",
      desc: "All sellers are verified to ensure safe, reliable, and trustworthy business transactions.",
    },
    {
      icon: <FaHandshake />,
      title: "Direct Buyer–Seller Contact",
      desc: "Connect directly with buyers and sellers for faster communication and quicker deal closing.",
    },
    {
      icon: <FaLock />,
      title: "Secure Transactions",
      desc: "Your payments and personal data are fully protected with advanced security systems.",
    },
    {
      icon: <FaChartLine />,
      title: "Global Market Insights",
      desc: "Access real-time global trade insights, market trends, and analytics to grow your business faster.",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-4">
          🚀 <span className="text-blue-600">Our</span>{" "}
          <span className="text-green-600">Services</span>
        </h2>
        <p className="text-center mb-10 text-gray-500">
          Explore the powerful services that make global trading simple and
          secure
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className=" rounded-xl shadow-md p-6 text-center transition-all duration-200
                         hover:shadow-2xl bg-white  hover:scale-[0.99]"
            >
              <div className="text-4xl text-primary mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
