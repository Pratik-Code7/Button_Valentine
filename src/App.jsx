import { useState } from "react";
import giff from "./assets/gifff.webp";
import gif2 from "./assets/yesgif.webp";

const App = () => {
  const [yess, setYess] = useState(false);
  const texts = [
    "No",
    "Why not, cutie? 😉",
    "Hmm… not so fast 😜",
    "Are you trying to win me over? 😘",
    "Not this time, silly 😳",
    "Come on, you know better 😏",
    "Try again, sweetie 😎",
    "Still nooo 😜",
    "Oh stop it, you! 😳",
    "Maybe… if you try harder 😘",
    "Aww, you wish 😏",
    "Hmm… nice try 😜",
    "Not feeling it right now 😘",
    "Keep dreaming 😏",
    "Oh really? 😳",
    "Try again, honey 😎",
    "Patience is key 😏",
    "Hmm… maybe later 😉",
    "Stop teasing me 😜",
    "You’re persistent, I like that 😘",
  ];
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState({
    height: "2rem",
    width: "3.5rem",
    fontSize: "1rem",
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {yess ? (
        <img src={gif2} alt="" />
      ) : (
        <div className="flex flex-col gap-5 items-center">
          <img src={giff} alt="" className="h-3/6 w-3/2" />
          <h1 className="text-2xl">Will you be my Valentine?</h1>
          <div className="flex gap-6 text-white font-bold ">
            <button
              className="bg-green-400 h-8 w-14"
              onClick={() => setYess(true)}
              style={{
                height: scale.height,
                width: scale.width,
                fontSize: scale.fontSize,
              }}
            >
              Yes
            </button>
            <button
              className="bg-red-400 h-8  px-4"
              onClick={() => {
                setScale((prev) => ({
                  height: `${parseFloat(prev.height) + 3}rem`,
                  width: `${parseFloat(prev.width) + 4.9}rem`,
                  fontSize: `${parseFloat(prev.fontSize) + 0.5}rem`,
                }));
                setIndex((prev) => (prev + 1 < texts.length ? prev + 1 : prev));
              }}
            >
              {texts[index]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
