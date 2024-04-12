import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import fs from 'fs';

const app = express();
const port = 3000;


app.set('view engine', 'ejs')
app.use(express.static('public')); // Serve static files
app.use(bodyParser.urlencoded( { extended: true } )); // Parse form data



//Project Data

class projects {
    constructor(name, description, technology, status, githubLink, active, activeLink, screenshotLink) {
      this.name = name;
      this.description = description;
      this.technology = technology;
      this.status = status;
      this.githubLink = githubLink;
      this.active = active;
      this.activeLink = activeLink;
      this.screenshot = screenshotLink;
    }
  }
  
  const project_data = [
      new projects(
      "NHL Stat Center", 
      "This is my first attempt at a full stack application. I use serverless functions to supply hockey information from all organizations to an api that organizes and puts together the data. The easy to navigate user interface is built on plain css and vanilla javascript",
      ["html", "css", "js", "node", "aws"],
      "in-development",
      "github.com",
      "true",
      "",
      ""),
      new projects(
        "My Blog",
        "This was built with react framework to keep my users up to date on all my discoveries and projects",
        ["html", "css", "node", "aws", "python"],
        "in-development",
        "github.com",
        "true",
        "",
        ""
      )
  
  ]

const logoElements = {
    "html": "<img src='static/tech_icons/html-5.svg' id='project-image'></img>",
    "css": "<img src='static/tech_icons/css-3.svg' id='project-image'></img>",
    "js": "<img src='static/tech_icons/javascript.svg' id='project-image'></img>", 
    "react": "<img src='static/tech_icons/react.svg' id='project-image'></img>",
    "node": "<img src='static/tech_icons/nodejs-icon.svg' id='project-image'></img>",
    "bootstrap": "<img src='static/tech_icons/bootstrap.svg' id='project-image'></img>",
    "express": "<img src='static/tech_icons/express.svg' id='project-image'></img>",
    "typescript": "<img src='static/tech_icons/typescript-icon.svg' id='project-image'></img>",
    "python": "<img src='static/tech_icons/python.svg' id='project-image'></img>",
    "flask": "<img src='static/tech_icons/flask.svg' id='project-image'></img>",
    "django": "<img src='static/tech_icons/django-icon.svg' id='project-image'></img>",
    "fastapi": "<img src='static/tech_icons/fastapi.svg' id='project-image'></img>",
    "postgresql": "<img src='static/tech_icons/postgresql.svg' id='project-image'></img>",
    "aws": "<img src='static/tech_icons/aws.svg' id='project-image'></img>",
    "azure": "<img src='static/tech_icons/microsoft-azure.svg' id='project-image'></img>",
    "github": "<img src='static/tech_icons/github-icon.svg' id='project-image'></img>",
    "docker": "<img src='static/tech_icons/docker-icon.svg' id='project-image'></img>",
    "kubernetes": "<img src='static/tech_icons/kubernetes.svg' id='project-image'></img>",
    "elasticsearch": "<img src='static/tech_icons/elasticsearch.svg' id='project-image'></img>",
    "openshift": "<img src='static/tech_icons/openshift.svg' id='project-image'></img>",
    "redhat": "<img src='static/tech_icons/redhat.svg' id='project-image'></img>"
}

app.get("/", (req, res)=> {
    try{
        res.render( "index", {projects_data: project_data, logo_data: logoElements} );
    }catch{
        res.send("404 ERROR");
    }
    
})

app.listen(port, () =>
console.log(`website with ${port} is up and running`));

