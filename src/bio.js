import React from "react";
import border from "./border.jpg";
import { Header, Image, List } from "semantic-ui-react";
import "./css/caption.css";


class Bio extends React.Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
				<div className="container">
        <Image
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "80%",
            height: "90%",
            marginTop: "3%"
          }}
          src={border}
        />
            <div className="aboutoverlay">
              <Header
                as="h4"
                textAlign="left"
                style={{ fontWeight: 200, color: "#4d4d4d" }}
              >
                Ocean Border Fence, Border Field State Park/Imperial Beach, San Diego, California. By&nbsp;
                <a href="https://www.flickr.com/photos/diversey/">
                  Tony Webster&nbsp;
                </a>
                used under&nbsp;
                <a
                  rel="nofollow"
                  href="https://creativecommons.org/licenses/by/2.0/"
                >
                  CC BY 2.0
                </a>
              </Header>
            </div>
            </div>
        <p style={{ textAlign: "center", marginTop: "2%" }}>
          <font
            style={{
              fontFamily: "Lato",
              letterSpacing: "3px",
              fontWeight: "300",
              fontSize: "14px",
              color: "#808080"
            }}
          >
            Hello, visitor! My name is João Robson.
          </font>
        </p>
        <p
          style={{
            textAlign: "center",
            width: "80%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <font
            style={{
              fontFamily: "Lato",
              letterSpacing: "3px",
              fontWeight: "300",
              fontSize: "14px",
              color: "#808080"
            }}
          >
            I'm a brazilian Software Engineering student interested in
            Artificial Intelligence, Data Visualization and Neuroscience.
          </font>
        </p>
        <p style={{ textAlign: "center" }}>
          <font
            style={{
              fontFamily: "Lato",
              letterSpacing: "3px",
              fontWeight: "300",
              fontSize: "14px",
              color: "#808080"
            }}
          >
            You can contact me on{" "}
            <a href="https://www.linkedin.com/in/joaorobson/">LinkedIn</a>.
            <br />
            You can read my articles at{" "}
            <a href="https://medium.com/@joaorobsonmartins">Medium</a>.<br />
            You can take a look at my code at{" "}
            <a href="https://github.com/joaorobson">GitHub</a>.
          </font>
        </p>
        <hr
          style={{
            backgroundColor: "#d9d9d9",
            height: "1px",
            border: "none",
            width: "5%"
          }}
        />
        <List
          horizontal
          link
          relaxed
          style={{ display: "block", textAlign: "center", paddingTop: "1%" }}
        >
          <List.Item
            style={{
              fontFamily: "Lato",
              letterSpacing: "5px",
              fontWeight: "300",
              fontSize: "20px"
            }}
            as="a"
            href="/"
          >
            About
          </List.Item>
          <List.Item
            style={{
              fontFamily: "Lato",
              letterSpacing: "5px",
              fontWeight: "300",
              fontSize: "20px"
            }}
            as="a"
            href="/about"
          >
            Projects
          </List.Item>
          <List.Item
            style={{
              fontFamily: "Lato",
              letterSpacing: "5px",
              fontWeight: "300",
              fontSize: "20px"
            }}
            as="a"
            href="/"
          >
            Home
          </List.Item>
        </List>

      </div>
    );
  }
}

export default Bio;
