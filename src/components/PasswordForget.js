import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import  {auth} from '../firebase';



const PasswordForgetPage = () =>

    <div className="pages">

        <PasswordForgetForm />
    </div>


const resetStyles = {
    width: "90%",
    maxWidth: "350px",
    margin: "70px auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "40px"
}

const byPropKey = ( propertyName , value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    error: null
};

class PasswordForgetForm extends Component {
    constructor(props){
        super(props);
        this.state= { ...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {email}= this.state;
        auth.doPasswordReset(email)
            .then(()=> {
                this.setState(() => ({ ...INITIAL_STATE}));
            })
            .cath(error => {
                this.setState(byPropKey('error', error));
            });
        event.preventDefault();
    }

    render() {
        const {
            email,
            error
        }=this.state;

        const isInvalid = email ==='';

        return (
            <form  style={resetStyles}   onSubmit={this.onSubmit}>

                <h1>
                    PasswordForget
                </h1>
                <input style={{width: "100%"}} className="pt-button pt-intent-primary"
                    value={this.state.email}
                    onChange={ event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address" />

                &nbsp; &nbsp;
                <br />
                <br />
                <button disabled={isInvalid} type="submit"  style={{width: "100%"}} className="pt-button pt-intent-primary">
                    Reset My Password
                </button>

                {error && <p> {error.message}</p>}
            </form>

        );
    }
}

const PasswordForgetLink= () =>
    <p>
        <Link to="/pw-forget"> Forget Password? </Link>
    </p>


export default PasswordForgetPage;

export {
   PasswordForgetForm,
   PasswordForgetLink
};