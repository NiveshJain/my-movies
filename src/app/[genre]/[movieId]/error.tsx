/**
 * this is client component since below function is an React Error Boundary,
 * which requires client-side functionality to catch and handle errors within the component tree.
 * It receives the error object and a reset function as props, allowing for interactive error recovery,
 * which also necessitates client-side execution. Every route segment can have its own Error Boundary which facilitates better handling of error.
 * Also, error bubbles up to find the nearest parent Error Boundary, which can create issue across the routed component hierarchy.
 */

"use client";

import { usePathname } from "next/navigation";

const MovieError = ({ error, reset }: { error: Error; reset: () => void }) => {
  const pathName = usePathname();
  return (
    <p>
      error occurred while loading :
      {error.message.replace(
        "{}",
        pathName.substring(pathName.lastIndexOf("/") + 1)
      )}
    </p>
  );
};

export default MovieError;
