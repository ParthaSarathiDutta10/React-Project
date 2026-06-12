import { useState } from "react";
import { questions } from "./data/questions";


export default function App(){
  const [step , setStep] = useState("start");
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({});
  const  currentQuestion = questions[current];

  function handleNextQuestion(type){
    setScores((prev) => ({
      ...prev , 
      [type]:(prev[type] || 0)+1,
    }));

    if(current < questions.length -  1){
      setCurrent(current+1);
    }
    else{
      setStep("result");
    }
  }

  const result = getDominantType(scores);

  function getDominantType(scores){
    let maxScore = -1 ;
    let dominantType = "";
    Object.entries(scores).forEach(([type, count]) => {
      if(count > maxScore){
        maxScore =count;
        dominantType = type;
      }
    }) ;

    return dominantType;

  }
    return(
    <div>
      {step === 'start' && (
        <div>
          <h1>Start Screen</h1>
          <button onClick={() => setStep("quiz")} >Start Quiz</button>
        </div>
      )}

      {step === "quiz" && (
        <div>
          <h3>{currentQuestion.scenario}</h3>
          
          {currentQuestion.options.map((option, index)=>(
            <button className="block" onClick={() => handleNextQuestion(option.type)} key={index}> {option.text}</button>
            
          ))}

        </div>
      )}

      {step === "result" && (
        <div>
          <h1>Your Personality Type</h1>
          <h2>{result}</h2>

          <button onClick={() => setStep("start")} >Restart Quiz</button>
        </div>
      )}
    </div>
  );
}


