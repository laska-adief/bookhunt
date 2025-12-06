"use client";
export default function Loading() {
  return (
    <div className="min-h-screen p-8 text-white bg-obsidian">
      <div className="w-full max-w-6xl mx-auto">
        {/* Title skeleton */}
        <div className="w-1/2 h-8 mx-auto rounded bg-white/10 animate-pulse" />

        <div className="flex flex-col gap-6 mt-6 md:flex-row">
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-full md:w-[30%]">
            {/* Book Detail Card */}
            <div className="p-4 border rounded-md shadow-lg border-white/10">
              {/* Cover Placeholder */}
              <div className="w-40 mx-auto rounded-md bg-white/10 h-60 animate-shimmer" />

              {/* Meta details skeleton */}
              <div className="mt-4 space-y-3">
                <div className="w-3/4 h-4 rounded bg-white/10 animate-shimmer"></div>
                <div className="w-2/3 h-4 rounded bg-white/10 animate-shimmer"></div>
                <div className="w-1/2 h-4 rounded bg-white/10 animate-shimmer"></div>
                <div className="w-2/3 h-4 rounded bg-white/10 animate-shimmer"></div>
                <div className="w-1/4 h-4 rounded bg-white/10 animate-shimmer"></div>
                <div className="w-1/2 h-4 rounded bg-white/10 animate-shimmer"></div>
              </div>
            </div>

            {/* Subjects Skeleton */}
            <div className="p-4 border rounded-md shadow-lg border-white/10">
              <div className="w-20 h-5 mb-3 rounded bg-white/10 animate-pulse"></div>

              <div className="flex flex-wrap gap-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-20 h-6 rounded-full bg-white/10 animate-shimmer"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3 w-full md:w-[70%]">
            {/* Description Card */}
            <div className="p-4 border rounded-md shadow-lg border-white/10">
              <div className="w-32 h-6 mb-4 rounded bg-white/10 animate-pulse"></div>

              <div className="space-y-3">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-4 rounded bg-white/10 animate-shimmer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Shimmer animation style --- */}
      <style jsx>{`
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.18) 50%,
            rgba(255, 255, 255, 0.08) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}
