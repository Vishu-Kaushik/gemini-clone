import { assets } from "../../assets/assets";

function Central() {
  return (
    <>
      <div className="flex-1 min-h-screen w-full pb-[15vh] relative bg-[#D8D9DA]">
        <div className="flex justify-between items-center p-[20px] text-neutral-500 text-xl">
          <p>Gemini</p>
          <img className="rounded-full w-12" src={assets.user_icon} alt="" />
        </div>
        <div className="m-auto w-[900px]">
          <div className="text-zinc-500 text-5xl my-8 py-4 font-medium ">
            <p>
              <span className="">Hello User</span>
            </p>
            <p>How can i help you today?</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-4 ">
            <div className="h-52 p-4 bg-zinc-200 rounded-xl relative shadow-lg cursor-pointer hover:bg-gray-400">
              <p className="text-lg  text-stone-600">
                Explain how something works like an engineer
              </p>
              <img
                className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3 "
                src={assets.bulb_icon}
                alt=""
              />
            </div>
            <div className="h-52 p-4 bg-gray-300 rounded-xl relative shadow-lg cursor-pointer hover:bg-gray-400">
              <p className="text-lg  text-stone-600">
                Improve the readability of the following code
              </p>
              <img
                className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3"
                src={assets.code_icon}
                alt=""
              />
            </div>
            <div className="h-52 p-4 bg-gray-300 rounded-xl relative shadow-lg cursor-pointer hover:bg-gray-400">
              <p className="text-lg  text-stone-600">
                Evaluate and rank common camera categories
              </p>
              <img
                className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3"
                src={assets.bulb_icon}
                alt=""
              />
            </div>
            <div className="h-52 p-4 bg-gray-300 rounded-xl relative shadow-lg cursor-pointer hover:bg-gray-400">
              <p className="text-lg text-stone-600">
                I’m sick and need help crafting a text message for my boss
              </p>
              <img
                className="w-9 p-1 absolute bg-white rounded-[20px] bottom-3 right-3"
                src={assets.code_icon}
                alt=""
              />
            </div>
          </div>
          <div className="absolute bottom-0 width-100% w-[900px] px-4 m-auto">
            <div className="flex justify-between items-center gap-5 py-1.5 px-5 rounded-3xl bg-[#f0f4f9]">
              <input
                className="flex-1 bg-transparent border-none outline-none p-2 text-[18px]"
                type="text"
                placeholder="Enter your prompt here"
              />
              <div className="flex justify-between items-center  gap-3 py-2.5 px-3 ">
                <img
                  className="w-5 cursor-pointer"
                  src={assets.gallery_icon}
                  alt=""
                />
                <img
                  className="w-5 cursor-pointer"
                  src={assets.mic_icon}
                  alt=""
                />
                <img
                  className="w-5 cursor-pointer"
                  src={assets.send_icon}
                  alt=""
                />
              </div>
            </div>
            <p className="text-center text-[13px] my-4 mx-auto font-light">
              Gemini may display inaccurate info, including about people, so
              double-check its responses.{" "}
              <span className="underline ">Your privacy and Gemini Apps</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Central;

// bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-transparent -webkit-text-fill-color: transparent
