import "./styles.css";
import { useState } from "react";

var Popular = [
  "Extraordinary Attorney Woo",
  "All Of Us Are Dead",
  "Money Heist:Korea",
  "Remarriage and Desires"
];
var Romantic = [
  "crashlanding on you",
  "my love from starts",
  "descendent of sun"
];
var Mystery = ["the Devil Judge", "Vincenzo", "Suid Game"];
var Comedy = [
  "What's Wrong With Secretary Kim",
  "True Beauty",
  "Strong Women Do Bong Soon"
];

var genere = {
  popular: Popular,
  romantic: Romantic,
  mystery: Mystery,
  comedy: Comedy
};

var Genere = Object.keys(genere);

export default function App() {
  const [drama, setdrama] = useState(genere.popular);

  function click(drama) {
    drama = genere[drama];
    setdrama(drama);
  }

  return (
    <div className="App container">
      <h1 className="heading">K-Drama Recommendation</h1>
      <div className="tittle">Choose a genere</div>

      <div className="generes">
        {Genere.map(function (drama) {
          return (
            <span key={drama} onClick={() => click(drama)}>
              {" "}
              {drama}
            </span>
          );
        })}
      </div>

      <div className="list">
        <ul>
          {drama.map(function (name) {
            return <li key={name}>{name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
