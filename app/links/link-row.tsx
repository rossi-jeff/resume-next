import { Link } from '@/types/link.type'

export default function LinkRow({
	link,
	index,
}: {
	link: Link
	index: number
}) {
	const getClass = (index: number) => {
		let className = 'p-2'
		if (index % 2 == 1) className += ' alternate'
		return className
	}
	return (
		<div id={'link-' + link.Id} className={getClass(index)}>
			<div className="flex flex-wrap">
				<div className="flex-grow">
					<h3>{link.Title}</h3>
				</div>
				<div className="w-20">{link.Type}</div>
				<div className="w-20 text-right">
					<a href={link.Url} target="_blank">
						Visit
					</a>
				</div>
			</div>
			<div>{link.Description}</div>
		</div>
	)
}
