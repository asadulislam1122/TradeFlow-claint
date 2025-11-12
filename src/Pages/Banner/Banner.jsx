import bannerBg from "../../assets/desktop-wallpaper-understanding-the-logistics-of-importing-and-exporting-goods-for-your-business-import-export.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 1.5 },
    },
  };

  return (
    // 👇 এখানে z-0 দেওয়া হয়েছে যাতে Navbar (z-50) উপরে থাকে
    <div className="relative h-screen bg-gray-900 overflow-hidden z-0">
      {/* <title>Home Page</title> */}
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 z-0"
        style={{
          backgroundImage: `url(${bannerBg || "/placeholder-ship.jpg"})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-sm tracking-widest uppercase font-medium mb-4"
          variants={itemVariants}
        >
          WE ARE PROUD TO BE YOUR PARTNER IN
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 max-w-4xl leading-tight"
          variants={headlineVariants}
        >
          SEAMLESS GLOBAL <span className="text-red-600">IMPORT & EXPORT</span>{" "}
          SOLUTIONS
        </motion.h1>

        <motion.p
          className="text-base md:text-lg max-w-3xl mb-10 font-light text-gray-200"
          variants={itemVariants}
        >
          We handle complex logistics across air, sea, and land. Our commitment
          ensures your cargo reaches its destination efficiently, securely, and{" "}
          <strong>ALWAYS ON DEMAND</strong>, meeting all international
          standards.
        </motion.p>

        <motion.button
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 sm:py-4 rounded-lg transition w-full sm:w-auto"
          variants={buttonVariants}
        >
          GET A FREE QUOTE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Banner;
