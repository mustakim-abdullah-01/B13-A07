import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { Slide, ToastContainer, toast } from "react-toastify";
import { FriendContext } from "../../../../Context/Context";
import {
  AlarmClockOff,
  Archive,
  MessageSquareMore,
  PhoneCall,
  Trash,
  Video,
} from "lucide-react";

const FriendsDetails = () => {
  const params = useParams();

  const { idNo } = params;

  const friends = useLoaderData();

  const friend = friends.find((friend) => friend.id === parseInt(idNo));

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = friend;

  const FriendLogs = useContext(FriendContext);

  const call = "Call";
  const text = "Text";
  const video = "Video";

  const { hadleFriendLog } = FriendLogs;

  return (
    <div className="pb-[93px] container mx-auto px-6 flex max-xl:flex-wrap items-center justify-center gap-6 shadow-lg">
      <div className="flex flex-col gap-4 1st-part">
        <div className="shadow-md shadow-green-500/20 hover:shadow-green-500/50 duration-1000 flex flex-col justify-center items-center p-6 bg-white rounded-lg border border-[#64748B]/40">
          <div>
            <img
              className="object-cover w-20 h-20 rounded-full"
              src={picture}
              alt={name}
            />
          </div>
          <p className="mt-3 mb-2 text-xl font-semibold">{name}</p>
          <p
            className={`mb-2 badge text-white ${status === "Almost Due" ? "bg-[#EFAD44]" : status === "Overdue" ? "bg-[#EF4444]" : status === "On-Track" ? "bg-[#244D3F]" : ""}`}
          >
            {status}
          </p>
          <p className="flex gap-2 mb-3">
            {tags.map((tag, idx) => (
              <span key={idx} className="badge text-[#244D3F] bg-[#CBFADB]">
                {tag}
              </span>
            ))}
          </p>

          <p className="text-[#64748B] font-medium mb-3">"{bio}"</p>
          <p className="tex-[14px] text-[#64748B]">{email}</p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => toast.info(`Snoozed ${name} for 2 weeks`)}
            className="shadow-md shadow-green-500/20 hover:shadow-green-500/50 duration-500 btn font-bold h-[53px] p-4 rounded-lg bg-white border border-[#64748B]/40 text-secondary"
          >
            <AlarmClockOff size={18} /> Snooze 2 weeks
          </button>
          <button
            onClick={() => toast.info(`Archived contact with ${name}`)}
            className="shadow-md shadow-green-500/20 hover:shadow-green-500/50 duration-500 btn font-bold h-[53px] p-4 rounded-lg bg-white border border-[#64748B]/40 text-info"
          >
            <Archive size={18} /> Archive
          </button>
          <button
            onClick={() => toast.warning(`Deleted contact for ${name}`)}
            className="shadow-md shadow-green-500/20 hover:shadow-green-500/50 duration-500 btn text-error font-bold h-[53px] p-4 rounded-lg bg-white border border-[#64748B]/40"
          >
            <Trash size={18} /> Delete
          </button>
        </div>
      </div>
      <div className="2nd-part">
        <div>
          <div className="flex items-center justify-center gap-6 mb-6 max-lg:flex-wrap">
            <div className="w-[260px] flex flex-col justify-center items-center p-8 shadow-md shadow-green-500/20 hover:shadow-green-500/50 duration-1000 border border-[#64748B]/30 rounded-lg bg-white">
              <p className="text-3xl text-[#244D3F] font-semibold">
                {days_since_contact}
              </p>
              <p className="text-[#64748B] text-lg">Days Since Contact</p>
            </div>
            <div className="w-[260px] flex flex-col justify-center items-center p-8 shadow-md shadow-green-500/20 hover:shadow-green-500/50 duration-1000 border border-[#64748B]/30 rounded-lg bg-white">
              <p className="text-3xl text-[#244D3F] font-semibold">{goal}</p>
              <p className="text-[#64748B] text-lg">Goal (Days)</p>
            </div>
            <div className="w-[260px] flex flex-col justify-center items-center p-8 shadow-md shadow-green-500/20 hover:shadow-green-500/50 border border-[#64748B]/30 rounded-lg bg-white">
              <p className="text-3xl text-[#244D3F] font-semibold">
                {next_due_date}
              </p>
              <p className="text-[#64748B] text-lg">Next Due</p>
            </div>
          </div>
          <div className="p-6 mb-6 shadow-md shadow-green-500/20 hover:shadow-green-500/50 duration-1000 border border-[#64748B]/30 rounded-lg bg-white">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-medium text-[#244D3F]">
                Relationship Goal
              </h3>
              <button className="btn h-8.5 w-15">Edit</button>
            </div>
            <p className="text-[#64748B] text-lg">
              Connect every
              <span className="text-lg font-bold text-black"> {goal} days</span>
            </p>
          </div>
          <div className="p-6 shadow-md shadow-green-500/20 hover:shadow-green-500/50 duration-1000 border border-[#64748B]/30 rounded-lg bg-white flex flex-wrap flex-col text-start justify-center">
            <h3 className="text-xl font-medium text-[#244D3F] mb-4">
              Quick Check-In
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6 md:jubstify-between">
              <button
                onClick={() => {
                  (hadleFriendLog(friend, call),
                    toast.success(`📞 Calling ${name}`));
                }}
                className="btn border border-[#64748B]/50 rounded-lg text-xl flex flex-col p-4 h-24 w-[220px] text-indigo-600"
              >
                <PhoneCall size={22} />
                Call
              </button>
              <button
                onClick={() => {
                  (hadleFriendLog(friend, text),
                    toast.success(`📜 Text ${name}`));
                }}
                className="btn border border-[#64748B]/50 rounded-lg text-xl flex flex-col p-4 h-24 w-[220px] text-emerald-600"
              >
                <MessageSquareMore size={22} />
                Text
              </button>
              <button
                onClick={() => {
                  (hadleFriendLog(friend, video),
                    toast.success(`🎥 Video Calling ${name}`));
                }}
                className="btn border border-[#64748B]/50 rounded-lg text-xl flex flex-col p-4 h-24 w-[220px] text-rose-600"
              >
                <Video size={24} />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        // hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </div>
  );
};

export default FriendsDetails;

// {
//   "id": 1,
//   "name": "Aisha Patel",
//   "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
//   "email": "aisha.patel@example.com",
//   "days_since_contact": 7,
//   "status": "On-Track",
//   "tags": [
//       "hobby",
//       "travel"
//   ],
//   "bio": "We met during our first semester and still catch up to compare notes, talk about life, and plan weekend coffee dates.",
//   "goal": 14,
//   "next_due_date": "2026-10-10"
// }
