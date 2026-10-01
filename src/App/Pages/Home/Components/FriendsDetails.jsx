import { useLoaderData, useParams } from "react-router";

const FriendsDetails = () => {
  const params = useParams();

  const { id } = params;

  const friends = useLoaderData();

  const friend = friends.find((friend) => friend.id === parseInt(id));
  console.log(friend);

  return <div>{console.log(id)}</div>;
};

export default FriendsDetails;
