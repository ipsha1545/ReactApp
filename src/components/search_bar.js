import React, { Component } from 'react';

/*const Searchbar = () => {
 return <input />;

};*/

class Searchbar extends Component{
  render(){
     return <input  onChange = {event => console.log(event)} />;
  }

}



export default Searchbar;