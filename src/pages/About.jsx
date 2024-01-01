import Container from './UI/Container';
import Row from './UI/Row';
import Col from './UI/Col';


import '../css/About.css';

export default function About() {
  return (
    <Container>
      <Row>
        <h1>About me</h1>     
        <br></br> 
        <br></br>         
      </Row>
      <Row>        
        <Col size="md-3">
          <img src="/assets/images/kyosook.png" className = "about_img"/>

          <div>
            <a href="mailto:kyosook.shin@gmail.com"><img src="/assets/images/email.png" className="footer_img"/></a>            
            <a href="https://github.com/alla0810"><img src="/assets/images/github.png" className="footer_img" /></a>
            <a href="https://www.linkedin.com/in/kyosook-shin/"><img src="/assets/images/linkedin.png" className="footer_img" /></a>
          </div>
        </Col>        
        <Col size="md-9">
            <div className="margin-20">          
              <h2>KyoSook Shin</h2>                      
              <h5>Embedded/Web Software Engineer</h5>          
            </div>

            <div className="about-me">
              Embedded/Web software engineer with 10+ years of experience in various industries.  Enthusiastic in learning, passionate about new technologies, and familiar with complex software development cycles from the very low software layer, middleware, up to the front-end/back-end web applications.
            </div>
            <div className="margin-20">          
              <p>Embedded Software Engineer / Full-stack Developer / Front-End Develper / Back-End Developer</p>          
            </div>

        </Col>

      </Row>
    </Container>
  );
}
