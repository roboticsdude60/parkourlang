import type { ReactNode } from "react";

const collectedMoves = ["webster", "kong", "cosplay"];

const VideoCard: React.FC<{
  username: string;
  trickName: string;
  trickTags?: string[];
  canonicalLink: string;
  cachedLink: string;
  children?: ReactNode;
}> = ({
  children,
  canonicalLink,
  cachedLink,
  username,
  trickName,
  trickTags,
}) => {
  return (
    <div className="max-w-[300px] flex flex-col shadow-lg rounded-xl rounded-t-3xl bg-white">
      <video className="max-w-md rounded-t-3xl col-span-1" controls muted>
        <source src={cachedLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="px-4 mt-4">
        <h2 className="text-lg font-bold">{trickName}</h2>
        {children}
        <a
          style={{
            backgroundImage: "var(--accent-gradient)",
            backgroundClip: "border-box",
            backgroundSize: "400%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundPosition: "0%",
          }}
          href={canonicalLink}
        >
          @{username}
        </a>
      </div>
      <div className="text-sm text-blue-500 px-4 my-2 flex flex-wrap gap-2">
        {trickTags?.map((tag) => {
          console.log(tag, collectedMoves);
          if (collectedMoves.includes(tag)) {
            return <a href={`/moves/${tag}`}>#{tag}</a>;
          }
          return <span className="text-gray-500">#{tag}</span>;
        })}
      </div>
    </div>
  );
};

export default VideoCard;
