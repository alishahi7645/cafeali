import { motion } from "framer-motion";
import coffee1 from "../../assets/coffee/coffee1.png";
import coffee3 from "../../assets/coffee/coffee3.png";
import { div } from "framer-motion/client";

const servicesData = [
  {
    id: 1,
    image: coffee3,
    title: "قهوه سیاه",
    subtitle:
      "چشمهایش قهوه ای بود و به حق فهمیده ام که قهوه از سیگار اعتیادآورتر است",
  },
  {
    id: 2,
    image: coffee1,
    title: "قهوه سرد",
    subtitle:
      "چشمهایش قهوه ای بود و به حق فهمیده ام که قهوه از سیگار اعتیادآورتر است",
  },
  {
    id: 3,
    image: coffee3,
    title: "قهوه داغ",
    subtitle:
      "چشمهایش قهوه ای بود و به حق فهمیده ام که قهوه از سیگار اعتیادآورتر است",
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-gray-600"
        >
          تازه و <span className="text-yellow-600">خوشمزه</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.4,
          }}
          className="text-sm opacity-50 font-bold"
        >
          یک حبه قند در فنجان قهوه تلخ شیرین نمی شود دو حبه قند در فنجان قهوه ای
          تلخ شیرین نمی شود سه حبه. چهار. پنج. اصلا تو بگو یک دنیا قند در این
          دنیای تلخ نه... اگر تو نباشی فال این زندگی شیرین نمی شود
        </motion.p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((services) => (
          <div className="text-center p-4 space-y-6">
            <img
              src={services.image}
              alt=""
              className="shadow-lg max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-yellow-600">
                {services.title}
              </h1>
              <p className="text-gray-800">{services.subtitle}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
