import { GET_COMMENTS_QUERY } from '../../graphql/queries/get-comments'
import { graphQlUrl } from '../../lib/graphql-url'

export default async function Testimonials() {
	const { data, error, isLoading } = await fetch(graphQlUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query: GET_COMMENTS_QUERY }),
		next: { revalidate: 60 },
	}).then((res) => res.json())

	if (error) return <div>{String(error)}</div>
	if (isLoading) return <div>Loading...</div>

	return <div id="testimonials-page">{JSON.stringify(data)}</div>
}
