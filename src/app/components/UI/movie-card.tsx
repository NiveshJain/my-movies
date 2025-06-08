"use client";

import { Movies } from "@/app/[genre]/page";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface MovieCardProps {
  movie: Movies;
  genre: string;
}

export default function MovieCard({ movie, genre }: MovieCardProps) {
  const router = useRouter();

  const handleClick = () => {
    // Navigate after a delay for the animation
    setTimeout(() => {
      router.push(`/${genre}/${movie.id}`);
    }, 800);
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      whileHover={{ y: -10, scale: 1.05 }}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 1.5, opacity: 0, transition: { duration: 0.8 } }}
    >
      <img
        src={movie.thumbnail}
        alt={movie.title}
        className="rounded-lg shadow-lg"
      />
      <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
        <h3 className="font-bold">{movie.title}</h3>
        <p className="text-sm">{movie.year}</p>
      </div>
    </motion.div>
  );
}
