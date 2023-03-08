import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css'

const answers = [
  "Concordo...",
  "Olha, faz sentido",
  "Parabéns pelo progresso.",
];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam voluptatem, quia fugiat minus ducimus libero at expedita veritatis, ullam nemo? Quo quis repellat et temporibus ab natus numquam nobis." />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/giovanniclopes.png"
            alt="Giovanni Lopes"
          />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
