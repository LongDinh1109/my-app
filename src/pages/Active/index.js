import React from "react";
import { PlusIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import CardQuest from "../../components/Card";
import Carousel from "../../components/Carousel";
import { useStoreState } from "easy-peasy";

const TemplateSection = () => {
  const templateItems = useStoreState((state) => state.data.templateItems);
  const renderCarouselItems = () => {
    return (
      <>
        {templateItems.map((item, index) => (
          <div
            key={index}
            className="carousel-item text-center relative w-64 h-64 snap-start"
          >
            <CardQuest quest={item} size="w-[200px] h-[240px]" />
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="w-full xl:px-[60px] lg:px-7 sm:px-5 sm:py-5 p-6 h-fit bg-neutral-50 border-b border-neutral-200">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium text-neutral-900">🌟 Templates</div>
        <button className="flex gap-1 items-center text-sm font-medium text-primary-500 hover:opacity-80">
          See all templates
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="mt-5">
        <Carousel items={renderCarouselItems} />
      </div>
    </div>
  );
};

const QuestSection = ({ title, items, theme }) => {
  return (
    <div>
      <p className="text-2xl font-medium pb-5">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 gap-5">
        <CardQuest type="empty" theme={theme} />
        {items.map((item, _index) => (
          <CardQuest quest={item} theme={theme} />
        ))}
      </div>
    </div>
  );
};

const ActivePage = () => {
  const { onBoardingItem, questTags } = useStoreState((state) => state.data);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-65px)]">
      <div className="sm:py-5 sm:px-10 p-3 w-full h-fit text-center border-b border-[#E5E7EB]">
        <div className="flex sm:flex-row flex-col gap-2 justify-between items-center px-5 text-neutral-900">
          <p className="text-2xl font-medium">Quests</p>
          <div className=" gap-3 text-sm font-medium flex">
            <button className="bg-white px-5 py-[10px] border rounded-lg border-neutral-300 hover:opacity-80">
              Use Template
            </button>
            <button className="bg-primary-500 text-white px-5 py-[10px] rounded-lg border font-inter hover:opacity-80">
              <div className="flex items-center gap-2">
                <PlusIcon className="w-5 h-5" />
                Create Quest
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto">
        <TemplateSection />
        <div className="flex flex-col items-start gap-5 w-full xl:px-[60px] xl:py-[40px] lg:px-7 sm:px-5 sm:py-5 p-6">
          <div className="flex flex-wrap sm:flex-row justify-items-start items-center gap-2 pb-5">
            {questTags.map((item, _id) => (
              <button className="px-3 py-2 bg-neutral-100 rounded-lg hover:opacity-70 col-span-2">
                {item.name}
              </button>
            ))}
            <button className="p-3 bg-neutral-100 rounded-lg hover:opacity-70">
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
          <QuestSection
            title="👋 Onboarding"
            items={onBoardingItem}
            theme="secondary"
          />
          <QuestSection
            title="👌 Invites"
            items={onBoardingItem}
            theme="dark"
          />
          <QuestSection
            title="Draft"
            items={onBoardingItem}
            className="w-[300px] h-[220px]"
          />
          <QuestSection
            title="Trash"
            items={onBoardingItem}
            className="w-[300px] h-[220px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ActivePage;
