import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDD3Wxmk_4W5I_p34uvhmfHkBw3epOzesg';


const App = () => {
	return (
      <div>
        <SearchBar/>
      </div>

	);
}

/*// When to use class based component and when to use functional based component

//Start with function based compoment and when you need to add more functionalities, add class based components

//youtube API search is a package which we will be using to search our videos

//1st we can't insert it at the App class,we need to create an instance of it before rendering and we need to mention where we 

//=>still a function  .... declaring a function using EX6 syntax-->*/

ReactDOM.render(<App/>, document.querySelector('.container'));


