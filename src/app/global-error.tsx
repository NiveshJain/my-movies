/**
 * This file handles all the errors of the app, since the root segment of the route hierarchy can have some errors,
 * therefore, these errors will be handled by this particular file as well as all the children routes errors as well.
 * It works only in prod mode so in dev mode you won't see error handling happening. It will completely replace the
 * root layout therefore it should have its html and body tag.
 */

"use client";
export default function GlobalErrorHandler({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Global error occurred</h2>
        <button onClick={() => reset()}>Retry</button>
      </body>
    </html>
  );
}
