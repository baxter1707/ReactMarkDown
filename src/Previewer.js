import React, {Component} from 'react';
import marked from 'marked';

export default class Previewer extends Component {

  constructor(props){
    super(props)
    this.state = {
    text: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){   //what does event do???
    console.log(event.target.value)
    this.setState({text: event.target.value})
  }



  render(){
    return(
      <div>
        <textarea
        value={this.state.text}
        onChange={this.handleChange}
         />
        <div
        dangerouslySetInnerHTML = {{__html:marked(this.state.text)}}
        >
        </div>
      </div>
    );
  }
}
