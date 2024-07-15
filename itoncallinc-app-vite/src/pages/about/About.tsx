import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <h1>About Our Company</h1>
  </React.StrictMode>
);

// function About() {
//   return (
//     <StrictMode>
//       <h1>About Our Company</h1>
//     </StrictMode>
//   );
// }

// export default About;
