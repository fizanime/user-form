import React, {Component} from 'react'
//import '/Form.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

/*const defaultState = {
    username : '',
    password : '',
    passwordConfirm : '' 
}*/

export class UserForm extends Component{
    
    constructor(props) {
		super(props)

		this.state = {
			username : '',
            password : '',
            passwordConfirm : '' 
		}
	}

    ValidityState = () => {
        //let isValid = true; 
        if(this.state.passwordConfirm !== this.state.password)
        {
            alert('Password are not same');
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handlePasswordConfirm = event => {
        this.setState({
            passwordConfirm: event.target.value
        })
         //this.ValidityState();
    }

    
    

    handleSubmit = event => {
        const isValid = true;
        if(isValid){
            console.log(this.state);
        }
        this.ValidityState();
    }

    render(){
        return(
            <Form onSubmit = {this.handleSubmit} >
                <div >
                    <input 
                        name = "name"
                        placeholder = "username" 
                        value = {this.state.username} 
                        onChange = {this.handleUsernameChange}
                    />
                </div>

                <div>  
                    <input 
                    type = "password"
                    name = "password"
                    placeholder = "password"
                    value = {this.state.password} 
                    onChange = {this.handlePasswordChange}/>
                </div>

                <div>  
                    <input 
                    type="password"
                    name = "confirmpassword"
                    placeholder = "confirm password"
                    value={this.state.passwordConfirm} 
                    onChange={this.handlePasswordConfirm}/>
                </div>

                
                <Button type="Submit" variant="primary">Submit</Button>{' '}
                
            </Form>
        )
    }
}

export default UserForm 