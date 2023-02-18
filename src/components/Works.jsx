import React from 'react'
import ItemWorks from './ItemWorks'
const data = [
	{
		year: 2020,
		title: 'Content Creator',
		duration: '3 Years',
		details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt itaque sequi natus praesentium deserunt, esse dolores laboriosam similique, explicabo quisquam obcaecati? Quidem commodi minus tempora quos fugit! A, recusandae fugiat.'
	},
	{
		year: 2017,
		title: 'Google',
		duration: '3 Years',
		details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt itaque sequi natus praesentium deserunt, esse dolores laboriosam similique, explicabo quisquam obcaecati? Quidem commodi minus tempora quos fugit! A, recusandae fugiat.'
	},
	{
		year: 2015,
		title: 'Amazon',
		duration: '2 Years',
		details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt itaque sequi natus praesentium deserunt, esse dolores laboriosam similique, explicabo quisquam obcaecati? Quidem commodi minus tempora quos fugit! A, recusandae fugiat.'
	},
	{
		year: 2012,
		title: 'Facebook',
		duration: '3 Years',
		details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt itaque sequi natus praesentium deserunt, esse dolores laboriosam similique, explicabo quisquam obcaecati? Quidem commodi minus tempora quos fugit! A, recusandae fugiat.'
	},
	{
		year: 2012,
		title: 'Facebook',
		duration: '3 Years',
		details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt itaque sequi natus praesentium deserunt, esse dolores laboriosam similique, explicabo quisquam obcaecati? Quidem commodi minus tempora quos fugit! A, recusandae fugiat.'
	},
]
const Works = () => {
	return (
		<div id='works' className='max-w-[1440px]   m-auto md:pl-20 p-4 py-16 '>
			<h1 className='text-4xl font-bold text-center text-[#001b5e]' >Work</h1>
			{data.map((item, idx) => (
				<ItemWorks key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
			)
			)}
		</div>
	)
}

export default Works 