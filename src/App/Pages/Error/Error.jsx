import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-base-100 text-base-content flex items-center justify-center px-6">
      <div className="w-full max-w-lg text-center">
        {/* Error Code */}
        <p className="text-sm font-medium tracking-widest text-[#244D3F] uppercase mb-4">
          404 • Page not found
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
          Looks like we lost touch.
        </h1>

        {/* Description */}
        <p className="text-base-content/60 text-lg leading-relaxed mb-8">
          The page you're looking for doesn't seem to be here. Maybe it's time
          to reconnect and head back to your people.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="btn bg-[#244D3F] text-white rounded-xl px-7"
          >
            {" "}
            Go back{" "}
          </button>
        </div>

        {/* Small visual */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-[#244D3F]">
              <span className="text-sm">●</span>
            </div>

            <div className="w-12 h-px bg-base-300" />

            <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="text-sm">●</span>
            </div>

            <div className="w-12 h-px bg-base-300" />

            <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <span className="text-sm">●</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
