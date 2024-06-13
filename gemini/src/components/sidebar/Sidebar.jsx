import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../context/Context";

function Sidebar() {
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  const [hide, setHide] = useState(false);
  function unhide() {
    setHide(!hide);
  }

  return (
    <>
      <div className="p-[15px] max-w-[240px] min-h-screen flex flex-col justify-between bg-[#F6F5F2] exl:hidden">
        <div className="flex flex-col">
          <img
            className="block cursor-pointer h-[20px] w-[20px] mb-4"
            onClick={unhide}
            src={assets.menu_icon}
            alt=""
          />
          <div
            onClick={() => newChat()}
            className="mt-[40px] inline-flex items-center gap-x-2.5 py-[10px] px-[15px] bg-[#e6eaf1] rounded-2xl cursor-pointer text-gray-500 text-[14px] "
          >
            <img className="h-[20px] w-[15px]" src={assets.plus_icon} alt="" />
            {hide ? <p>New Chat</p> : null}
          </div>
          {hide ? (
            <div className="flex flex-col animate-fadeIn">
              <p className="mt-[30px] mb-[20px]">Recent</p>
              {prevPrompt.map((item, index) => {
                return (
                  <div
                    onClick={() => loadPrompt(item)}
                    className="flex items-start gap-[10px] p-[10px] pr-[40px] rounded-xl text-[#282828] cursor-pointer hover:bg-slate-200 text-[14px]"
                  >
                    <img
                      className="h-[20px] w-[20px]"
                      src={assets.message_icon}
                      alt=""
                    />
                    <p>{item.slice(0, 16)} ...</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>

        {/* bottom */}

        <div>
          <div className="flex gap-[20px] p-1 items-center mb-4 cursor-pointer hover:bg-slate-200 text-[14px] rounded-xl">
            <img
              className="h-[20px] w-[20px]"
              src={assets.question_icon}
              alt=""
            />
            {hide ? <p>Help</p> : null}
          </div>
          <div className="flex gap-[20px] p-1 items-center mb-4 cursor-pointer hover:bg-slate-200 text-[14px] rounded-xl">
            <img
              className="h-[20px] w-[20px]"
              src={assets.history_icon}
              alt=""
            />
            {hide ? <p>Activity</p> : null}
          </div>
          <div className="flex items-center p-1 gap-[20px] mb-4 cursor-pointer hover:bg-slate-200 text-[14px] rounded-xl">
            <img
              className="h-[20px] w-[20px]"
              src={assets.setting_icon}
              alt=""
            />
            {hide ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
