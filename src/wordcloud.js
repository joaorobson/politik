import React from "react";
import WordCloud from "react-d3-cloud";
import {Header} from 'semantic-ui-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/arrows.css";

const CANDIDATES = ['Amoêdo', 'Alckmin', 'Bolsonaro', 'Ciro', 'Haddad']



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
    const fontSizeMapper = (text, idx) => text.l;
        var settings = {
      dots: true,
      speed: 500,
          autoplaySpeed:7000,
      slidesToShow: 1,
          arrows:true,
          autoplay:true,
          className: "slides",

      slidesToScroll: 1
    };
    const clouds = this.state.items.map((words, id) => (
        <div style={{textAlign:'center'}}><Header textAlign='center' style={{fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'700', fontSize:'40px', color:'#808080'}} as='h1'>
      {CANDIDATES[id]}
      </Header>

       <WordCloud 
        width={500} 
        height={500} 
        padding={3} 
        data={words} 
        fontSizeMapper={fontSizeMapper} 
        style={{margin: '0 auto', position:'relative'}}
        /></div>
    ))
    console.log(this.state.items)
    console.log(clouds)
    return(
      <Slider {...settings}>
        <div>
      {clouds[0]}
        </div>
        <div>
      {clouds[1]}
        </div>
        <div>
      {clouds[2]}
        </div>
        <div>
      {clouds[3]}
        </div>
        <div>
      {clouds[4]}
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
