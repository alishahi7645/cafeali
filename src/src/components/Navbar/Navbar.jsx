import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-semibold mr-5"
          >
            عمو علی <span className="text-yellow-500">کافی</span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
