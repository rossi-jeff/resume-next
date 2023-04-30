'use client'

import { GET_JOBS_QUERY } from '@/graphql/queries/get-jobs'
import { GET_REFERENCES_QUERY } from '@/graphql/queries/get-references'
import { GET_SCHOOLS_QUERY } from '@/graphql/queries/get-schools'
import { FormatAddress } from '@/lib/format-address'
import { FormatName } from '@/lib/format-name'
import { graphQlUrl } from '@/lib/graphql-url'
import { Job } from '@/types/job.type'
import { Reference } from '@/types/reference.type'
import { School } from '@/types/school.type'
import Head from 'next/head'

async function getJobs() {
	const { data } = await fetch(graphQlUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query: GET_JOBS_QUERY }),
		next: { revalidate: 60 },
	}).then((res) => res.json())

	const jobs: Job[] = data.getJobs

	return jobs
}

async function getSchools() {
	const { data } = await fetch(graphQlUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query: GET_SCHOOLS_QUERY }),
		next: { revalidate: 60 },
	}).then((res) => res.json())

	const schools: School[] = data.getSchools

	return schools
}

async function getReferences() {
	const { data } = await fetch(graphQlUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query: GET_REFERENCES_QUERY }),
		next: { revalidate: 60 },
	}).then((res) => res.json())

	const references: Reference[] = data.getReferences

	return references
}

export default async function ResumePage() {
	const jobReq = getJobs()

	const schoolReq = getSchools()

	const referenceReq = getReferences()

	const [jobs, schools, references] = await Promise.all([
		jobReq,
		schoolReq,
		referenceReq,
	])

	const print = () => {
		const container = document.getElementById('print-container')
		if (container) {
			const styles = document.styleSheets
			const content = container.innerHTML
			const printWindow = window.open('', '', 'height=500, width=500')
			if (printWindow) {
				printWindow.document.write('<html>')
				if (styles) {
					printWindow.document.write('<head>')
					printWindow.document.write(
						`<link rel='stylesheet' href='${styles[0].href}' />`
					)
					printWindow.document.write('</head>')
				}
				printWindow.document.write('<body style="padding: 1em">')
				printWindow.document.write(content)
				printWindow.document.write('</body>')
				printWindow.document.write('</html>')
				printWindow.document.close()
				printWindow.print()
			}
		}
	}
	return (
		<div id="resume-page">
			<Head>
				<title>Jeff Rossi | Resume</title>
			</Head>
			<h1>Resume</h1>

			<button onClick={print}>Print</button>

			<div
				id="print-container"
				className="border border-black rounded p-4 bg-white text-black my-2"
			>
				<h2 className="mt-4">Jeff Rossi</h2>
				<div>SoftWare Developer</div>
				<hr className="border-2 border-black mb-4" />

				<br />

				<h3>Employment</h3>
				<hr className="border-2 border-black mb-4" />

				{jobs &&
					jobs.length > 0 &&
					jobs.map((job) => (
						<div key={job.Id} className="mb-4">
							<div>
								<strong>{job.Company}</strong>
							</div>
							{job.From && job.To && (
								<div className="flex flex-wrap">
									<div className="mr-4">
										<strong>From</strong> {job.From.Month} {job.From.Year}
									</div>
									<div>
										<strong>To</strong> {job.To.Month} {job.To.Year}
									</div>
								</div>
							)}
							{job.Address && (
								<div>
									<strong>Address</strong> {FormatAddress(job.Address)}
								</div>
							)}
							{job.Title && (
								<div>
									<strong>Title</strong> {job.Title}
								</div>
							)}
							{job.Duties && (
								<div>
									<strong>Duties</strong> {job.Duties}
								</div>
							)}
						</div>
					))}

				<div className="page-break"></div>

				<h3>Education</h3>
				<hr className="border-2 border-black mb-4" />

				{schools &&
					schools.length > 0 &&
					schools.map((school) => (
						<div key={school.Id} className="mb-4">
							<div>
								<strong>{school.Name}</strong>
							</div>
							{school.From && school.To && (
								<div className="flex flex-wrap">
									<div className="mr-4">
										<strong>From</strong> {school.From.Month} {school.From.Year}
									</div>
									<div>
										<strong>To</strong> {school.To.Month} {school.To.Year}
									</div>
								</div>
							)}
							{school.Address && FormatAddress(school.Address) && (
								<div>
									<strong>Address</strong> {FormatAddress(school.Address)}
								</div>
							)}
							{school.Degree && (
								<div>
									<strong>Degree</strong> {school.Degree}
								</div>
							)}
							{school.Program && (
								<div>
									<strong>Program</strong> {school.Program}
								</div>
							)}
						</div>
					))}

				<div className="page-break"></div>

				<h3>References</h3>
				<hr className="border-2 border-black mb-4" />

				{references &&
					references.length > 0 &&
					references.map((reference) => (
						<div key={reference.Id} className="mb-4">
							{reference.Name && <strong>{FormatName(reference.Name)}</strong>}
							{reference.Company && (
								<div>
									<strong>Company</strong> {reference.Company}
								</div>
							)}
							{reference.Title && (
								<div>
									<strong>Title</strong> {reference.Title}
								</div>
							)}
							{reference.Phones && reference.Phones.length > 0 && (
								<div>
									<strong>Phone</strong>{' '}
									{reference.Phones.map((p) => p.Number).join(', ')}
								</div>
							)}
							{reference.Emails && reference.Emails.length > 0 && (
								<div>
									<strong>Email</strong>{' '}
									{reference.Emails.map((e) => e.Address).join(', ')}
								</div>
							)}
						</div>
					))}

				<h3>Online</h3>
				<hr className="border-2 border-black mb-4" />

				<div>
					<strong>React:</strong> https://resume-react.jeff-rossi.com/
				</div>
				<div>
					<strong>Vue:</strong> https://resume-vue.jeff-rossi.com/
				</div>
				<div>
					<strong>Angular:</strong> https://resume-angular.jeff-rossi.com/
				</div>
				<div>
					<strong>Svelte:</strong> https://resume-svelte.jeff-rossi.com/
				</div>

				<h3 className="mt-4">Contact</h3>
				<hr className="border-2 border-black mb-4" />

				<div>
					<strong>Address:</strong> 1506 Tuscaloosa Ave, Holly Hill Florida
					32117
				</div>
				<div>
					<strong>Home:</strong> (386) 226-8913
				</div>
				<div>
					<strong>Cell:</strong> (386) 316-8485
				</div>
				<div>
					<strong>Email:</strong> inquiries@jeff-rossi.com
				</div>
			</div>
		</div>
	)
}
