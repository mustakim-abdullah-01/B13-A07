import { useLoaderData } from "react-router";

const HeroCards = () => {
  const friends = useLoaderData();

  const onTrack = friends.filter((friend) => friend.status === "On-Track");

  const needAttention = friends.filter(
    (friend) => friend.status === "Almost Due" || friend.status === "Overdue",
  );
  console.log(onTrack);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6 mb-10 px-4 border-b border-b-[#E9E9E9] pb-10">
      {/*  */}

      <div className="flex flex-col justify-center items-center p-8 rounded-lg shadow-xl gap-2 border border-[#64748B]/10">
        <h2 className="text-[#244D3F] font-semibold text-4xl">8</h2>
        <p className="text-[#64748B] text-lg">Total Friends</p>
      </div>

      {/*  */}
      <div className="flex flex-col justify-center items-center p-8 rounded-lg shadow-xl gap-2 border border-[#64748B]/10">
        <h2 className="text-[#244D3F] font-semibold text-4xl">
          {onTrack.length}
        </h2>
        <p className="text-[#64748B] text-lg">On Track</p>
      </div>

      {/*  */}
      <div className="flex flex-col justify-center items-center p-8 rounded-lg shadow-xl gap-2 border border-[#64748B]/10">
        <h2 className="text-[#244D3F] font-semibold text-4xl">
          {needAttention.length}
        </h2>
        <p className="text-[#64748B] text-lg">Need Attention</p>
      </div>

      {/*  */}
      <div className="flex flex-col text-center justify-center items-center p-8 rounded-lg shadow-xl gap-2 border border-[#64748B]/10">
        <h2 className="text-[#244D3F] font-semibold text-4xl">8</h2>
        <p className="text-[#64748B] text-lg">Interactions This Month</p>
      </div>
    </div>
  );
};

export default HeroCards;
