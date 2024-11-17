import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const CardQuest = ({
  quest,
  theme = "primary",
  type = "default",
  size = "w-[300px] h-[220px]",
}) => {
  const themeStyles = {
    primary: {
      wrapper: "bg-white border-neutral-200",
      title: "text-[#111827]",
      tag: "bg-[#F3F4F6]",
    },
    secondary: {
      wrapper: "bg-[#F0F9FF] border-[#BAE6FD]",
      title: "text-[#0C4A6E]",
      tag: "bg-[#E0F2FE]",
    },
    dark: {
      wrapper: "bg-[#EEF2FF] border-[#C7D2FE]",
      title: "text-[#312E81]",
      tag: "bg-[#E0E7FF]",
    },
  };

  const styles = themeStyles[theme];

  if (type === "empty") {
    return (
      <div
        className={`relative p-5 gap-3 rounded border bg-white ${styles.wrapper} ${size}`}
      >
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <PlusIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={`relative p-5 gap-3 rounded border ${styles.wrapper} ${size}`}
    >
      <div className="h-[144px] mb-5 text-left">
        <h5 className={`mb-2 text-base font-medium ${styles.title}`}>
          {quest.questTitle}
        </h5>
        <p
          className={`leading-normal text-sm font-regular line-clamp-2 ${styles.text}`}
        >
          {quest.questDes}
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex reward gap-2">
          <div className="bg-[#FFF0DE] w-6 h-6 flex justify-center items-center rounded-lg">
            <img src="./img/gem.svg" alt="gem" />
          </div>
          <div className="text-base font-medium text-[#FF7B05]">
            {quest.questReward.gem}
          </div>
        </div>
        <div
          className={`text-[10px] font-regular text-[#6B7280] px-2 py-[6px] leading-3 rounded-lg ${styles.tag}`}
        >
          {quest.questReward.repeatType}
        </div>
      </div>
    </div>
  );
};

export default CardQuest;
