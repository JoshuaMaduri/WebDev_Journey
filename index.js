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
    constructor(name, description, technology, status, githubLink, activeLink, screenshot) {
      this.name = name;
      this.description = description;
      this.technology = technology;
      this.status = status;
      this.githubLink = githubLink;
      this.activeLink = activeLink;
      this.screenshot = screenshot;
    }
  }
  
  const project_data = [
      new projects(
      "NHL Stat Center", 
      "This is my first attempt at a full stack application. Using the NHL API and the News API I'm able to pull data directly from official sources withouth having to use a database. The easy to navigate user interface is built on plain css and vanilla javascript",
      ["html", "css", "js", "node", "aws"],
      "in-development",
      "https://github.com/JoshuaMaduri/nhl_stat_center",
      "true",
      "static/nhl-stat-center.jpg"),
      new projects(
        "My Blog",
        "This was my first project built with react framework. Using features like JWT Based Authorization/Authentication, CRUD system with postgresql, search feature, and an SEO optimization, utilizing AWS for high availability. This project was used to keep my users up to date on all my discoveries and projects, as well as too showcase some of the skills I have picked up. ",
        ["html", "css", "node", "aws", "js", "node", "react"],
        "in-development",
        "https://github.com/JoshuaMaduri/WebDev_Journey",
        "true",
        "static/josh-blog.jpg"
      )
  
  ]

const logoElements = {
    "html": "static/tech_icons/html-5.svg",
    "css": "static/tech_icons/css-3.svg",
    "js": "static/tech_icons/javascript.svg", 
    "react": "static/tech_icons/react.svg",
    "node": "static/tech_icons/nodejs-icon.svg",
    "bootstrap": "static/tech_icons/bootstrap.svg",
    "express": "static/tech_icons/express.svg",
    "typescript": "static/tech_icons/typescript-icon.svg",
    "python": "static/tech_icons/python.svg",
    "flask": "static/tech_icons/flask.svg",
    "django": "static/tech_icons/django-icon.svg",
    "fastapi": "static/tech_icons/fastapi.svg",
    "postgresql": "static/tech_icons/postgresql.svg",
    "aws": "static/tech_icons/aws.svg",
    "azure": "static/tech_icons/microsoft-azure.svg",
    "github": "static/tech_icons/github-icon.svg",
    "docker": "static/tech_icons/docker-icon.svg",
    "kubernetes": "static/tech_icons/kubernetes.svg",
    "elasticsearch": "static/tech_icons/elasticsearch.svg",
    "openshift": "static/tech_icons/openshift.svg",
    "redhat": "static/tech_icons/redhat.svg"
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

