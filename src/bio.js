import React from 'react';
import me from './mig.jpeg';
import {
  Image
} from "semantic-ui-react";

class Bio extends React.Component {



	render(){
		return (<Image circular size="medium" src={me} />)
	}

}

export default Bio;
