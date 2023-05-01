import './globals.css'
import { Inter } from 'next/font/google'
import NavigationBar from './navigation-bar'
import FooterBar from './footer-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Jeff Rossi | Software Developer',
	description:
		'Jeff Rossi has been a sofware developer since 1998. He has experience with PHP, MySQL, Ruby on Rails, NodeJS, TypeScript, and GraphQL',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex flex-col h-screen">
					<NavigationBar />
					<div className="mx-4 flex-grow overflow-y-auto h-full">
						{children}
						<div id="scroll-space" className="h-12"></div>
					</div>
					<FooterBar />
				</div>
			</body>
		</html>
	)
}
