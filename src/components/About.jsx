import { FaGithub } from "react-icons/fa";
import { TbCode } from "react-icons/tb";
import { GrLinkedin } from "react-icons/gr";


function About() {
    return (
        <>

            <h3 className="about-title">This is a mini React app project, part of Ironhack's Web Dev bootcamp</h3>
            <h4 className="subtitle">Built by future Full Stack developers <TbCode /> :</h4>


            <h4 className="name">Senay Asikoglu</h4>
            <a className="about-link" href="https://github.com/senayasikoglu" target="blank"><FaGithub />
            </a>
            <a className="about-link" href="https://www.linkedin.com/in/senayasikoglu/" target="blank"><GrLinkedin /></a>

            <h4 className="name">Lucía Marconi</h4>
            <a className="about-link" href="https://github.com/senayasikoglu" target="blank"><FaGithub />
            </a>
            <a className="about-link" href="https://www.linkedin.com/in/lumarconi21/" target="blank"><GrLinkedin /></a>

        </>
    )
}





export default About;