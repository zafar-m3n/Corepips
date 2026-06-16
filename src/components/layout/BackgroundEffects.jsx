export default function BackgroundEffects({ variant = "default" }) {
  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.06) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Blobs */}
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-core-blue/8 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-[360px] h-[360px] rounded-full bg-core-teal/6 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-core-sky/40 blur-2xl" />
      </div>
    );
  }

  if (variant === "soft") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-core-blue/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-core-teal/5 blur-3xl" />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-10 right-10 w-64 h-64 rounded-full bg-core-sky/50 blur-2xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-core-mint/40 blur-2xl" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-core-blue/4 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-core-teal/4 blur-3xl" />
    </div>
  );
}
