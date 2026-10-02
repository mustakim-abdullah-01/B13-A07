import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const {
    id,
    name,
    picture,
    // email,
    days_since_contact,
    status,
    tags,
    // bio,
    // goal,
    // next_due_date,
  } = friend;

  return (
    <Link
      to={`/contact-details/${id}`}
      className="p-6 shadow-lg shadow-blue-700/20 hover:shadow-blue-700/50 duration-1000 border border-[#64748B]/30 w-[259px] h-[254px] flex flex-col rounded-lg justify-center items-center bg-white"
    >
      <div className="mb-3">
        <img
          className="rounded-full h-20 w-20 object-cover"
          src={picture}
          alt={name}
        />
      </div>
      <div>
        <div className="text-center">
          <h3 className="font-semibold text-xl">{name}</h3>
          <p className="text-[12px] text-[#64748B]">
            {days_since_contact}d ago
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ul className="flex justify-center items-center mt-2 gap-2">
            {tags.map((tag, idx) => (
              <li className="badge bg-[#CBFADB] text-[#244D3F]" key={idx}>
                {" "}
                {tag.toUpperCase()}
              </li>
            ))}
          </ul>
          <p
            className={`mt-2 badge font-medium text-white text-[12px] ${status === "On-Track" ? "bg-[#244D3F]" : status === "Almost Due" ? "bg-[#EFAD44]" : status === "Overdue" ? "bg-[#EF4444]" : ""}`}
          >
            {status}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
