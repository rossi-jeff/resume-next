import { GET_REFERENCES_QUERY } from "../../graphql/queries/get-references";
import { graphQlUrl } from "../../lib/graphql-url";
import { Reference } from "../../types/reference.type";
import ReferenceCard from "./reference-card";

export const metadata = {
  title: "Jeff Rossi | References",
};

export default async function References() {
  const { data, error, isLoading } = await fetch(graphQlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: GET_REFERENCES_QUERY }),
    next: { revalidate: 60 },
  }).then((res) => res.json());

  if (error) return <div>{String(error)}</div>;
  if (isLoading) return <div>Loading...</div>;

  const references: Reference[] = data.getReferences;

  return (
    <div id="references-page">
      <h1>References</h1>
      {references &&
        references.length &&
        references.map((reference) => (
          <ReferenceCard key={reference.Id} reference={reference} />
        ))}
    </div>
  );
}
