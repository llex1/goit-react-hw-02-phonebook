import React, {Fragment, Component} from 'react';

class Filter extends Component {
  
  state = {
    inputValue: ''
  }
  enableFilter = (event) => {
      this.setState({
        inputValue: event.target.value
      });
      this.props.filterContact(event.target.value);
  }
  
  render() {
    return (
      <Fragment>
        <label htmlFor="findContact">Find contacts by name</label>
        <input  type="text" 
                name="findContact" 
                id="findContact" 
                value={this.state.inputValue} 
                onChange={this.enableFilter}/>
      </Fragment>
    )
  }
}


export default Filter