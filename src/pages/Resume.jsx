import Container from './UI/Container';
import '../css/Resume.css';
import Footer from './../components/Footer'

export default function Resume() {
  return (
    <Container>
      <h1> Resume
      <a href = "/assets/files/KyoSook Shin.pdf"><img src="/assets/images/download.jpg" className="resume_img"/></a>      
      </h1> 
      <p>
      </p>
       <h4>Web Application Development Skills</h4>
        <li>Front-End Web Development: HTML, CSS, JavaScript, Web-APIs, JQuery, Third-Party APIs, React</li>
        <li>Back-End Web Development: Node.js, OOP Programming, Test-Driven Development (Jest), Express.js, MVC pattern</li>
        <li>Database: Client-Side Storage (IDB, LocalStorage), SQL, ORM (Sequalize, Mongoose)</li>

      <br></br>

      <h4>Embedded Software Development Skills</h4> 
      <li>Full SDLC (Software Development Life Cycle):  from requirement analysis, testcase automation, unit test and integration test, up to high level analysis, detailed level analysis, implementation, testing, delivery, deployment, and on-site maintenance</li>
      <li>C/C++/C#, ARM/PowerPC Assembler, Python</li>      
      <li>CPU/MCU Control on ARM, PowerPC, Raspberry Pi, Beagle bone, Atmel</li>
      <li>Baremetal BSP(Board Support Package), Kernel innitialization, Device Driver, IRQ, OS Porting/integration</li>
      <li>Wired/Wireless Protocol Development: ATM/TCP/IP/Frame Relay/Circuit voice/packet, WCDMA/HSDPA control/user plane</li>
      <li>Embedded OS: Linux/Ubuntu, Necleus, VxWorks, No OS</li>

      <br></br>

      <h4>Experience</h4>
      <a href = "https://www.dimedi.co.kr/"><img src="/assets/images/dimedi.png" className = "resume_exp_img"/></a> Dimedi Korea (June 2013 - Aug 2014) Senior Software Engineer
      <div className = "resume_exp">
      <li>Dicom PACS Software Development</li>
      <li>Medical Gamma Camera Software/Firmware Development</li>
      </div>

      <a href = "https://www.samsung.com/us/about-us/our-business/it-and-mobile-communications/"><img src="/assets/images/samsung.jpg" className = "resume_exp_img"/></a> Samsung Electronics (2002 - 2012) Senior Software Engineer
      <div className = "resume_exp">
      <li>Software System Engineering</li>
      <li>WCDMA/HSDPA Modem Software/Firmware Development</li>
      </div>
      <br></br>


      <h4>Education</h4>
      <a href = "https://techbootcamps.utexas.edu/coding/"><img src="/assets/images/bootcamp.png" className = "resume_edu_img"/></a> UT Austin Boot Camp (Jul 2023 - Jan 2024) Web Programming

      <br></br>
      <a href = "https://www.austincc.edu/"><img src="/assets/images/acc.jpg" className = "resume_edu_img"/></a> Austin Community College (Jan 2020 - Dec 2023) Associate's degree, Art of Science

      <br></br>
      <a href = "https://www.yonsei.ac.kr/en_sc/index.jsp"><img src="/assets/images/yonsei.jpg" className = "resume_edu_img"/></a> Yonsei University, Bachelor's degree, Electronic Engineering
      <br></br>            
      <br></br>

      <h4>Certificate</h4>
      <a href = "https://www.istqb.org/"><img src="/assets/images/istqb.png" className = "resume_edu_img"/></a> ISTQB Foundation Level (Dec 2011) Test-Driven Development
      <br></br>                  
      <a href = "https://www.sixsigmacouncil.org/lean-six-sigma-master-black-belt-certification/" ><img src="/assets/images/six-sigma.jpg" className = "resume_edu_img"/></a> Six Sigma Master Black Belt (Dec 2008) Statistical Data Analysis, Lean SDLC
      <br></br>                  
      <br></br>     
      <Footer/>

    </Container>
  );
}
