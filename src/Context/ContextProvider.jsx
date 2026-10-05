import { useState } from "react";
import { FriendContext } from "./Context";

const FriendProvider = ({ children }) => {
  const [FriendLogObjectArray, setFriendLog] = useState([]);

  const hadleFriendLog = (friend, action) => {
    setFriendLog([...FriendLogObjectArray, friend]);

    const newLog = { action: action, ...friend };
    setFriendLog([...FriendLogObjectArray, newLog]);
  };

  const Data = {
    FriendLogObjectArray,
    setFriendLog,
    hadleFriendLog,
  };

  return (
    <FriendContext.Provider value={Data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
