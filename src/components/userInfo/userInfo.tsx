import React from 'react'
import { Control, Form } from 'react-redux-form';
import store from './../../redux/store';

export interface userInfoProps{}

export interface userInfoState {
    username:string;
    email:string;
    user:boolean;
}

export default class userInfo extends React.Component<userInfoProps,userInfoState> {
    constructor(props:userInfoProps) {
        super(props)
        this.state={
            username:'',
            email:'',
            user:false
        };
        this.handleSubmit = this.handleSubmit.bind(this)
      }
       
      handleSubmit(user:any){
        this.setState({username:user.name, email: user.email, user:true})
        // alert(`Your registration detail: \n 
        //        Email: ${user.email} \n 
        //        Name: ${user.name}`)
        
               console.log(store.getState())
        
      }
      render() {
        return(
        <div>
            {(this.state.user)
             ?<div className="row user-info">
             <strong className="navbar-text">
                {this.state.email}
              </strong>
                <button type="button" className="close" aria-label="Close" onClick={()=>this.setState({user:false})}>
                    <span aria-hidden="true">&times;</span>
                </button>
             </div>
            :
            <Form
            model="user"
            onSubmit={(user) => this.handleSubmit(user)}
            className="form-group form-inline my-2 my-lg-0"
            >
                <label htmlFor="user.email"></label>
                <Control.text className="form-control mr-sm-2" model="user.email" id="user.email" placeholder="email@email.com"/>
        
                <label htmlFor="user.name"></label>
                <Control.text className="form-control mr-sm-2" model="user.name" id="user.name" placeholder="Name"/>
        
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Finish registration!
                </button>
            </Form>
            }
        </div>
        )}
    }