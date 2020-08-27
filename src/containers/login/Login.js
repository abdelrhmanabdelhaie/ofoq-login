import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { useHistory } from "react-router-dom";


export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const history = useHistory();

    function validateForm() {
        return userName.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            userHasAuthenticated(true);
            history.push("/");
        } catch (e) {
            alert(" home page under develop");
        }
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit} >
                <ControlLabel className="signIn">Sign In</ControlLabel>
                <FormGroup controlId="formBasicEmail" bsSize="large" className="formGroup1">
                    <ControlLabel className="controlLabel">UserName</ControlLabel>
                    <br></br>
                    <FormControl placeholder="Enter userName"
                        autoFocus
                        type="input"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large" className="formGroup2" >
                    <ControlLabel className="controlLabel">Password</ControlLabel>
                    <br></br>
                    <FormControl placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"

                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Login
        </Button>

            </form>
        </div >
    );
}