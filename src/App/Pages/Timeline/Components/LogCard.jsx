import { MessageSquareMore, PhoneCall, Video } from "lucide-react";
import { Link } from "react-router";

const LogCard = ({ log }) => {
  const date = new Date();

  return (
    <Link
      to={`/contact-details/${log.id}`}
      className="flex gap-4 p-4 mb-6 duration-300 bg-white border border-[#E9E9E9] rounded-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/50 /30"
    >
      <div className="pr-8 ml-4 mr-3 flex justify-center items-center text-green-600 border-r border-r-[#E9E9E9]">
        {(log.action === "Call" && <PhoneCall size={22} />) ||
          (log.action === "Text" && <MessageSquareMore size={24} />) ||
          (log.action === "Video" && <Video size={26} />)}
      </div>
      <div>
        <h1>
          <span className="font-medium text-[#244D3F] text-xl mb-1">
            {log.action.charAt(0).toUpperCase() + log.action.slice(1)}
          </span>
          <span className="text-[#64748B] text-lg"> with {log.name}</span>
        </h1>
        <p className="text-[#64748B] font-medium text-[16px]">
          {date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
};

export default LogCard;
