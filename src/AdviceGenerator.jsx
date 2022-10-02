import { useState } from "react";
import axios from "axios";
import iconSvg from "./images/icon-dice.svg"
import "./styles/styles.css";



function AdviceGenerator() {
  const [advice, setAdvice] = useState({
    advice: "Want advice?",
    id: 0,
  });

  function onClicked(){
    console.log(window.screen.width)
    axios.get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <article className="wrapper">
        <div className="advice_card">
          <h1 className="advice_header">ADVICE #{advice.id}</h1>
          <div className="advice_quote">
            <span className="marks">"</span>{advice.advice}<span className="marks">"</span>
          </div>
          <div className="divider"></div>
          <button className="advice_button" onClick={() => onClicked()}>
            <img src={iconSvg} alt="" />
          </button>
        </div>
      </article>
    </>
  );
}

export default AdviceGenerator;
