import { useLoaderData } from "react-router";
import FriendCard from "./FriendCard";

const Friends = () => {
  const friends = useLoaderData();

  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center pb-10">
      <h3 className="mb-6 ml-4 text-2xl font-semibold text-slate-800">
        Your Friends
      </h3>
      <div className="flex gap-6 flex-wrap justify-center items-center">
        {friends.map((friend) => (
          <FriendCard friend={friend} key={friend.id} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
