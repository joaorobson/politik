import React from "react";
import WordCloud from "react-d3-cloud";
import {Grid} from 'semantic-ui-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/arrows.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(style)
  return (
    <div
      className={className}

      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

class MyWordCloud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://0.0.0.0:5000/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  } 
  mountClouds() {
    const fontSizeMapper = text => Math.log2(text.value) * 15;
        var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 2,
          arrows:true,
          className: "slides",

      slidesToScroll: 1
    };
    const clouds = this.state.items.map(words => (
      <div><h1>amoedo</h1>
       <WordCloud 
        width={400} 
        height={400} 
        padding={2} 
        data={words} 
        fontSizeMapper={fontSizeMapper} 
        style={{margin: '0 auto', position:'relative'}}
        /></div>
    ))
    return(
      <Slider {...settings}>
        <div>
      {clouds[0]}
        </div>
        <div>
      {clouds[1]}
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    )
  }
  /*
      <Grid >
        <Grid.Row  columns={2}>
      {clouds.slice(0,2) }
        </Grid.Row>
        <Grid.Row columns={2}>
      { clouds.slice(2,4)} 
        </Grid.Row>
      </Grid>
      */
  render() {
    console.log(this.state.items)
    if(this.state.isLoaded) {
    return (
      <div style={{paddingLeft:'20%', paddingRight:'20%'}}>{this.mountClouds()}</div>
    )
    }else{return (<div></div>)}
  }
}
export default MyWordCloud;
