import React from "react";
import {
  Dimmer,
  Loader,
  Grid,
  Header,
  Image,
  List,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import border from "./h9.jpg";
import "./css/tag.css";
import "./css/caption.css";

class About extends React.Component {
  constructor() {
    super();
    this.state = { imageIsLoaded: false, aboutIsLoaded: false };
  }
  render() {
    const { imageIsLoaded, aboutIsLoaded } = this.state;
    return (
      <div className="loader">
        <Dimmer
          active={!aboutIsLoaded}
          inverted
          style={{backgroundColor: '#f2f2f2'}}
        >
          <Loader  style={{borderColor:'black'}} inverted size="massive" />
        </Dimmer>
        <div style={{ overflow: "hidden" }}>
          <div className="tag" textAlign="center">
            <Grid
              textAlign="center"
              stackable
              container
              style={{ width: "100px" }}
            >
              <Grid.Row
                textAlign="center"
                verticalAlign="middle"
                style={{ width: "200px" }}
              >
                <Grid.Column width={16}>
                  <Header
                    style={{
                      fontFamily: "Lato",
                      letterSpacing: "5px",
                      fontWeight: "500",
                      fontSize: "20px",
                      color: "#808080",
                      paddingTop: "5%"
                    }}
                    as="h1"
                  >
                    About
                  </Header>
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
                      Politik is about data. Data analysis and data
                      visualization.
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
                      The goal is to provide insights about data that
                      governments and institutions around the world produce to
                      help people create their own insights.
                    </font>
                  </p>
                  <Header
                    style={{
                      fontFamily: "Lato",
                      letterSpacing: "5px",
                      fontWeight: "500",
                      fontSize: "20px",
                      color: "#808080"
                    }}
                    as="h1"
                  >
                    Why Politik?
                  </Header>
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
                      Politik means politics in Danish, German and Swedish.
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
                      The name is also inspired by the name of an awesome <a href="https://genius.com/Coldplay-politik-lyrics">song</a>.
                    </font>
                  </p>
                  <hr style={{ backgroundColor: '#d9d9d9', height: '1px', border: 'none', width: "30%" }} />

                  <List link relaxed style={{ paddingTop: "1%" }}>
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
                      href="/bio"
                    >
                      Bio
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div className="container">
            <Image
              hidden={!imageIsLoaded}
              onLoad={() => {
                this.setState({ imageIsLoaded: true }, () => {
                  setTimeout(() => {
                    this.setState({ aboutIsLoaded: true })}, 1000)
                  });
                }
              }
              src={border}
              style={{
                position: "absolute",
                height: "90vh",
                width: "80%",
                left: "10%",
                top: "5%"
              }}
            />
            <div className="aboutoverlay">
              <Header
                as="h4"
                textAlign="left"
                style={{ fontWeight: 200, color: "#4d4d4d" }}
              >
                Holocaust-Mahnmal (Holocaust Memorial), Berlin, Germany. By&nbsp;
                <a href="https://www.flickr.com/photos/wolfgangstaudt/">
                  Wolfgang Staudt&nbsp;
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
        </div>
      </div>
    );
  }
}
export default About;
