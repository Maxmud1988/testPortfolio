import React from 'react'
import ProjectItem from './ProjectItem'

import CriptoSite from '../assets/cripto-site.jpg'
import Zilov from '../assets/zilov.jpg'
import Netflix from '../assets/netflix.webp'
import Firefox from '../assets/ferifox.webp'

const Projects = () => {
	return (
		<div id='projects' className='max-w-[1440px] m-auto md:pl-20 p-4 py-12  '>
			<h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projets</h1>
			<p className='text-center py-8'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at ipsam, atque dolore aliquid vel quam obcaecati repellat veniam, enim minus quos accusamus est nam repudiandae quasi eveniet ullam voluptates!
			</p>
			<div className='grid sm:grid-cols-2 gap-12'>
				<ProjectItem img={CriptoSite} title={"cripto App"} />
				<ProjectItem img={Zilov} title={"Zilov App"} />
				<ProjectItem img={Netflix} title={"Netflix App"} />
				<ProjectItem img={Firefox} title={"Firefox App"} />
			</div>
		</div>
	)
}

export default Projects