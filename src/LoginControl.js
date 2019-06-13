import React from 'react';

function UserGreeting(props){
    return <h1>Bienvenue dans ce merveilleux site</h1>;
}

function GuestGreeting(props){
    return <h1>Bienvenue, merci de vous inscrire sur ce merveilleux site</h1>;
}

function Greeting(props){
    const isLoggedin = props.isLoggedin;
    if(isLoggedin){
        return <UserGreeting />
    }
    return <GuestGreeting />
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    )

}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    )

}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedin : false
        }

        this.handleLoginClick=this.handleLoginClick.bind(this);
        this.handleLogoutClick=this.handleLogoutClick.bind(this);

    }

    handleLoginClick(){
        this.setState({
            isLoggedin : true
        })

    }

    handleLogoutClick(){
        this.setState({
            isLoggedin : false
        })

    }

    render(){
        const isLoggedin= this.state.isLoggedin;
        let button;
        if(isLoggedin){
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        }else{
            button = <LoginButton onClick={this.handleLoginClick}/>

        }
        return(
            <div>
                <Greeting isLoggedin={isLoggedin}/>
                {button}
            </div>
        );
    }
}


export default LoginControl;