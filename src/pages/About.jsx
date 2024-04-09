import { skills, experiences } from "../constants/index";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA";

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">Hello 👋🏻, I'm <span className="blue-gradient_text
        font-semibold drop-shadow">Mohamed Ashif</span></h1>

            <div>
                <p className="mt-5 flex flex-col gap-3 text-slate-800">A Developer Based In India, Studying at VIT varsity. Exploring the World through internet.</p>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">Some Skills I have/Know</h3>

                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div className="block-container w-20 h-20">
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="py-16 ">
                <h3 className="subhead-text">Things About Me</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-800">
                    <p>A Student At VIT chennai Pursuing my BTech degree. Born on 19-Nov-2005 and graduated from High School on 2023. Below is a small journey of mine till now </p>
                </div>
                <div className="mt-12 flex">
                    <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom:'8px',
                                    borderStyle:'solid',
                                    borderBottomColor:experience.iconBg,
                                    boxShadow:'none'
                                }}
                                iconStyle={{
                                    background: experience.iconBg,
                                }}>
                                <div>
                                    <h3 className="text-lg font-bold">{experience.title}</h3>
                                    <ul>{experience.points.map((point, index) => (
                                        <li className="text-black-600/50 font-normal pl-1 text-sm" key={`experience-point-${index}`}>{point}</li>
                                    ))}</ul>
                                </div>

                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
            <hr className="border-slate-500" />
            <CTA/>
        </section>
    )
}

export default About
