/**
 * this is client component since below function is an React Error Boundary,
 * which requires client-side functionality to catch and handle errors within the component tree.
 * It receives the error object and a reset function (reset only re-render the client component) as props, allowing for interactive error recovery,
 * which also necessitates client-side execution. Every route segment can have its own Error Boundary which facilitates better handling of error.
 * Also, error bubbles up to find the nearest parent Error Boundary, which can create issue across the routed component hierarchy.
 * Since error boundary comes below the layout in the component hierarchy, error file can't handle the errors generating from layout file.
 * To fix it you need to move the error file above the target layout file meaning in the parent route folder.
 */

"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const MovieError = ({ error, reset }: { error: Error; reset: () => void }) => {
  const pathName = usePathname();
  const router = useRouter();
  const back = () => {
    router.back();
  };
  return (
    <>
      <p>
        error occurred while loading :
        {error.message.replace(
          "{}",
          pathName.substring(pathName.lastIndexOf("/") + 1)
        )}
      </p>
      <button onClick={back}>Back</button>
    </>
  );
};

export default MovieError;
