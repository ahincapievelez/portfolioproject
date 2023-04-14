import { Component } from "react";
import Pdf from "../documents/Andres-Hincapie-Resume.pdf"

function Home() {
  
    return (
      <div className="container home-box">
  
          <div className="row">
              <div className="col top-sect">
                  <div>
                      <img className="logo" src="picture.png" alt=""/>
                  </div>
                  <div>
                      <h1 className="top-sect-title">WELCOME!</h1>
                      <h3 className="top-sect-subtitle">I'm Andres Hincapie</h3>
                      <p className="top-sect-paragh">IT Consultant & Web Developer</p>
                  </div>
              </div>
          </div>
  
          <div className="row">
              <div className="col middle-sect">
                  <div>
                      <p className="middle-sect-paragh"><span>IT</span> manager with over ten years of experience in the sector. 
                          Experience working on projects that require solutions for all kinds of tasks, such as implementing technical
                          and computer systems from scratch. Design and implement network architecture to manage networks effectively, and efficiently. 
                          <span>Web developer</span> with knowledge in HTML, CSS, JavaScript, NodeJS, React and databases. 
                      </p>
                      <a className="pdf" href = {Pdf}>Download Resume</a>
                  </div>
              </div>
          </div>
  
          <div className="row">
              <div className="col middle-sect">
                  <h1 className="middle-sect-title">SKILLS</h1>
                  <div className="imgs-box">
                      <img className="html" src="html.png" alt=""/>
                      <img className="css" src="css.png" alt=""/>
                      <img className="js" src="js.png" alt=""/>
                      <img className="nodejs" src="nodejs.png" alt=""/>
                      <img className="react" src="react.png" alt=""/>
                      <img className="mongodb" src="mongodb.png" alt=""/>
                      <img className="git" src="git.png" alt=""/>
                      <img className="bootstrap" src="bootstrap.png" alt=""/>
                      <img className="github" src="github.png" alt=""/>
                      <img className="adobexd" src="adobexd.png" alt=""/>
                      <img className="microsoft" src="microsoft.png" alt=""/>
                      <img className="zappier" src="zappier.png" alt=""/>
                  </div>
              </div>
          </div>
  
          <div className="row">
              <div className="col bottom-sect">
                  <h1 className="middle-sect-title">RECENT PROJECTS</h1>
  
                  <div className="cards-box">
                      <div class="card" style={{width: '20rem'}}>
                          <img src="spaceInvaders.png" class="card-img-top" alt="..."/>
                          <div class="card-body">
                              <h5 class="card-title">Space Invaders Game</h5>
                              <p class="card-text">This game has the same theme as Hangman. What makes it different from Hangman is that Space Invaders 
                                  launches a rocket every time a letter is not guessed. The game ends when the rocket hits the planet Earth.
                              </p>
                              <a href="https://ahincapievelez.github.io/Hangman_Project/" class="btn btn-primary">See Project</a>
                          </div>
                      </div>
  
                      <div class="card" style={{width: '20rem'}}>
                          <img src="bospost.png" class="card-img-top" alt="..."/>
                          <div class="card-body">
                              <h5 class="card-title">Bos Post News</h5>
                              <p class="card-text">Bos Post news is a news web app mainly about the city of Boston and the most important news in the United States. 
                                  This project makes requests to a news API to show the most recent news in sports, culture, etc.
                              </p>
                              <a href="https://bostonianpost.netlify.app/" class="btn btn-primary">See Project</a>
                          </div>
                      </div>
  
                      <div class="card" style={{width: '20rem'}}>
                          <img src="bospostDashboard.png" class="card-img-top" alt="..."/>
                          <div class="card-body">
                              <h5 class="card-title">Dashboard</h5>
                              <p class="card-text">This is web app that you can manage contacts or customers. Save the main information of your customers and update it.
                                  Also, you can keep track of which projects have been completed and which are in progress.
                              </p>
                              <a href="https://bospost-frontend.onrender.com/login" class="btn btn-primary">See Project</a>
                          </div>
                      </div>
  
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Home;