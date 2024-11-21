import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const RenderLoadingAnimation = () => {
    return (
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-slate-300 rounded-lg p-8 flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.div
            animate={{
              rotate: 360,
              transition: { duration: 2, repeat: Infinity, ease: "linear" },
            }}
          >
            <Loader2 className="w-16 h-16 text-indigo-600" />
          </motion.div>
          <motion.h2
            className="mt-4 text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Crafting your attention grabing content
          </motion.h2>
          <motion.p
            className="mt-2 text-gray-600 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Our AI is working its magic to create the perfect content for
            your social media and blog!
          </motion.p>
          <motion.div
            className="mt-6 w-48 h-2 bg-gray-200 rounded-full overflow-hidden"
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="h-full bg-indigo-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    );
};

export default RenderLoadingAnimation;