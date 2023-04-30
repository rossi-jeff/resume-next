import { Link } from "@/types/link.type";
import { GET_LINKS_QUERY } from "../../graphql/queries/get-links";
import { graphQlUrl } from "../../lib/graphql-url";
import LinkRow from "./link-row";

export const metadata = {
  title: "Jeff Rossi | Links",
};

export default async function Links() {
  const { data, error, isLoading } = await fetch(graphQlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: GET_LINKS_QUERY }),
    next: { revalidate: 60 },
  }).then((res) => res.json());

  if (error) return <div>{String(error)}</div>;
  if (isLoading) return <div>Loading...</div>;

  const links: Link[] = data.getLinks;

  return (
    <div id="links-page">
      <h1>Links</h1>
      <div className="flex flex-wrap px-2 py-1 bg-teal text-navy font-bold rounded">
        <div className="flex-grow">Title</div>
        <div className="w-20">Type</div>
        <div className="w-20 text-right">Link</div>
      </div>
      {links &&
        links.length &&
        links.map((link, index) => (
          <LinkRow key={link.Id} link={link} index={index} />
        ))}
    </div>
  );
}
