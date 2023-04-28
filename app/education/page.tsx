import { GET_SCHOOLS_QUERY } from '../../graphql/queries/get-schools'
import { graphQlUrl } from '../../lib/graphql-url'

export default async function Education() {
	const { data, error, isLoading } = await fetch(graphQlUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query: GET_SCHOOLS_QUERY }),
		next: { revalidate: 60 },
	}).then((res) => res.json())

	if (error) return <div>{String(error)}</div>
	if (isLoading) return <div>Loading...</div>

	return <div id="education-page">{JSON.stringify(data)}</div>
}