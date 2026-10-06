const NoLogs = () => {
  return (
    <div>
      <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm mb-20">
        {" "}
        <div className="flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-slate-100">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-slate-400"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />{" "}
          </svg>{" "}
        </div>{" "}
        <h2 className="text-xl font-semibold text-slate-700">
          {" "}
          No activity yet{" "}
        </h2>{" "}
        <p className="max-w-md mt-2 text-sm leading-6 text-slate-400">
          {" "}
          Your calls, messages, and video calls will appear here once you start
          interacting with your friends.{" "}
        </p>{" "}
      </div>
    </div>
  );
};

export default NoLogs;
