import React, {Component} from 'react'  //imports the React 
import './Registration.css'
//import Button from 'react-bootstrap/Button';
//import PhoneInput from 'react-phone-number-input';


/*const defaultState = {
    username : '',
    password : '',
    passwordConfirm : '' 
}*/

export class UserForm extends Component{ 
    documentData;
    constructor(props) {
        //react parameters  
		super(props)

        //recat variables 
		this.state = {
			username : '',   //set initial value from the state   reflected setState
            phone : '',
            email : '' ,
            password : ''
		}
    }
    

    //component events
    handleUsernameChange = event => {           //event triggered when change in ip field value 
        this.setState({                             //set state method update state  when setstate updated render metgod is called & assign value to ip element
            username: event.target.value
        })
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleNumberChange = event => {
        this.setState({
            phone: event.target.value
        })
    }

    handleSubmit = event => {
        //In this method data is stored in localStorage.

        event.preventDefault();
            console.log(this.state);
            localStorage.setItem('document',JSON.stringify(this.state));
    }
//Declared a variable documentData, in this variable we will store the form’s value from local storage.


    // React Life Cycle
componentDidMount() {
    //componentDidMount() component life cycle method, to load data in state from localStorage in case of page refresh.
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
    if (localStorage.getItem('document')) {
        this.setState({
            username: this.documentData.username,
            phone: this.documentData.phone,
            email: this.documentData.email,
            //password: this.documentData.password
        })
    } 
    else {
    this.setState
        ({
            username : '',   //set initial value from the state   reflected setState
            phone : '',
            email : '' ,
            //password : ''
        })
    }
}


    render(){
        return(
            <div className="container">

            <form onSubmit={this.handleSubmit}>
            <h3>Registration</h3>
                
                <div className="form-group">
                    <label>Enter Name</label>
                    <input              //input element have value
                        name = "name"
                        placeholder = "username" 
                        value = {this.state.username}       //controlled component value set to state property
                        onChange = {this.handleUsernameChange}  // ip element change on user interaction deal with them to the state 
                    />
                </div>

                <div className="form-group">
                <label>Enter PhoneNo</label>
                <input
                    type = "phone"
                    placeholder="phone"
                    value={this.state.value}
                    onChange={this.handleNumberChange}/>
                </div>

                <div className="form-group">
                <label>Enter Email Id</label>
                    <input 
                        type = "email"
                        name = "email"
                        placeholder = "email id" 
                        value = {this.state.email} 
                        onChange = {this.handleEmailChange}
                    />
                </div>

                <div className="form-group">  
                <label>Enter Password <br/></label>
                    <input 
                    type = "password"
                    name = "password"
                    placeholder = "password"
                    value = {this.state.password} 
                    onChange = {this.handlePasswordChange}/>
                </div>
                <div id="container">
                <button type="Submit" >Submit</button>
                </div>
            </form>
            </div>
        )
    }
}

export default UserForm 

/*

ValidityState = () => {
        //let isValid = true; 
        if(this.state.passwordConfirm !== this.state.password)
        {
            alert('Password are not same');
        }
    }

                <div>  
                    <input 
                    type="password"
                    name = "confirmpassword"
                    placeholder = "confirm password"
                    value={this.state.passwordConfirm} 
                    onChange={this.handlePasswordConfirm}/>
                </div>
*/