import Container from './UI/Container';
import Row from './UI/Row';
import Col from './UI/Col';
import Card from './UI/Card';
import '../css/Portfolio.css';
import { useState } from 'react';

   

export default function Portfolio() {

  const Projects = [
    {
      id: 0,
      name: "JATE Text Editor",
      description: "installable/cacheable PWA(Progressive Web Application) based on Webpack",
      image: "/assets/images/jate.png",
      url: "https://j-a-t-e-8d4l.onrender.com/",
      repo: "https://github.com/alla0810/pwa-text-editor"
    },
    {
      id: 1,
      name: "ProPlanForge Group Project",
      description: "Project Management Tool, Developed statistics page using Chart.js library",
      image: "/assets/images/project2.png",
      url: "https://mysterious-sands-89389-6bcd1486e90b.herokuapp.com/stats",
      repo: "https://github.com/whatnameshouldiuse/UTFSB-Project2-Group8"      
    },
    {
      id: 2,
      name: "CMS-style Tech Blog",
      description: "Developed front-end/back-end application using MVC architecture and Sequalize",
      image: "/assets/images/tech_blog.png",
      url: "https://cool-tech-blog-c417147650ea.herokuapp.com/",
      repo: "https://github.com/alla0810/tech-blog"      
    },  
    {
      id: 3,
      name: "Amazon Navigator Group Project",
      description: "Simple Price/Review Viewer, Developed third-party Amazon API fetch application",
      image: "/assets/images/amazon.png",
      url: "https://alla0810.github.io/AmazonNavigator/",
      repo: "https://github.com/alla0810/AmazonNavigator"      
    },  
    {
      id: 4,
      name: "E-commerce Back-End Program",
      description: "Product Management Program using Sequalize ORM based on MySQL database",
      image: "/assets/images/e-commerce.gif",
      url: "https://github.com/alla0810/e-commerce",
      repo: "https://github.com/alla0810/e-commerce"      
    },  
    {
      id: 5,
      name: "Note Taker",
      description: "Daily Note Management Program using Express.js Back-End Program",
      image: "/assets/images/note-taker.gif",
      url: "https://note-taker-for-you-081d407650f3.herokuapp.com/",
      repo: "https://github.com/alla0810/note_taker"      
    },  
    {
      id: 6,
      name: "Weather Dashboard",
      description: "Five Days weather forecast for multiple cities, Server-Side API, Persistent localStorage",
      image: "/assets/images/weather_dashboard.png",
      url: "https://alla0810.github.io/weatherDashboard/",
      repo: "https://github.com/alla0810/weatherDashboard"      
    },  
    {
      id: 7,
      name: "Work Day Scheduler",
      description: "Daily Planner based on Dynamically Updated HTML and CSS using jQuery and Day.js library",
      image: "/assets/images/work-scheduler.gif",
      url: "https://alla0810.github.io/workScheduler/",
      repo: "https://github.com/alla0810/workScheduler"      
    },  
    {
      id: 8,
      name: "Multiple-choice JavaScript Quiz",
      description: "Timed JavaScript Quiz that stores high scores, Dynamically Updated HTML and CSS using javaScript",
      image: "/assets/images/code_quiz.gif",
      url: "https://alla0810.github.io/javascriptQuiz/",
      repo: "https://github.com/alla0810/javascriptQuiz"      
    },      
  ]

  const [hover0, setHover0] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);
  const [hover7, setHover7] = useState(false);
  const [hover8, setHover8] = useState(false);  

  const handleHover0 = (evt) => {
    //  console.log("hovering: ", evt);
      evt.preventDefault();

      setHover0(true);
   
}
    
const handleLeave0 = (evt) => {
  evt.preventDefault();

  setHover0(false);      

}

const handleHover1 = (evt) => {
  //  console.log("hovering: ", evt);
  evt.preventDefault();
  
  setHover1(true);
}
      
const handleLeave1 = (evt) => {
  evt.preventDefault();
  
  setHover1(false);      
}    

const handleHover2 = (evt) => {
  //  console.log("hovering: ", evt);
  evt.preventDefault();
    
  setHover2(true);
}
        
const handleLeave2 = (evt) => {
  evt.preventDefault();
    
  setHover2(false);      
}    

const handleHover3 = (evt) => {
//  console.log("hovering: ", evt);
    evt.preventDefault();
      
    setHover3(true);
}
          
const handleLeave3 = (evt) => {
  evt.preventDefault();
      
  setHover3(false);      
}    
          
const handleHover4 = (evt) => {
  //  console.log("hovering: ", evt);
      evt.preventDefault();
        
  setHover4(true);
}
            
const handleLeave4 = (evt) => {
    evt.preventDefault();
        
  setHover4(false);      
}    
  
const handleHover5 = (evt) => {
  //  console.log("hovering: ", evt);
      evt.preventDefault();
        
  setHover5(true);
}
            
const handleLeave5 = (evt) => {
    evt.preventDefault();
        
  setHover5(false);      
}    

const handleHover6 = (evt) => {
  //  console.log("hovering: ", evt);
      evt.preventDefault();
        
  setHover6(true);
}
            
  const handleLeave6 = (evt) => {
    evt.preventDefault();
        
  setHover6(false);      
}    

const handleHover7 = (evt) => {
  //  console.log("hovering: ", evt);
      evt.preventDefault();
        
  setHover7(true);
}
            
  const handleLeave7 = (evt) => {
    evt.preventDefault();
        
  setHover7(false);      
}    

const handleHover8 = (evt) => {
  //  console.log("hovering: ", evt);
      evt.preventDefault();
        
  setHover8(true);
}
            
const handleLeave8 = (evt) => {
    evt.preventDefault();
        
  setHover8(false);      
}    


  return (
    <Container>
      <Row>
        <h1>Portfolio</h1>     
        <br></br> 
        <br></br>         
      </Row>

      <Row className= "row-container">
          <Col size="md-4">
            <Card>     
              {hover0 ? (
                <div>
                  <img id = "id0" className="opacity_30" src={Projects[0].image} onMouseEnter={handleHover0} onMouseLeave={handleLeave0}/> 
                  <div className = "text-block text-center">
                    <h4>
                      <a href={Projects[0].url} className="text_color">{Projects[0].name}</a>  
                    </h4>                      
                    <p >
                      {Projects[0].description}
                    </p>
                    <a href = {Projects[0].repo}><img src="/assets/images/github.png" className="port_github_img"/></a>                                          
                  </div>
                </div>
              ) : (
              <img id = "id0" className="portfolio_img" src={Projects[0].image} onMouseEnter={handleHover0} onMouseLeave={handleLeave0}/> 
              )
            }
            </Card>              

            <Card>     
              {hover1 ? (
                <div>
                  <img id = "id1" className="opacity_30" src={Projects[1].image} onMouseEnter={handleHover1} onMouseLeave={handleLeave1}/> 
                  <div className = "text-block text-center">
                    <h4>
                    <a href={Projects[1].url} className="text_color">{Projects[1].name}</a>
                    </h4>
                    <p >
                      {Projects[1].description}
                    </p>
                      <a href = {Projects[1].repo}><img src="/assets/images/github.png" className="port_github_img"/></a>
                  </div>                                    
                </div>
              ) : (
              <img id = "id1" className="portfolio_img" src={Projects[1].image} onMouseEnter={handleHover1} onMouseLeave={handleLeave1}/> 
              )
            }
            </Card>              

            <Card>     
              {hover2 ? (
                <div>
                  <img id = "id2" className="opacity_30" src={Projects[2].image} onMouseEnter={handleHover2} onMouseLeave={handleLeave2}/> 
                  <div className = "text-block text-center">
                    <h4>
                      <a href={Projects[2].url} className="text_color">{Projects[2].name}</a>
                    </h4>
                    <p >
                      {Projects[2].description}
                    </p>
                      <a href = {Projects[2].repo}><img src="/assets/images/github.png" className="port_github_img"/></a>
                  </div>                                    
                </div>
              ) : (
              <img id = "id2" className="portfolio_img" src={Projects[2].image} onMouseEnter={handleHover2} onMouseLeave={handleLeave2}/> 
              )
            }
            </Card>              

          </Col>

          <Col size="md-4">
            <Card>     
              {hover3 ? (
                <div>
                  <img id = "id3" className="opacity_30" src={Projects[3].image} onMouseEnter={handleHover3} onMouseLeave={handleLeave3}/> 
                  <div className = "text-block text-center">
                    <h4>
                      <a href={Projects[3].url} className="text_color">{Projects[3].name}</a>
                    </h4>
                    <p >
                      {Projects[3].description}
                    </p>
                      <a href = {Projects[3].repo}><img src="/assets/images/github.png" className="port_github_img"/></a>
                  </div>                                    
                </div>
              ) : (
              <img id = "id3" className="portfolio_img" src={Projects[3].image} onMouseEnter={handleHover3} onMouseLeave={handleLeave3}/> 
              )
            }
            </Card>              

            <Card>     
              {hover4 ? (
                <div>
                  <img id = "id4" className="opacity_30" src={Projects[4].image} onMouseEnter={handleHover4} onMouseLeave={handleLeave4}/> 
                  <div className = "text-block text-center">
                    <h4>
                    <a href={Projects[4].url} className="text_color">{Projects[4].name}</a>
                    </h4>
                    <p >
                      {Projects[4].description}
                    </p>
                      <a href = {Projects[4].repo}><img src="/assets/images/github.png" className="port_github_img"/></a>
                  </div>                                    
                </div>
              ) : (
              <img id = "id4" className="portfolio_img" src={Projects[4].image} onMouseEnter={handleHover4} onMouseLeave={handleLeave4}/> 
              )
            }
            </Card>              

            <Card>     
              {hover5 ? (
                <div>
                  <img id = "id5" className="opacity_30" src={Projects[5].image} onMouseEnter={handleHover5} onMouseLeave={handleLeave5}/> 
                  <div className = "text-block text-center">
                    <h4>
                      <a href={Projects[5].url} className="text_color">{Projects[5].name}</a>
                    </h4>
                    <p >
                      {Projects[5].description}
                    </p>
                      <a href = {Projects[5].repo}><img src="/assets/images/github.png" className="port_github_img"/></a>
                  </div>                                    
                </div>
              ) : (
              <img id = "id5" className="portfolio_img" src={Projects[5].image} onMouseEnter={handleHover5} onMouseLeave={handleLeave5}/> 
              )
            }
            </Card>              

          </Col>

          <Col size="md-4">
            <Card>     
              {hover6 ? (
                <div >
                  <img id = "id6" className="opacity_30" src={Projects[6].image} onMouseEnter={handleHover6} onMouseLeave={handleLeave6}/> 
                  <div className = "text-block text-center">
                    <h4>
                      <a href={Projects[6].url} className="text_color">{Projects[6].name}</a>
                    </h4>
                    <p >
                      {Projects[6].description}
                    </p>
                      <a href = {Projects[6].repo}><img src="/assets/images/github.png" className="port_github_img"/></a>
                  </div>                                    
                </div>
              ) : (
              <img id = "id6" className="portfolio_img" src={Projects[6].image} onMouseEnter={handleHover6} onMouseLeave={handleLeave6}/> 
              )
            }
            </Card>              

            <Card>     
              {hover7 ? (
                <div>
                  <img id = "id7" className="opacity_30" src={Projects[7].image} onMouseEnter={handleHover7} onMouseLeave={handleLeave7}/> 
                  <div className = "text-block text-center">
                    <h4>
                      <a href={Projects[7].url} className="text_color">{Projects[7].name}</a>
                    </h4>
                    <p >
                      {Projects[7].description}
                    </p>
                      <a href = {Projects[7].repo}><img src="/assets/images/github.png" className="port_github_img"/></a>
                  </div>                                    
                </div>
              ) : (
              <img id = "id7" className="portfolio_img" src={Projects[7].image} onMouseEnter={handleHover7} onMouseLeave={handleLeave7}/> 
              )
            }
            </Card>              

            <Card>     
              {hover8 ? (
                <div className = "text-center">
                  <img id = "id8" className="opacity_30" src={Projects[8].image} onMouseEnter={handleHover8} onMouseLeave={handleLeave8}/> 
                  <div className = "text-block text-center">
                    <h4 >
                      <a href={Projects[8].url} className="text_color">{Projects[8].name}</a>
                    </h4>
                    <p >
                      {Projects[8].description}
                    </p>
                      <a href = {Projects[8].repo}><img src="/assets/images/github.png" className="port_github_img"/></a>
                  </div>                                    
                </div>
              ) : (
              <img id = "id8" className="portfolio_img" src={Projects[8].image} onMouseEnter={handleHover8} onMouseLeave={handleLeave8}/> 
              )
            }
            </Card>              

          </Col>                    
      </Row>
    </Container>
  );
}
