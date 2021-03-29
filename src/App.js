import React, {useEffect, useState} from "react"
import styled from 'styled-components'
import './App.css';
import List from "./List";

function App() {
  
  const[peopleList, setPeopleList] = useState([]);
  const[planetList, setPlanetList] = useState([]);
  const[starshipList, setStarshipList] = useState([]);
  const[searchWord, setSearchWord] = useState('');
  useEffect  (()=>{
    //any data needed at loading of page cold be called here by method
  }, [])

  const loadPeople = () => {
    fetch("http://localhost:8001/rest/?action=Apis&type=people")    //Change the URL localhost value to your own for API to run
    .then(response => {
      response.text()
      .then(_data => {
        var data = JSON.parse(_data);
        var temp =[]
        for(var j = 0; j<data.length; j++){
          for(var i = 0; i<data[j]['results'].length; i++){
            temp.push(data[j]['results'][i]['name']); 
          }
        }
        setPeopleList(temp);
      });
    })
  }

  const loadPlanets = () => {
    fetch("http://localhost:8001/rest/?action=Apis&type=planets")   //Change the URL localhost value to your own for API to run
    .then(response => {
      response.text()
      .then(_data => {
        var data = JSON.parse(_data);
        var temp= []
        for(var j = 0; j<data.length; j++){
          for(var i = 0; i<data[j]['results'].length; i++){
            temp.push(data[j]['results'][i]['name']); 
          }
        }
        setPlanetList(temp);
      });
    })
  }

  const loadStarships = () => {
    fetch("http://localhost:8001/rest/?action=Apis&type=starships")   //Change the URL localhost value to your own for API to run
    .then(response => {
      response.text()
      .then(_data => {
        var data = JSON.parse(_data);
        var temp =[]
        for(var j = 0; j<data.length; j++){
          for(var i = 0; i<data[j]['results'].length; i++){
            temp.push(data[j]['results'][i]['name']); 
          }
        }
        setStarshipList(temp);
      });
    })
  }

  const Button = styled.button`
    background-color: #3f51b5;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline:0;
    box-shadow: 0px 2px 2px lightgray;
    margin: 20px;
    cursor: pointer;
    transition : ease background-color 250ms;
    &:hover{
      background-color: #283593;
    }
  `

  function viewPeople(){
    loadPeople()
    //alert(peopleList)
  }
  function viewPlanets(){
    loadPlanets()
    //alert(planetList)
  }
  function viewStarships(){
    loadStarships()
    // alert(starshipList)
  }

  return (
    <div>
      <div>
        <Button onClick={viewPeople}> Display List of People </Button>
        <Button onClick={viewPlanets}> Display List of Planets </Button>
        <Button onClick={viewStarships}> Display List of Starships </Button>
        <input className="searchbox" type="text" placeholder="Search People Here.." onChange={event => {setSearchWord(event.target.value)}}/>    
        {
          peopleList.filter((val)=>{        //searches through dynamically
            if(searchWord == ""){
              return ""
            }
            else if(val.toLowerCase().includes(searchWord.toLowerCase())){
              return val
            }
          }).map((name)=>{
            return <div className="name"><p>{name}</p></div>
          })
        }
        
      </div>
      <div className="row">
          <div id="people">
          <p><b>List of People</b></p><List list={peopleList}></List>        
          </div>
        <div id="planet">
        <p><b>List of Planets</b></p><List list={planetList}></List>
        </div>
        <div id="starship">
        <p><b>List of Starships</b></p><List list={starshipList}></List>
        </div> 
      </div> 
    </div>
  );
}
export default App;
