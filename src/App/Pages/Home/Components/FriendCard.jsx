import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;

  return (
    <Link
      to={`/contact-details/${id}`}
      className="p-6 shadow-md hover:shadow-emerald-400/70 hover:-translate-y-1 hover:scale-105 duration-300 border border-[#64748B]/35 w-[259px] h-[254px] flex flex-col rounded-lg justify-center items-center bg-white hover:border hover:border-[#64748B]/50"
    >
      <div className="mb-3">
        <img
          className="object-cover w-20 h-20 rounded-full"
          src={picture}
          alt={name}
        />
      </div>
      <div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-[12px] text-[#64748B]">
            {days_since_contact}d ago
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ul className="flex items-center justify-center gap-2 mt-2">
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
