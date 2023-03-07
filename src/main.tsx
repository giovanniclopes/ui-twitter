import React from "react";
import ReactDOM from "react-dom/client";
import { House } from "phosphor-react";

import "./global.css";

import twitterLogo from "./assets/logo-twitter.svg";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo" />

        <nav className="main-navigation">
          <a href="">
            <House />
            Home
          </a>
          <a href="">Explore</a>
          <a href="">Notifications</a>
          <a href="">Messages</a>
          <a href="">Bookmarks</a>
          <a href="">Lists</a>
          <a href="">Profile</a>
          <a href="">More</a>
        </nav>

        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>
      <div className="content">content</div>
    </div>
  </React.StrictMode>
);
