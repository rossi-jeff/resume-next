import { GET_LINKS_QUERY } from '../../graphql/queries/get-links'
import { graphQlUrl } from '../../lib/graphql-url'

export default async function Links() {
	const { data, error, isLoading } = await fetch(graphQlUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query: GET_LINKS_QUERY }),
		next: { revalidate: 60 },
	}).then((res) => res.json())

	if (error) return <div>{String(error)}</div>
	if (isLoading) return <div>Loading...</div>

	return <div id="links-page">{JSON.stringify(data)}</div>
}
