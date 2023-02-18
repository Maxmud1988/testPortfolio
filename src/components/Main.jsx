import React from 'react'
import heroImg from '../assets/hero.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaVk, FaInstagram, FaYoutube } from 'react-icons/fa'
const Main = () => {
	return (
		<div id='main'>
			<img className='w-full h-screen object-cover object-center' src={heroImg} alt="Hero image" />
			<div className='w-full h-screen absolute top-0 left-0  bg-slate-900/60'>
				<div className='max-w-[700]  m-auto  w-full h-full  flex flex-col justify-center  items-center text-center md:pl-[20px] '>
					<h1 className=' sm:text-5xl text-4xl font-bold text-orange-100 '>Men Maxmud Xudoyberdiev</h1>
					<h2 className='flex sm:text-3xl text-2xl font-bold pt-4 text-orange-100'>Men
						<TypeAnimation
							sequence={[
								'Dasturchiman', // Types 'One'
								2000, // Waits 1s
								'Coderman', // Deletes 'One' and types 'Two'
								2000, // Waits 2s
								'Texnikalar ishqiboziman', // Deletes 'One' and types 'Two'
								2000, // Waits 2s

							]}
							wrapper="div"
							cursor={true}
							repeat={Infinity}
							style={{ fontSize: '1em', paddingLeft: '5px' }}
						/>

					</h2>
					<div className='flex justify-between pt-6 max-w-[200px] w-full  '>
						<FaTwitter color='rgba(255, 237, 213,  0.9)' className='cursor-pointer' size={25} />
						<FaVk color='rgba(255, 237, 213,  0.9)' className='cursor-pointer' size={25} />
						<FaInstagram color='rgba(255, 237, 213,  0.9)' className='cursor-pointer' size={25} />
						<FaYoutube color='rgba(255, 237, 213,  0.9)' className='cursor-pointer' size={25} />
					</div>
				</div>
			</div>

		</div>
	)
}

export default Main