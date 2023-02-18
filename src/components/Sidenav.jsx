import React from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'
import { useState } from 'react'

const Sidenav = () => {

	const [nav, setNav] = useState(false)
	const handleNav = () => {
		setNav(!nav)
		console.log('clicked')
	}
	return (
		<div>
			<AiOutlineMenu onClick={handleNav} size={30} className='absolute top-4 right-4 z-50 md:hidden' />
			{
				nav ? (
					<div className=' fixed h-screen w-full bg-black/50 flex flex-col justify-center items-center z-50'>
						<a onClick={handleNav} href="#main" className="flex w-[75%] justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
							<AiOutlineHome size={20} />
							<span className='pl-4'>Home</span>
						</a>
						<a onClick={handleNav} href="#works" className="flex w-[75%] justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
							<GrProjects size={20} />
							<span className='pl-4'>Work</span>
						</a>
						<a onClick={handleNav} href="#projects" className="flex w-[75%] justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
							<AiOutlineProject size={20} />
							<span className='pl-4'>Projets</span>
						</a>
						<a onClick={handleNav} href="#resume" className="flex w-[75%] justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
							<BsPerson size={20} />
							<span className='pl-4'>Resume</span>
						</a>
						<a onClick={handleNav} href="#contact" className="flex w-[75%] justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
							<AiOutlineMail size={20} />
							<span className='pl-4'>Contacts</span>
						</a>

					</div>
				) :
					(
						""
					)
			}
			<div className='md:block hidden fixed top-[25%] z-10'>
				<div className='flex flex-col ml-2'>
					<a href="#main" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
						<AiOutlineHome size={20} />
					</a>
					<a href="#works" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
						<GrProjects size={20} />
					</a>
					<a href="#projects" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
						<AiOutlineProject size={20} />
					</a>
					<a href="#resume" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
						<BsPerson size={20} />
					</a>
					<a href="#contact" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
						<AiOutlineMail size={20} />
					</a>
				</div>
			</div>
		</div >

	)
}

export default Sidenav