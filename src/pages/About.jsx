import '../assets/About.css';

export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <img src="../../images/kyosook.png" className = "about_img"/>
      <p></p>
      <p>
        Embedded/Web software engineer with 10+ years of experience in various industries.  Enthusiastic in learning, passionate about new technologies, and familiar with complex software development cycles from the very low software layer, middleware, up to the front-end/back-end web application.
      </p>
      <br></br>
      <br></br>            
      <div className="about_row_container">
        <a href="https://github.com/alla0810"><img src="../../images/github.png" className="footer_img" /></a>

        <a href="https://www.linkedin.com/in/kyosook-shin/"><img src="../../images/linkedin.png" className="footer_img" /></a>
        <a href="https://gist.github.com/alla0810"><img src="../../images/gist.png" className="footer_img" /></a>
      </div>
    </div>
  );
}
