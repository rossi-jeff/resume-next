'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import NavigationBar from './navigation-bar'
import FooterBar from './footer-bar'
import LeftPanel from './left-panel'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const toggle = () => {
		const panel = document.getElementById('left-panel')
		if (panel) panel.classList.toggle('open')
	}
	return (
		<html lang="en">
			<body className={inter.className}>
				<LeftPanel toggle={toggle} />
				<div className="flex flex-col h-screen">
					<NavigationBar toggle={toggle} />
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
