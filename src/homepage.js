import React from 'react'
import {
  Button,
  Container,
  Header,
  Image,
} from 'semantic-ui-react'
import brasilia from './brasilia-min.jpg'
import 'semantic-ui-css/semantic.min.css'


const FixedMenuLayout = () => (
  <div>
  <Container text textAlign='center' style={{paddingTop:'20px',height:'20vh'}}>
    <Header style={{fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'300', fontSize:'40px', color:'#808080'}}as='h1'>Politik</Header>
    <Header style={{fontFamily : 'Lato', letterSpacing:'5px',fontWeight:'300', fontSize:'16px', color:'#808080'}}as='h2'>Data Science applied to politics</Header>
  </Container>
    <div>
    <Button.Group  fluid style={{height:'5vh'}}>
      <Button as='a' href='/about' style={{borderRadius:'0%'}}>About</Button>
      <Button>Projects</Button>
      <Button style={{borderRadius:'0%'}}>Posts</Button>
    </Button.Group>
  </div>
      <Image src={brasilia}  style={{height:'75vh',maxHeight:'100%',paddingTop:'0px'}} fluid />

  </div>
)

export default FixedMenuLayout

