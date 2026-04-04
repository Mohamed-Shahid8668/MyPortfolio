import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaFileExcel} from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";
import { SiSelenium, SiSqlite} from "react-icons/si";

function Skills(){
  return(

    <section id="skills" className="skills">

      <h2>Skills</h2>

      <div className="skills-grid">

        <div><FaHtml5 size={30}/> HTML</div>
        <div><FaCss3Alt size={30}/> CSS</div>
        <div><SiJavascript size={30}/> JavaScript</div>
        <div><FaReact size={30}/> React</div>
        <div><FaNodeJs size={30}/> Node.js</div>
        <div><SiMongodb size={30}/> MongoDB</div>
        <div><FaPython size={30}/> Python</div>
        <div><SiSelenium size={30} color="#ffffff" /> Selenium</div>
        <div><SiSqlite size={30}/> SQL</div>
        <div><FaFileExcel size={30}/> Excel</div>

      </div>

    </section>
  )
}

export default Skills