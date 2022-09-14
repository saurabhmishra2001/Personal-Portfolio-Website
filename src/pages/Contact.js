import React from 'react'
import "../styles/contact.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
function Contact() {
  return (
    <>
<div className="jumbotron text-center about">
    <h1 >Hi, My Name is Saurabh Kumar Mishra</h1>
    <h4>A software developer with a passion for learning and creating!</h4> 
 <p>nckjegegj</p>
  <div className="prompt">
          <a href="/">
            <LinkedInIcon />
          </a>
          <a href="/">
            <EmailIcon />
          </a>
          <a href="https://github.com/saurabhmishra2001">
            <GithubIcon />
          </a>
        </div>
        </div>
      <div className="container">
  <div className="row">
    <div className="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-4">
      <h3>Column 3</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
  </div>
</div>
</>

  )
}

export default Contact