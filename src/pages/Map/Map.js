
import { popup } from 'leaflet';
import React, {Component} from 'react';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import styled from 'styled-components';
import  PopUpTask from './components'
import * as melbData from '../../statics/melbourne.json'
import axios from 'axios';
import logo from '../../statics/icon/logo.svg'



const key = 'pk.eyJ1Ijoid20xOTk0MTIyMyIsImEiOiJja2dxa3lkNDUwdmZpMnNwZzltd210Z3YxIn0.20rNXBaBd-MCYj6TlSx23g'

const Button = styled.button `
  background : none;
  border: none;
  img {
    width:38px;
    height:50px;
  }
  `
  
const PopUpWrapper = styled.div `
  width:300px;
  height:200px;
`


const SearchBorad = styled.div `
  position: absolute;
  right: 50px;
  top: 200px;
  width: 330px;
  height:550px;

  background-color: #ffa31a;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 16px;
`
const SearchHeader = styled.div `
　text-align:center;
  width:330px;
  height: 70px;
  
  `
const SearchLogo = styled.a `
  display:inline-block;
  width: 70px;
  height: 70px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  `

const SearchInputWrapper = styled.div `
  width: 330px;
  height: 150px;
  //background-color: red;

`
const SearchInputTitile  = styled.p `
  height: 20px;
  display: block;
  text-align: center;
  font-size: 20px;
  
  `
const SearchInput = styled.input `
   
    outline: none; 
    border: none;
  
    margin-left: 40px; 

    border: 1px solid #ccc; 
    border-radius: 7px;
    padding: 7px 0px;

    width: 240px;


    &:focus{
        border-color: #66afe9;
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
    }
  `

const SearchButton = styled.button `
    margin-top: 25px;
    display: block;
    width: 100px;
    height: 40px;
    margin-left: 110px;
    display:block;
    background: black;
    color: white;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 20px;
    cursor:pointer
    
    `

  const MatchhButton = styled(SearchButton) `
    background: #0abab5;
    color: black;
    `


class Map extends Component {


  constructor(props){
    super(props)
    this.state = {
      viewport: {
        width: "100vw",
        height: "100vh",
        latitude: -37.840935,
        longitude: 144.946457,
        zoom: 10,
      },
      selectedArea:null,
      taskArray: [],
      suburb: null,
      value:1
    }


     this.handleSuburbChange = this.handleSuburbChange.bind(this);
     this.handleSuburbClick = this.handleSuburbClick.bind(this);
  }
  componentDidMount(){
    axios.get('/map/tasks').then((res) =>{
      this.state.taskArray = res.data
    })
  }


  render() {
    return (
      <>

      <ReactMapGL
        mapboxApiAccessToken={key}
        {...this.state.viewport}
        mapStyle ='mapbox://styles/wm19941223/ckgqie8wr3pmw19mvpy1tk9mg'
        onViewportChange={(viewport) => this.setState({viewport})}  
      >
        { 
        this.state.taskArray.map(data =>(
          <Marker 
          
            latitude={data.coordinates[1]}
            longitude={data.coordinates[0]}
            > 
              <Button onClick ={e =>{
                e.preventDefault();
                this.setState({selectedArea : data})
              }}
              >
              <img className='marker' src = '/map_marker.png' />
              </Button>
          </Marker>
        ))}
          {this.state.selectedArea ? (
            <Popup latitude={this.state.selectedArea.coordinates[1]} longitude={this.state.selectedArea.coordinates[0]}
            onClose = {() =>{
              this.setState({
                selectedArea: null
              })
            }}
            > 
               
                    <PopUpTask title = {this.state.selectedArea.title} avaUrl= {this.state.selectedArea.avatar} budget = {this.state.selectedArea.budget} />
              
            </Popup>
          ):null}
          <SearchBorad>
            <SearchHeader>
              <SearchLogo/>
                
            </SearchHeader>
           <SearchInputWrapper>
              <SearchInputTitile >
              Search tasks by suburbs
                </SearchInputTitile>
                <SearchInput  onChange={this.handleSuburbChange}/>
                <SearchButton onClick={this.handleSuburbClick}>
                  Search
                </SearchButton>
          </SearchInputWrapper>
          
          <SearchInputWrapper>
              <SearchInputTitile>
                Search tasks by tags
                </SearchInputTitile>
                <SearchInput/>
                <SearchButton>
                  Search
                </SearchButton>
                
          </SearchInputWrapper>

               <SearchInputWrapper>
              <SearchInputTitile>
                 still hard to find? 
                </SearchInputTitile>
                <MatchhButton>
                 Match
                </MatchhButton>
                
          </SearchInputWrapper>
               
          </SearchBorad>
          
      </ReactMapGL>
       
      </>
    );
  }


  handleSuburbChange(e){
    
    const value = e.target.value
  //  console.log(value)

    this.setState({
      suburb:value
    });
   
    
  }
  handleSuburbClick(e){
    console.log(this.state.suburb)
    e.preventDefault();
    const list = [...this.state.taskArray]
    const newList = []
    console.log(list)
    for( let index in list ){
      if (list[index].location === this.state.suburb){
       
        newList.push(list[index])
      }
    }
    console.log(newList)
    this.setState({
      taskArray: newList
    })
  }


 
}
export default Map;