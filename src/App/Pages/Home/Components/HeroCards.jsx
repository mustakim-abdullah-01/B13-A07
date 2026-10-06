import { useContext } from "react";
import { useLoaderData } from "react-router";
import { FriendContext } from "../../../../Context/Context";

const HeroCards = () => {
  const friends = useLoaderData();

  const Context = useContext(FriendContext);

  const onTrack = friends.filter((friend) => friend.status === "On-Track");

  const needAttention = friends.filter(
    (friend) => friend.status === "Almost Due" || friend.status === "Overdue",
  );

  const styles = {
    cardStyle:
      "flex flex-col justify-center items-center p-8 rounded-3xl gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/50 hover:scale-105 hover:border hover:border-[#64748B]/40 duration-300 border border-[#64748B]/30",
    cardHeadingStyle: "text-[#244D3F] font-semibold text-4xl",
    cardParagraphStyle: "text-[#64748B] text-lg",
  };

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6 mb-10 px-4 border-b border-b-[#E9E9E9] pb-10">
      {/*  */}

      <div className={styles.cardStyle}>
        <h2 className={styles.cardHeadingStyle}>{friends.length}</h2>
        <p className={styles.cardParagraphStyle}>Total Friends</p>
      </div>

      {/*  */}
      <div className={styles.cardStyle}>
        <h2 className={styles.cardHeadingStyle}>{onTrack.length}</h2>
        <p className={styles.cardParagraphStyle}>On Track</p>
      </div>

      {/*  */}
      <div className={styles.cardStyle}>
        <h2 className={styles.cardHeadingStyle}>{needAttention.length}</h2>
        <p className={styles.cardParagraphStyle}>Need Attention</p>
      </div>

      {/*  */}
      <div className={styles.cardStyle}>
        <h2 className={styles.cardHeadingStyle}>
          {Context.FriendLogObjectArray.length}
        </h2>
        <p className={styles.cardParagraphStyle}>Interactions This Month</p>
      </div>
    </div>
  );
};

export default HeroCards;
