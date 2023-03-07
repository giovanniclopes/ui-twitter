import React from "react";
import ReactDOM from "react-dom/client";
import { Tweet } from "./components/Tweet";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Tweet user="Rodrigo" likes={10}>
        Meu primeiro tweet
      </Tweet>
      <Tweet user="Diego">
        Hello World
      </Tweet>
      <Tweet user="Carla">
        Testaaaaaando
      </Tweet>
    </div>
  </React.StrictMode>
);
