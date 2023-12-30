import Container from './UI/Container';
import Row from './UI/Row';
import Col from './UI/Col';
import Card from './UI/Card';
import '../assets/Portfolio.css';



const Projects = [
  {
    id: 0,
    name: "JATE (Just Another Text Editor)",
    description: "Developed installable/cacheable application based on Webpack",
    image: "../../images/jate.png",
    url: "https://j-a-t-e-8d4l.onrender.com/"
  },
  {
    id: 1,
    name: "ProPlanForge Group Project",
    description: "Developed statistics page using Chart.js library",
    image: "../../images/project2.png",
    url: "https://mysterious-sands-89389-6bcd1486e90b.herokuapp.com/stats"
  },
  {
    id: 2,
    name: "CMS-style Tech Blog",
    description: "Developed front-end/back-end application using MVC architecture",
    image: "../../images/tech_blog.png",
    url: "https://cool-tech-blog-c417147650ea.herokuapp.com/"
  },  
  {
    id: 3,
    name: "Amazon Navigator Group Project",
    description: "Developed Amazon API fetch application",
    image: "../../images/amazon.png",
    url: "https://alla0810.github.io/AmazonNavigator/"
  },  
  {
    id: 4,
    name: "E-commerce Back-End Program",
    description: "Sequalize ORM based on MySQL database",
    image: "../../images/e-commerce.gif",
    url: "https://github.com/alla0810/e-commerce"
  },  
  {
    id: 5,
    name: "Note Taker",
    description: "Express.js Back-End Program",
    image: "../../images/note-taker.gif",
    url: "https://note-taker-for-you-081d407650f3.herokuapp.com/"
  },  
  {
    id: 6,
    name: "Weather Dashboard",
    description: "Server-Side API, Persistent localStorage",
    image: "../../images/weather_dashboard.png",
    url: "https://alla0810.github.io/weatherDashboard/"
  },  
  {
    id: 7,
    name: "Work Day Scheduler",
    description: "Dynamically Updated HTML and CSS using jQuery and Day.js library",
    image: "../../images/work-scheduler.gif",
    url: "https://alla0810.github.io/workScheduler/"
  },  
  {
    id: 8,
    name: "Multiple-choice JavaScript Quiz",
    description: "Dynamically Updated HTML and CSS using javaScript",
    image: "../../images/code_quiz.gif",
    url: "https://alla0810.github.io/javascriptQuiz/"
  },      
]


const handleHover = (evt) => {
//  console.log("hovering: ", evt);

  console.log("evt.target: ", evt.target);
  const target_image = evt.target.src.split('/');
  console.log(target_image);

  const target_image_name = target_image[target_image.length-1];
  console.log(target_image_name);

  const entry = Projects.filter(element => element.image.includes(target_image_name));
  console.log(entry[0]);

  const id = "id" + entry[0].id.toString();
  console.log(id);

  evt.target.textContent = entry[0].name;

  const PortEl = document.getElementById(id);
  PortEl.setAttribute("class", "opacity_30");
}

const handleLeave = (evt) => {
  console.log("evt.target: ", evt.target);
  const target_image = evt.target.src.split('/');
  console.log(target_image);

  const target_image_name = target_image[target_image.length-1];
  console.log(target_image_name);

  const entry = Projects.filter(element => element.image.includes(target_image_name));
  console.log(entry[0]);

  const id = "id" + entry[0].id.toString();
  console.log(id);

  evt.target.textContent = entry[0].name;

  const PortEl = document.getElementById(id);
  PortEl.setAttribute("class", "portfolio_img");  
}
    

export default function Portfolio() {
  return (
    <Container>
      <Row>
        <Col size="md-4">
            <Card  >     
              <img id = "id0" className="portfolio_img" src={Projects[0].image} onMouseEnter={handleHover} onMouseLeave={handleLeave}/> 
            </Card>              
            <Card  >                            
              <img id = "id1" className="portfolio_img" src={Projects[1].image} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>       
            </Card>              
            <Card  >                            
              <img id = "id2" className="portfolio_img" src={Projects[2].image} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>       
            </Card>              
        </Col>
        <Col size="md-4">
            <Card  >                            
              <img id = "id3" className="portfolio_img" src={Projects[3].image} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>              
            </Card>              
            <Card  >                            
              <img id = "id4"  className="portfolio_img" src={Projects[4].image} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>              
            </Card>              
            <Card  >                            
              <img id = "id5" className="portfolio_img" src={Projects[5].image} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>              
            </Card>              
        </Col>
        <Col size="md-4">
            <Card  >                            
              <img id = "id6" className="portfolio_img" src={Projects[6].image} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>              
            </Card>              
            <Card  >                            
              <img id = "id7" className="portfolio_img" src={Projects[7].image} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>              
            </Card>              
            <Card  >                            
              <img id = "id8" className="portfolio_img" src={Projects[8].image} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>              
            </Card>              

        </Col>
      </Row>
    </Container>
  );
}
