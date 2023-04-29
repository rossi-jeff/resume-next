import { FormatName } from '../../lib/format-name'
import { Comment } from '../../types/comment.type'
import { diceFiveKind } from '../../../games-nest/src/ten-grand/ten-grand-functions'

export default function CommentCard({ comment }: { comment: Comment }) {
	const getAuthor = (comment: Comment) => {
		let name: string = ''
		if (comment.Admins && comment.Admins.length) {
			name = FormatName(comment.Admins[0].Name)
		} else if (comment.References && comment.References.length) {
			name = FormatName(comment.References[0].Name)
		} else if (comment.Visitors && comment.Visitors.length) {
			name = FormatName(comment.Visitors[0].Name)
		}
		return name
	}

	return (
		<div id={'comment-' + comment.Id} className="mb-4">
			<div>{comment.Message}</div>
			{getAuthor(comment) && (
				<div className="text-right pr-2">
					--&nbsp;
					{getAuthor(comment)}
				</div>
			)}
		</div>
	)
}
