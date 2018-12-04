import React from 'react'
import { Grid } from 'semantic-ui-react'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const Projects = () => (
  <Grid columns={5} padded>
    {colors.map((color, id) => (
      <Grid.Column style={{height:100}} color={color} key={color}>
      </Grid.Column>
    ))}
  </Grid>
)

export default Projects 
