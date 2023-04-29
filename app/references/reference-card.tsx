import { FormatName } from '../../lib/format-name'
import { Reference } from '../../types/reference.type'

export default function ReferenceCard({ reference }: { reference: Reference }) {
	return (
		<div id={'reference-' + reference.Id} className="mb-4">
			{reference.Name && <h3>{FormatName(reference.Name)}</h3>}
			{reference.Company && (
				<div>
					<strong>Company</strong>
					{reference.Company}
				</div>
			)}
			{reference.Title && (
				<div>
					<strong>Title</strong>
					{reference.Title}
				</div>
			)}
		</div>
	)
}
