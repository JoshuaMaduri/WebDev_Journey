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
        ["html", "css", "python", "aws"],
        "in-development",
        "github.com",
        "true",
        "",
        ""
      )
  
  ]

const logoElements = {
    "html": '<i class="fa-brands fa-html5"></i>',
    "css": '<i class="fa-brands fa-css3-alt"></i>',
    "js": '<i class="fa-brands fa-js"></i>',
    "react": '<i class="fa-brands fa-react"></i>',
    "node": '<i class="fa-brands fa-node-js"></i>',
    "bootstrap": '<i class="fa-brands fa-bootstrap"></i>',
    "sass": '<i class="fa-brands fa-sass"></i>',
    "python": '<i class="fa-brands fa-python"></i>',
    "aws": '<i class="fa-brands fa-aws"></i>',
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

