import React from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  List,
  Image,
} from 'semantic-ui-react'
import brasilia from './brasilia-min.jpg'
import 'semantic-ui-css/semantic.min.css'
import './css/caption.css'


const FixedMenuLayout = () => (
  <Grid>
    <Grid.Row verticalAlign='middle'>
      <Grid.Column width={4}>
   <Header style={{paddingLeft:'10%',fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'300', fontSize:'28px', color:'#b3b3b3'}}as='h1'as='h2'>
    <Header.Content>
      Politik
      <Header.Subheader style={{fontSize: '14px'}}>Data Science applied to politics</Header.Subheader>
    </Header.Content>
  </Header>
    <List link relaxed style={{paddingTop:'30%'}}>
                <List.Item
                  style={{paddingLeft:'10%', fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'300', fontSize:'16px'}}
                  as='a'
                  href='/'
                >
                  Projects 
                </List.Item>
                <List.Item
                  style={{paddingLeft:'10%', fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'300', fontSize:'16px'}}
                  as='a'
                  href='/'
                >
                  Bio 
                </List.Item>
                <List.Item
                  style={{paddingLeft:'10%', fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'300', fontSize:'16px'}}
                  as='a'
                  href='/about'
                >
                  About 
                </List.Item>
              </List>

      </Grid.Column>
      <Grid.Column className="container" textAlign='center' verticalAlign='middle' width={12}>
        <Image src={brasilia} verticalAlign='middle'  style={{ width:'90%', height:'90%',maxHeight:'100%', paddingTop:'10%'}} fluid />
    <div class="overlay">
    < h1 style={{color: '#808080'}}>Hello World</h1>
  </div>
      </Grid.Column>
    </Grid.Row>
  

  </Grid>
)

export default FixedMenuLayout

