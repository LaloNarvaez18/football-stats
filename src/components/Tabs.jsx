import React, { useState } from 'react'

function TabNavigation({ data }) {
	const [selectedTab, setSelectedTab] = useState(0)

	return (
		<>
			<nav className='pl-4 pr-4 flex flex-row w-full justify-between bg-indigo nunito'>
				{
					data.map((item, index) => (
						<div
							key={index}
							className={selectedTab == index ? 'text-[15px] text-center text-white pl-4 pr-4 pt-3 pb-3 border-b-4 border-b-yellow cursor-pointer' : 'text-[15px] text-center text-white pl-4 pr-4 pt-3 pb-3 cursor-pointer'}
							onClick={() => setSelectedTab(index)}
						>

							{item.label}
						</div>
					))
				}
			</nav>

			<div className='p-4'>
				{
					data.map((item, index) => (
						<div
							key={index}
							className={selectedTab == index ? '' : 'hidden'}
						>
							{item.content}
						</div>
					))
				}
			</div>
		</>
	)
}

export default TabNavigation