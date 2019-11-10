import React from "react";
import {
  Grid,
  Header,
  List,
  Image
} from "semantic-ui-react";
import brasilia from "./brasilia-min.jpg";
import "semantic-ui-css/semantic.min.css";
import "./css/caption.css";

const FixedMenuLayout = () => (
  <Grid>
    <Grid.Row verticalAlign="middle">
      <Grid.Column width={4}>
        <Header
          style={{
            paddingLeft: "10%",
            fontFamily: "Lato",
            letterSpacing: "5px",
            fontWeight: "300",
            fontSize: "28px",
            color: "#b3b3b3"
          }}
          as="h1"
        >
          <Header.Content>
            Politik
            <Header.Subheader style={{ fontSize: "14px" }}>
              Data Science applied to open data.
            </Header.Subheader>
          </Header.Content>
        </Header>
        <List link relaxed style={{ paddingTop: "30%" }}>
          <List.Item
            style={{
              paddingLeft: "10%",
              fontFamily: "Lato",
              letterSpacing: "5px",
              fontWeight: "300",
              fontSize: "16px"
            }}
            as="a"
            href="/projects"
          >
            Projects
          </List.Item>
          <List.Item
            style={{
              paddingLeft: "10%",
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
              paddingLeft: "10%",
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
      </Grid.Column>
      <Grid.Column
        className="container"
        textAlign="center"
        verticalAlign="middle"
        width={12}
      >
        <Image
          src={brasilia}
          verticalAlign="middle"
          style={{
            width: "90%",
            height: "90%",
            maxHeight: "100%",
            paddingTop: "10%"
          }}
          fluid
        />
        <div class="overlay">
          <Header
            as="h4"
            textAlign="left"
            style={{ fontWeight: 200, color: "#4d4d4d" }}
          >
            Congresso Nacional (National Congress), Brasília, Brazil. By&nbsp;
            <a href="https://www.flickr.com/photos/anavolpe">Ana Volpe&nbsp;</a>
            used under&nbsp;
            <a
              rel="nofollow"
              href="https://creativecommons.org/licenses/by/2.0/"
            >
              CC BY 2.0
            </a>
          </Header>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default FixedMenuLayout;
