import { Link } from "@/types/link.type";

export default function LinkRow({ link }: { link: Link }) {
  return (
    <div id={"link-" + link.Id} className="mb-4">
      <div className="flex flex-wrap">
        <div className="flex-grow">{link.Title}</div>
        <div className="w-20">{link.Type}</div>
        <div className="w-20">
          <a href={link.Url} target="_blank">
            Visit
          </a>
        </div>
      </div>
      <div>{link.Description}</div>
    </div>
  );
}
