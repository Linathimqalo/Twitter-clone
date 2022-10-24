import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import {TwitterTimelineEmbed }from 'react-twitter-embed';

type Props = {};

function Widgets({}: Props) {
    const name = "LinathiMqalo"
  return (
    <div className="hidden lg:inline lg:col-span-3 lg:ml-4 lg:px-6 px-2 mt-2">
      {/*Search */}
      <div className="flex items-center space-x-2 rounded-full p-3 mt-1 mb-3 
      bg-gray-100">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          className="bg-transparent flex-1 outline-none"
          type="text"
          placeholder="Search Twitter"
        />
      </div>

      <TwitterTimelineEmbed
      sourceType="profile"
      screenName={name}
      options={{height: 1000}} />
    </div>
  );
}

export default Widgets;
