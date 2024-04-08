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
    constructor(name, description, status, githubLink, active, activeLink, screenshotLink) {
      this.name = name;
      this.description = description;
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
      "in-development",
      "github.com",
      "true",
      "",
      "")
  
  ]



app.get("/", (req, res)=> {
    try{
        res.render( "index", {projects_data: project_data} );
    }catch{
        res.send("404 ERROR");
    }
    
})

app.listen(port, () =>
console.log(`website with ${port} is up and running`));

