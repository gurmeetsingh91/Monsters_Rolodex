import { Component, useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import './components/card-list/card-list.component'
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {
  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters,setFilterMonsters] = useState(monsters);
 

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users) => setMonsters(users));

},[]);

  
useEffect(()=>{
  const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
    });

  setFilterMonsters(newFilteredMonsters);
},[monsters,searchField]);

const onSearchChange = (event) => {
  const searchFieldString = event.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString); 
}


return(
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex Finalgit</h1>
    
    <SearchBox
     onChangeHandler={onSearchChange}
     placeholder='search monsters' 
     className='monsters-search-box'/>
    
    <Cardlist
     monsters={filteredMonsters}/>
  </div>
  )
};

// class App extends Component{
//   constructor(){
//     super();

//     this.state = {
//      monsters:[

//     ],
//     searchField:''

//     }
//     console.log('Constructor');
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((Response)=> Response.json())
//     .then((users) => this.setState(()=>{
//       return {monsters: users}
//     },()=>{
//       console.log(this.state);
//     })) 

//   console.log('component did mount');
//   }

// onSearchChange = (event)=>{
//   const searchField = event.target.value.toLocaleLowerCase();
  
//    this.setState(()=>{
//      return {searchField};
     
//    });
//  }


//   render() {
//     console.log('render');
//     const {monsters, searchField}=this.state;
//     const {onSearchChange}=this;
//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//      });
     
//       return (
       
//       );

      
    
//   }
    
// }



export default App;
