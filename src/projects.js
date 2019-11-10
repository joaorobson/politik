import React from "react";
import { Grid, Image, List } from "semantic-ui-react";
import src from "./projects_images/poverty_headcount.png";
import "./projects.css";

const Projects = () => (
  <Grid style={{ margin: "0%" }} relaxed>
    <Grid.Row centered>
      <List link relaxed horizontal>
        <List.Item
          style={{
            fontFamily: "Lato",
            letterSpacing: "5px",
            fontWeight: "300",
            fontSize: "16px"
          }}
          as="a"
          href="/"
        >
          Home
        </List.Item>
        <List.Item
          style={{
            fontFamily: "Lato",
            letterSpacing: "5px",
            fontWeight: "300",
            fontSize: "16px"
          }}
          as="a"
          href="/bio"
        >
          Bio
        </List.Item>
        <List.Item
          style={{
            fontFamily: "Lato",
            letterSpacing: "5px",
            fontWeight: "300",
            fontSize: "16px"
          }}
          as="a"
          href="/about"
        >
          About
        </List.Item>
      </List>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <a href="/project_1">
          <div className="container">
            <Image style={{ boxShadow: "none" }} src={src} />
            <div className="overlay">
              <div className="text">Poverty headcount ratio in the world</div>
            </div>
          </div>
        </a>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Projects;
