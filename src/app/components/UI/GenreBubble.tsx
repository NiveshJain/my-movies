"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { genres } from "../../../../data/dummyData";

export default function GenreBubbles() {
  return (
    <div className="flex flex-wrap justify-center items-center h-full gap-8">
      {genres.map((genre) => (
        <Link key={genre.id} href={`/${genre.id}`}>
          <motion.div
            className="bg-blue-500 text-white rounded-full flex items-center justify-center w-32 h-32 md:w-48 md:h-48 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            animate={{
              y: [0, -20, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              },
            }}
          >
            <h2 className="text-xl md:text-2xl font-bold">{genre.name}</h2>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
