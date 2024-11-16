import React from "react";

const CommunityTag = ({ item }) => {
  return (
    <div className="w-10 h-10 cursor-pointer hover:opacity-80 relative group">
      <img src={item.image} alt={item.name} className="rounded-full" />
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm hidden opacity-0 group-hover:opacity-100 group-hover:block whitespace-nowrap">
        {item.name}
      </div>
      {item.active && <span class="absolute bottom-0 right-0 inline-block w-[14px] h-[14px] border-2 border-white transform translate-x-1/2  bg-red-600 rounded-full"></span>}
    </div>
  );
};

const Communities = ({ communities }) => {
  const renderCommunities = (communityList) => {
    return (
      communityList?.length > 0 &&
      communityList.map((item, index) => (
        <CommunityTag key={index} item={item} />
      ))
    );
  };

  return (
    <div className="min-w-20 h-[calc(100vh-65px)] bg-gray-100 z-50">
      <div className="gap-3 flex flex-col items-center py-4">
        {renderCommunities(communities.createdCom)}
      </div>
      <div className="mx-5 h-[2px] bg-[#E5E7EB]"></div>

      <div className="gap-3 flex flex-col items-center py-4">
        {renderCommunities(communities.followingCom)}
      </div>
    </div>
  );
};

export default Communities;
