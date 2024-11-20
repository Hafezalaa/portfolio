import bull from "../images/bull.svg";
import cow from "../images/cow.svg";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";

const Game = () => {

    
  function generateNumber() {
    //const myDigits=["0","1","2","3","4","5","6","7","8","9"]
    const digits = [];

    while (digits.length < 4 &&digits[0]!==0) {
      const randomDigit = Math.floor(Math.random() * 10);
      if (!digits.includes(randomDigit)) {
        digits.push(randomDigit);
      }
    }

    return parseInt(digits.join(""), 10);
  }



  
  const [player, setPlayer] = useState("");
  const [level, setLevel] = useState(0);
  const [secretNumber, setSecretNumber] = useState(null);
  const [entryNumber, setEntryNumber]=useState(null)

  const [bullCount, setBullCount]=useState(0)
  const [cowCount, setCowCount]=useState(0)
  
  const submitPlayer = (e) => {
    e.preventDefault();
    setPlayer(e.target.name.value);
    setLevel(e.target.level.value);
    setSecretNumber(generateNumber)
};


const submitEntryNumber=(e)=>{
    e.preventDefault()
    const num=e.target.entryNumber.value
   
        if (
          num.length === 4 &&
          num[0] !== num[1] &&
          num[0] !== num[2] &&
          num[0] !== num[3] &&
          num[1] !== num[2] &&
          num[1] !== num[3] &&
          num[2] !== num[3] &&
          !num.includes("+") &&
          !num.includes("-") &&
          !isNaN(Number(num))
        ) {
          setEntryNumber(parseInt(num))
        }
        else alert("Your number is not valid, the number should be 4 unique digits!!");
        ;
        
        
    }

    const check=()=>{
if(secretNumber===entryNumber){
    return 'you won'
} else if(secretNumber[0]===entryNumber[0]){
        setBullCount(bullCount+1)
    } else if(secretNumber[1]===entryNumber[1]){
        setBullCount(bullCount+1)
    }  if(secretNumber[2]===entryNumber[2]){
        setBullCount(bullCount+1)
    }  if(secretNumber[3]===entryNumber[3]){
        setBullCount(bullCount+1)
    }  if(secretNumber.includes(entryNumber[0])){
        setCowCount(cowCount+1)
    }  if(secretNumber.includes(entryNumber[1])){
        setCowCount(cowCount+1)
    }  if(secretNumber.includes(entryNumber[2])){
    setCowCount(cowCount+1)
    }  if(secretNumber.includes(entryNumber[3])){
        setCowCount(cowCount+1)
    }}

    console.log(secretNumber, typeof(secretNumber));
    console.log(entryNumber, typeof(entryNumber));
    console.log(bullCount,cowCount);

  return (
    <div className="h-svh mb-[50px] ml-[120px] md:mt-[120px] md:ml-0 p-8 bg-gradient-to-b from-stone-50 via-stone-400 to-stone-50">
      <div className="bg-stone-300 w-[100%] md:h-24  md:flex place-content-between items-center md:px-16 ">
        <img width="50px" className="hidden md:block" src={bull} alt="" />
        <ReactTyped
          className="md:text-2xl my-10 text-center"
          strings={[
            "This game called <strong>BULLS</strong> and <strong>COWS</strong>",
          ]}
          typeSpeed={90}
          backSpeed={50}
          loop
        />
        <img width="40px" className="hidden md:block" src={cow} alt="" />
      </div>
      <div>
        <button>Start</button>
        <button>Reset</button>
      </div>
      <div className="bg-stone-300 w-[90%] m-auto mt-10 shadow-lg shadow-stone-400/200 h-[75%] flex md:flex place-content-between items-center px-4 md:px-16 ">
        <div className="md:m-4 p-4 bg-stone-400 h-[80%] w-[50%] md:h-[90%] md:w-[60%] shadow-sm shadow-black flex flex-col ">
          {!player ? (
            <ul className="list-disc ml-4">
              {" "}
              <strong>Instruction</strong>:
              <li>
                In this game you are going to guess a number of 4 digits that
                will be generated after submitting your name.
              </li>
              <li>The level represents how many tries do you have.</li>
              <li>
                Having a level of hard or very hard will give you more hints to
                your answers.
              </li>
              <li>Each digit should be unique and used once only !</li>
              <li>
                For example <strong className="text-green-800">8720</strong> is
                ok, while <strong className="text-red-700">2562</strong> is not
                acceptable.
              </li>
              <li>Your goal is to guess the secret number</li>
              <li>
                When you guess a number in the right position it is a{" "}
                <strong>Bull</strong>
              </li>
              <li>
                When you guess a number not in the right position it is a{" "}
                <strong>Cow</strong>
              </li>
              <li>
                Relax and Enjoy it for a minute, it is easy and you deserve a
                short break.
              </li>
            </ul>
          ) : null}
          {!player ? (
            <form
              onSubmit={submitPlayer}
              className="flex flex-col place-items-center "
              action=""
            >
              <label className="my-5 mx-2 w-[40%] flex flex-col">
                {" "}
                Please enter your name here:{" "}
              </label>
              <input className="h-10 w-[40%] pl-5" type="text" name="name" />
              <label name="level" className="my-5 mx-2 w-[40%] flex flex-col">
                {" "}
                Please enter your level here:{" "}
              </label>
              <select className="h-10 w-[40%] pl-5" name="level">
                <option value="0"></option>
                <option value="12">Very Easy</option>
                <option value="9">Easy</option>
                <option value="7">Medium</option>
                <option value="5">Hard</option>
                <option value="3">Very Hard</option>
              </select>
              <button
                className="mt-10 w-24 mx-auto bg-stone-500 rounded-xl text-white shadow-md shadow-stone-600"
                type="submit"
              >
                Submit
              </button>
            </form>
          ) : null}
          {!player?null:<div className="flex flex-col items-center pt-5 md:pt-10">
            <h1 className="my-5 font-semibold">Hello {player}</h1>
            <form onSubmit={submitEntryNumber} className="flex flex-col place-items-center " action="">
                <input type="text" name="entryNumber" id="" />
                <button onClick={check}
                className="mt-10 w-24 mx-auto bg-green-800 rounded-xl text-white shadow-md shadow-stone-600"
                type="submit"
              >
                Submit
              </button>
            </form>
            </div>}
        </div>
        {player ? (
          <div className="md:m-4 p-4 bg-stone-400 h-[80%] w-[35%] md:h-[90%]  md:w-[35%] shadow-sm shadow-black flex place-content-center ">
            Results for {player} level is: {level}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Game;
