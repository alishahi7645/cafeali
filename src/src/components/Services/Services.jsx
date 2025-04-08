import { motion } from "framer-motion";
import coffee1 from "../../assets/coffee/coffee1.png";
import coffee3 from "../../assets/coffee/coffee3.png";

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
const containerVarients = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChilden: 0.4,
    },
  },
};

const Services = () => {
  return (
   <div></div>
  );
};

export default Services;
