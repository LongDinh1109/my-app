import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  TrophyIcon,
  ChartBarSquareIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import { action } from "easy-peasy";

const communities = {
  createdCom: [
    {
      name: "Manta Network",
      image: "/img/com-1.png",
    },
    {
      name: "Manta Network",
      image: "/img/com-2.png",
    },
    {
      name: "Manta Network",
      image: "/img/com-3.png",
    },
  ],
  followingCom: [
    {
      name: "Manta Network",
      image: "/img/com-4.png",
    },
    {
      name: "Manta Network",
      image: "/img/com-5.png",
    },
    {
      name: "Manta Network",
      image: "/img/com-6.png",
      active: true,
    },
    {
      name: "Manta Network",
      image: "/img/com-7.png",
    },
    {
      name: "Manta Network",
      image: "/img/com-8.png",
    },
    {
      name: "Manta Network",
      image: "/img/com-9.png",
      active: true,
    },
  ],
};
const menuItems = {
  questMenuItems: [
    {
      title: "Active",
      icon: <BoltIcon className="w-5 h-5" />,
      url: "/Active",
    },
  ],
  adminMenuItems: [
    {
      title: "Review Submission",
      icon: <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />,
      url: "/Review-submission",
    },
    {
      title: "Rewards",
      icon: <TrophyIcon className="w-5 h-5" />,
      url: "/rewards",
    },
    {
      title: "Leaderboard",
      icon: <ChartBarSquareIcon className="w-5 h-5" />,
      url: "/leaderboard",
    },
    {
      title: "Settings",
      icon: <Cog8ToothIcon className="w-5 h-5" />,
      url: "/settings",
    },
  ],
};
const templateItems = [
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: "N/A",
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: "N/A",
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: "N/A",
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: "N/A",
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
];
const onBoardingItem = [
  {
    questTitle: "Daily connect",
    questDes:
      "The easiest quest! Just connect to Crew3 and claim this one every day.",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Subscribe Manta Network Youtube Channel 📹",
    questDes:
      "Watch Manta Network Youtube Clips at Link Subscribe Sisu Network Youtube Channel",
    questReward: {
      gem: 10,
      repeatType: "once",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Daily connect",
    questDes:
      "The easiest quest! Just connect to Crew3 and claim this one every day.",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Subscribe Manta Network Youtube Channel 📹",
    questDes:
      "Watch Manta Network Youtube Clips at Link Subscribe Sisu Network Youtube Channel",
    questReward: {
      gem: 10,
      repeatType: "once",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Daily connect",
    questDes:
      "The easiest quest! Just connect to Crew3 and claim this one every day.",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Subscribe Manta Network Youtube Channel 📹",
    questDes:
      "Watch Manta Network Youtube Clips at Link Subscribe Sisu Network Youtube Channel",
    questReward: {
      gem: 10,
      repeatType: "once",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Daily connect",
    questDes:
      "The easiest quest! Just connect to Crew3 and claim this one every day.",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
  {
    questTitle: "Subscribe Manta Network Youtube Channel 📹",
    questDes:
      "Watch Manta Network Youtube Clips at Link Subscribe Sisu Network Youtube Channel",
    questReward: {
      gem: 10,
      repeatType: "once",
    },
  },
  {
    questTitle: "Join Discord 👾",
    questDes: "🎉 Manta's $1,000 USDC Airdrop - Join the Farm Now!",
    questReward: {
      gem: 10,
      repeatType: "daily",
    },
  },
];
const questTags = [
  {
    id: 1,
    name: "onBoarding",
  },
  {
    id: 2,
    name: "Invites",
  },
  {
    id: 3,
    name: "Special",
  },
  {
    id: 4,
    name: "Join",
  },
  {
    id: 5,
    name: "Quiz",
  },
  {
    id: 6,
    name: "Twitter",
  },
];

// Define the store model
const storeModel = {
  communities: communities,
  menuItems: menuItems,
  templateItems: templateItems,
  onBoardingItem: onBoardingItem,
  questTags:questTags
};

export default storeModel;
