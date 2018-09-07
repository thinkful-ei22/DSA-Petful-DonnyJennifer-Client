import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import Dashboard from './components/Dashboard';
import registerServiceWorker from './registerServiceWorker';

let cats = [{
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2018%2F02%2Ftwo-tone-cat.jpg%3Fw%3D2000&w=700&q=85', 
    imageDescription: 'amazing split color face cat with a lil beard',
    name: 'Gemini',
    sex: 'Female',
    age: 1,
    breed: 'Chimera',
    story: 'Owner was scared'
  }
  ];
  
  let dogs =[{
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    imageDescription: 'A sad puppy',
    name: 'Nugget',
    sex: 'Male',
    age: 0,
    breed: 'baby',
    story: 'his mom died'
  }
  ];

ReactDOM.render(
<Provider store={store}>
<Dashboard catToAdopt={cats[0]} dogToAdopt={dogs[0]}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
