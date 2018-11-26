import React from 'react'
import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import independece from './athens.jpg'


const About = () => (
  <div style={{overflow:'hidden'}}>
  <Image src={independece} style={{height:'70vh'}}/>
    <Segment vertical style={{ padding:'3em 0em', height:'30vh'}}>
      <Container>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header style={{fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'700', fontSize:'20px', color:'#808080'}}as='h1'>
                About 
              </Header>
              <p style={{textAlign:'justify'}}>
                <font style={{fontFamily : 'Lato', letterSpacing:'3px',fontWeight:'300', fontSize:'14px', color:'#808080'}}>
                  Politik means politics in Danish, German and Swedish.
                </font>
              </p> 
              <p style={{textAlign:'justify'}}>
                <font style={{fontFamily : 'Lato', letterSpacing:'3px',fontWeight:'300', fontSize:'14px', color:'#808080'}}> 
                  Politik also gives the name of the opening track of "A Rush of Blood to the Head", one of the best, if not the best, album by english band Coldplay.
                </font> 
             </p>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header style={{fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'700', fontSize:'20px', color:'#808080'}}as='h1'>
                Purpose 
              </Header>
              <p style={{textAlign:'justify'}}>
                <font style={{fontFamily : 'Lato', letterSpacing:'3px',fontWeight:'300', fontSize:'14px', color:'#808080'}}>
                  Politik is about data. Data analysis and data visualization.
                </font>
              </p> 
              <p style={{textAlign:'justify'}}>
                <font style={{fontFamily : 'Lato', letterSpacing:'3px',fontWeight:'300', fontSize:'14px', color:'#808080'}}>
                  The goal is to provide insights about data that governments and political institutions produce 
                  to help people create their own insights. 
                  
                </font>
              </p> 
            </Grid.Column>

            <Grid.Column width={2}>
  <div style={{height:'100%',paddingLeft:'5%',borderLeft:'thin solid #d9d9d9'}}> 
  <List link relaxed style={{paddingTop:'20%'}}>
                <List.Item 
                  style={{fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'300', fontSize:'20px'}} 
                  as='a'
                  href='/'
                >
                  Home
                </List.Item>
                <List.Item 
                  style={{fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'300', fontSize:'20px'}} 
                  as='a'
                  href='/'
                >
                  Projects 
                </List.Item>
                <List.Item 
                  style={{fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'300', fontSize:'20px'}} 
                  as='a'
                  href='/'
                >
                  Posts 
                </List.Item>
              </List>
</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)
export default About 

