import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDD3Wxmk_4W5I_p34uvhmfHkBw3epOzesg';



class App extends Component {
  constructor(props){
  	super(props);

  	this.state = {videos: []};

  	YTSearch({key: API_KEY, term: 'akshay kumar'}, (videos) => {
       this.setState({ videos});
    });

  }

     render(){
       return (
      <div>
        <SearchBar/>
        <VideoList videos = { this.state.videos }/>
      </div>
      );

    }
}

/*// When to use class based component and when to use functional based component

//Start with function based compoment and when you need to add more functionalities, add class based components

//youtube API search is a package which we will be using to search our videos

//1st we can't insert it at the App class,we need to create an instance of it before rendering and we need to mention where we 

//=>still a function  .... declaring a function using EX6 syntax-->*/

ReactDOM.render(<App/>, document.querySelector('.container'));


