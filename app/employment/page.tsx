import { Job } from "@/types/job.type";
import { GET_JOBS_QUERY } from "../../graphql/queries/get-jobs";
import { graphQlUrl } from "../../lib/graphql-url";
import JobCard from "./job-card";

export const metadata = {
  title: "Jeff Rossi | Employment",
};

export default async function Employment() {
  const { data, error, isLoading } = await fetch(graphQlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: GET_JOBS_QUERY }),
    next: { revalidate: 60 },
  }).then((res) => res.json());

  if (error) return <div>{String(error)}</div>;
  if (isLoading) return <div>Loading...</div>;

  const jobs: Job[] = data.getJobs;

  return (
    <div id="employment-page">
      <h1>Employment</h1>
      {jobs &&
        jobs.length &&
        jobs.map((job) => <JobCard key={job.Id} job={job} />)}
    </div>
  );
}
