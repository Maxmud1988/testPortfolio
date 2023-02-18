import React from 'react'

const Contacts = () => {
	return (
		<div id='contact' className='max-w-[1440px]  m-auto md:pl-20 p-4 py-12 '>
			<h1 className='text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
			<form action="https://getform.io/f/87c4a95b-c932-4b80-94dc-1e096d3fd90e" method='Post' encType='multipart/form-data'>
				<div className='grid grid-cols-2 gap-4 w-full py-2 '>
					<div className='flex flex-col'>
						<label className='uppercase text-sm py-2'>Name</label>
						<input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="name" />
					</div>
					<div className='flex flex-col'>
						<label className='uppercase text-sm py-2'>Phone</label>
						<input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
					</div>
				</div>
				<div className='flex flex-col py-2'>
					<label className='uppercase text-sm py-2'>Email</label>
					<input className='border-2  rounded-lg p-3 flex border-gray-300' type="email" name="Email" />
				</div>
				<div className='flex flex-col py-2'>
					<label className='uppercase text-sm py-2'>Subject</label>
					<input className='border-2  rounded-lg p-3 flex border-gray-300' type="text" name="Subject" />
				</div>
				<div className='flex flex-col py-2'>
					<label>Message</label>
					<textarea className='border-2 rounded-lg border-gray-300 ' name="Message" rows="10"></textarea>
				</div>
				<button type='submit' className=' bg-[#001b5e] text-gray-100 mt-4 p-4 w-full rounded-lg' >
					Sent Message
				</button>
			</form>
		</div>
	)
}

export default Contacts