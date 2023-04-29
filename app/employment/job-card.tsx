import { FormatAddress } from '@/lib/format-address'
import { Job } from '@/types/job.type'

export default function JobCard({ job }: { job: Job }) {
	return (
		<div id={'job-' + job.Id} className="mb-4 card">
			<h3>{job.Company}</h3>
			{job.From && job.To && (
				<div className="flex flex-wrap">
					<div className="mr-4">
						<strong>From</strong>
						{job.From.Month}
						{job.From.Year}
					</div>
					<div>
						<strong>To</strong>
						{job.To.Month}
						{job.To.Year}
					</div>
				</div>
			)}
			{job.Address && (
				<div>
					<strong>Address</strong>
					{FormatAddress(job.Address)}
				</div>
			)}
			{job.Title && (
				<div>
					<strong>Title</strong>
					{job.Title}
				</div>
			)}
			{job.Duties && (
				<div>
					<strong>Duties</strong>
					{job.Duties}
				</div>
			)}
		</div>
	)
}
