import { School } from "@/types/school.type";
import { GET_SCHOOLS_QUERY } from "../../graphql/queries/get-schools";
import { graphQlUrl } from "../../lib/graphql-url";
import SchoolCard from "./school-card";

export const metadata = {
  title: "Jeff Rossi | Education",
};

export default async function Education() {
  const { data, error, isLoading } = await fetch(graphQlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: GET_SCHOOLS_QUERY }),
    next: { revalidate: 60 },
  }).then((res) => res.json());

  if (error) return <div>{String(error)}</div>;
  if (isLoading) return <div>Loading...</div>;

  const schools: School[] = data.getSchools;

  return (
    <div id="education-page">
      <h1>Education</h1>
      {schools &&
        schools.length &&
        schools.map((school) => <SchoolCard key={school.Id} school={school} />)}
    </div>
  );
}
