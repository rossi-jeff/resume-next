import { GET_COMMENTS_QUERY } from "../../graphql/queries/get-comments";
import { graphQlUrl } from "../../lib/graphql-url";
import { Comment } from "../../types/comment.type";
import CommentCard from "./comment-card";

export const metadata = {
  title: "Jeff Rossi | Testimonials",
};

export default async function Testimonials() {
  const { data, error, isLoading } = await fetch(graphQlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: GET_COMMENTS_QUERY }),
    next: { revalidate: 60 },
  }).then((res) => res.json());

  if (error) return <div>{String(error)}</div>;
  if (isLoading) return <div>Loading...</div>;

  const comments: Comment[] = data.getComments;

  return (
    <div id="testimonials-page">
      <h1>Testimonials</h1>
      {comments &&
        comments.length &&
        comments.map((comment) => (
          <CommentCard key={comment.Id} comment={comment} />
        ))}
    </div>
  );
}
