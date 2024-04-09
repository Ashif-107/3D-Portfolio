import React from 'react'
import {Link} from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text,link,btntxt}) => (

    <div className="info-box neo-brutalism-yellow">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btntxt}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>

)

const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-yellow py-4 px-8 text-white mx-5'>
            Hi, It's Me <span className='font-semibold'>Ashif</span> 👋 <br />
            A Developer, Student, and a Tech Enthusiast. <br />
        </h1>
    ),
    2:(
        <InfoBox
            text="Wanna Know more about me and my experience? Here you go!"
            link="/about"
            btntxt="About Me"
        />
    ),
    3:(
        <InfoBox
            text="Worked on some cool projects, Wanna check them out? Heres the link to my projects!"
            link="/projects"
            btntxt="My projects"
        />
    ),
    4:(
        <InfoBox
        text="Give a feedback about this portfolio or just wanna say Hi? Here's the link to contact me!"
        link="/contact"
        btntxt="Let's Talk"
    />
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
