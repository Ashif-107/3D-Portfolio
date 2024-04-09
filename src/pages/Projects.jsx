import { Link } from 'react-router-dom'
import {projects} from '../constants'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'
const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Hello 👋🏻, I'm <span className="blue-gradient_text
font-semibold drop-shadow">Mohamed Ashif</span></h1>

      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-800">
        Hello and welcome to my portfolio! I am passionate about leveraging technology to create meaningful experiences. Below, you'll find a selection of my projects that showcase my skills, creativity, and dedication to excellence.
        Within these digital walls, I am excited to present a curated selection of projects that embody my passion for innovation, creativity, and problem-solving.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
      {projects.map((project) => (
        <div className='lg:w-[400px] w-full' key={project.name}>
          <div className='block-container w-12 h-12'>
            <div className={ `btn-back rounded-xl ${project.theme}`}/>
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img src={project.iconUrl} alt="project-icon"
                className='w-20 h-20 object-contain'
              />
            </div>
          </div>
          <div className='mt-5 flex flex-col'>
            <h4 className='text=2xl font-poppins font-semibold'>{project.name}</h4>
            <p className='mt-2 text-slate-900'>{project.description}</p>
            <div className='mt-5 flex items-center gap-2 font-poppins'>
              <Link to={project.link} target='blank' rel='noopener noreferrer' className='font-semibold text-blue-600'>
                Link to Project
              </Link>
              <img src={arrow} alt="arrow"
              className='w-4 h-4 object-contain'
              />
            </div>
            <h5 className='mt-5  text-slate-900 '>Tech Stack : {project.stack}</h5>
          </div>
        </div>
      ))}
      </div>

      <hr className='border-slate-500'/>
      <CTA/>
    </section>
  )
}

export default Projects
