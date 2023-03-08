import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from 'react-router-dom'
import "./Tweet.css";

interface tweetProps {
  content: string;
}

export function Tweet(props: tweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/giovanniclopes.png" alt="Giovanni Lopes" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Giovanni Lopes</strong>
          <span>@gcl657</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
