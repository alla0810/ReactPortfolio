import Container from './UI/Container';
import Row from './UI/Row';
import Col from './UI/Col';
import Card from './UI/Card';
import ProjectList from './ProjectList';

const Projects = [
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


export default function Portfolio() {
  return (
    <Container>
      <Row>
        <Col size="md-6">
          <Card>
            <ProjectList projects={Projects}/>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
