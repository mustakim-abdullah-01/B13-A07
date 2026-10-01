export default function HydrationFallBack() {
  return (
    <div className="h-screen flex justify-center items-center">
      <span className="loading loading-spinner text-success"></span>
    </div>
  );
}
