import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import Cards from "./Cards.jsx";
import { data } from "./constants.js";
import { Context } from "../context/Context.jsx";

function Central() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="flex-1 min-h-screen w-full pb-[15vh] relative bg-[#D8D9DA] ">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 text-neutral-500 text-lg sm:text-xl w-full">
        <p>Gemini</p>
        <img
          className="rounded-full w-10 sm:w-12"
          src={assets.user_icon}
          alt="User Icon"
        />
      </div>

      {/* Main Content Section */}
      <div className="m-auto w-full max-w-[95vw] sm:max-w-[900px] px-4">
        {!showResult ? (
          <>
            {/* Greeting Section */}
            <div className="text-zinc-500 text-4xl sm:text-5xl md:text-6xl my-8 py-4 font-semibold w-full text-center sm:text-left">
              <p className="bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 inline-block text-transparent bg-clip-text">
                Hello User
              </p>
              <p>How can I help you today?</p>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-4 mb-24 grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {data.map((item, index) => (
                <Cards text={item.text} img={item.img} key={index} />
              ))}
            </div>
          </>
        ) : (
          <div className="px-[5%] max-h-[70vh] overflow-y-scroll no-scrollbar">
            {/* Result Section */}
            <div className="flex my-10 items-center gap-5">
              <img
                className="rounded-full w-10"
                src={assets.user_icon}
                alt="User Icon"
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-4">
              <img
                className="rounded-full w-10"
                src={assets.gemini_icon}
                alt="Gemini Icon"
              />
              {loading ? (
                <div className="w-full flex flex-col gap-2.5">
                  <hr className="rounded border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
                  <hr className="rounded border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
                  <hr className="rounded border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
                </div>
              ) : (
                <p
                  className="font-light text-[16px] leading-8"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        {/* Input Section */}
        <div className="sticky bottom-0 w-full max-w-[900px] px-4 m-auto">
          <div className="flex justify-between items-center gap-2 sm:gap-5 py-2 px-3 sm:px-5 rounded-3xl bg-[#f0f4f9] shadow-md">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 bg-transparent border-none outline-none p-2 text-[16px] sm:text-[18px]"
              type="text"
              placeholder="Enter your prompt here"
            />
            <div className="flex justify-between items-center gap-2 sm:gap-3 py-2.5 px-2 sm:px-3">
              <img
                className="w-5 cursor-pointer"
                src={assets.gallery_icon}
                alt="Gallery Icon"
              />
              <img
                className="w-5 cursor-pointer"
                src={assets.mic_icon}
                alt="Mic Icon"
              />
              {input ? (
                <img
                  onClick={() => onSent()}
                  className="w-5 cursor-pointer"
                  src={assets.send_icon}
                  alt="Send Icon"
                />
              ) : null}
            </div>
          </div>
          <p className="text-center text-[12px] sm:text-[13px] my-4 mx-auto font-light">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <span className="underline">Your privacy and Gemini Apps</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Central;

// bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-transparent -webkit-text-fill-color: transparent
//  className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-4 ">
