import React,{Component} from 'react'
import AuthContent from './AuthContext'
import axios from 'axios'

class Auth extends React.Component{
  constructor(props){
      super(props)
      this.state ={
        user_email: null,
        user_avatar: null,
        loading:true
      }
    this.setUser = this.setUser.bind(this);

  }
  setUser(email,avatar) {
    if (!email&&!avatar) {
      localStorage.removeItem('AUTH_TOKEN');
    }

    this.setState({
      user_email: email,
      user_avatar:avatar
    });
  }


  componentWillMount(){

       if(localStorage.getItem('AUTH_TOKEN')){
        axios.post('/user/Auth',{"token":localStorage.getItem('AUTH_TOKEN')}).then((res) =>{
            this.setState({
              user_email: res.data.email,
              user_avatar: res.data.avatar,
              loading:false
            })
          })
        }
  
  }

  render(){
 
    const{ user_email,user_avatar } = this.state
    const value ={
    user_email,
    user_avatar,
    setUser: this.setUser
    }
    const {children} = this.props
    return(
      <AuthContent.Provider value={value}>
      {children}
    </AuthContent.Provider>
    )
  }


}
export default Auth;