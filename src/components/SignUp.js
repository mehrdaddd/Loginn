import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import * as routes from '../constants/routes';
import {auth} from '../firebase';
import './App.css';

const SignUpStyles = {
    width: "70%",
    maxWidth: "350px",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px"
}


const SignUpPage = ({history}) =>
    <div className="pages">
        <h1>SignUp </h1>
        <SignUpForm history={history} />
    </div>




const INITIAL_STATE= {
    email: '',
    passwordOne:'',
    passwordTwo:'',
    error:null
};

const byPropKey = (propertyName, value) => () => ({ [propertyName]: value,});

class SignUpForm extends Component{
    constructor(props){
        super(props);
        this.state= { ...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            email,
            passwordOne,
        }= this.state;

        const {
            history,
        }=this.props;

        auth.doCreateUserWithEmailAndPassword(email , passwordOne)
            .then(authUser =>{

                     this.setState(() => ({...INITIAL_STATE}));
                     history.push(routes.HOME);
                 })
                 .catch(error => {
                    this.setState(byPropKey('error', error));
                 });

    event.preventDefault();
}

render() {
    const {
        email,
        passwordOne,
        passwordTwo,
        error
    }=this.state;

    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ;

    return(
        <form style={SignUpStyles}  onSubmit={this.onSubmit}>

            <input value={email}
                   style={{width: "70%"}}
                   onChange={ event => this.setState(byPropKey('email', event.target.value))}
                   type="email"
                   placeholder="Email"
            />
            &nbsp; &nbsp;
            <br />
            <br />
            <input value={passwordOne}
                   style={{width: "70%"}}
                   onChange={ event => this.setState(byPropKey('passwordOne', event.target.value))}
                   type="password"
                   placeholder="PasswordOne"
            />
            &nbsp; &nbsp;
            <br />
            <br />
            <input value={passwordTwo}
                   style={{width: "70%"}}
                   onChange={ event => this.setState(byPropKey('passwordTwo', event.target.value))}
                   type="password"
                   placeholder="PasswordTwo"
            />
            &nbsp; &nbsp;
            <br />
            <br />

            <hr style={{marginTop: "10px", marginBottom: "10px"}}/>
            <button disabled={isInvalid} style={{width: "100%"}}  type="submit">
                Sign Up
            </button>

            <br />
            <br />

            {error && <p>{error.message} </p>}

        </form>
    );
}
}


const SignUpLink=() =>
    <p>
        Don't have an account?
        {''}
        <Link to={routes.SIGN_UP}> Sign Up  </Link>
    </p>




export default withRouter(SignUpPage);

export {SignUpForm,
    SignUpLink
};