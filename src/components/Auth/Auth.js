import React,{Component} from 'react'
import AuthContent from './AuthContext'
import axios from 'axios'

class Auth extends React.Component{
  constructor(props){
      super(props)
      this.state ={
        user: null,
        loading:true
      }

  }

  componentWillMount(){

    axios.get('/user/Auth').then((res) =>{
      this.setState({
        user: res.data,
        loading:false
      })
    })
  }

  render(){
    const {user} = this.state
    const {children} = this.props
    return(
      <AuthContent.Provider value={this.state}>
      {children}
    </AuthContent.Provider>
    )
  }


}
export default Auth;