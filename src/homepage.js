import React from 'react'
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import brasilia from './brasilia.jpg'
import 'semantic-ui-css/semantic.min.css'


const FixedMenuLayout = () => (
  <div>
  <Container text textAlign='center' style={{paddingTop:'30px',height:'140px'}}>
    <Header style={{fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'300', fontSize:'40px', color:'#666'}}as='h1'>Politik</Header>
    <Header style={{fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'300', fontSize:'16px', color:'#666'}}as='h2'>Data Science applied to politics</Header>
  </Container>
    <div>
    <Button.Group  fluid>
      <Button style={{borderRadius:'0%',backgroundColor:'#f2f2f2'}}>Posts</Button>
      <Button>Projects</Button>
      <Button style={{borderRadius:'0%',backgroundColor:'#f2f2f2'}}>About</Button>
    </Button.Group>
  </div>
      <Image src={brasilia}  style={{paddingTop:'0px'}} fluid />

  </div>
)

export default FixedMenuLayout

