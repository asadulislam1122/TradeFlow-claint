import Marquee from "react-fast-marquee";
import {
  FaUserShield,
  FaPercent,
  FaHeadset,
  FaRocket,
  FaSyncAlt,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaUserShield />,
      title: "Trusted Exporters",
      desc: "Trade confidently with verified exporters and 100% authentic product listings.",
    },
    {
      icon: <FaPercent />,
      title: "Low Commission",
      desc: "Enjoy minimal platform charges so you can keep more of your profit.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      desc: "Our support team is always available to help you anytime, anywhere.",
    },
    {
      icon: <FaRocket />,
      title: "Fast Deal Closing",
      desc: "Close deals faster with real-time chat and quick seller verification.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Live Product Updates",
      desc: "Get real-time updates on product availability and market changes.",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          <span className="text-green-600">Why Choose</span>{" "}
          <span className="text-blue-600">TradeFlow</span>
        </h2>
        <p className="text-center mb-12 text-gray-700 max-w-xl mx-auto">
          Everything you need for smooth, secure and profitable global trading.
        </p>

        <Marquee pauseOnHover speed={50} gradient={false}>
          {reasons.map((item, i) => (
            <div
              key={i}
              className="mx-4 min-w-[280px] max-w-[280px] bg-white rounded-2xl p-6 text-black shadow-md
                         flex flex-col items-center justify-start min-h-[250px]
                         transition-all duration-300 hover:shadow-xl hover:scale-[1.05]"
            >
              <div className="text-4xl text-blue-800 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-center">
                {item.title}
              </h3>
              <p className="text-sm text-center leading-relaxed mt-10">
                {item.desc}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default WhyChooseUs;
