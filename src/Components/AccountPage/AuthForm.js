import { useState } from "react";
import Button from "../Global/Button/Button";
import RadioButton from "../Global/RadioButton/RadioButton";
import classes from "./AuthForm.module.scss";

function FormGroup(props) {
    return (
        <div
            className={`${classes.FormGroup} ${props.className}`}
            style={props.style}
        >
            {props.children}
        </div>
    );
}

export default function AuthForm(props) {
    const [isSigningUp, setIsSigningUp] = useState(false);

    const handleSigningUpMethod = (value) => {
        setIsSigningUp(value);
    };

    return (
        <div className={classes.Container}>
            <h4>Sign in or register</h4>
            <form className={classes.AuthForm}>
                <FormGroup>
                    <label className={classes.Label}>
                        Enter your email address:
                    </label>
                    <input type="email" placeholder="Email*" />
                </FormGroup>

                <FormGroup>
                    <RadioButton
                        label="I already have an account"
                        onChange={() => {
                            handleSigningUpMethod(true);
                        }}
                        active={isSigningUp}
                    />
                    <RadioButton
                        label="I don't have an account"
                        onChange={() => {
                            handleSigningUpMethod(false);
                        }}
                        active={!isSigningUp}
                    />
                </FormGroup>

                <FormGroup
                    className={!isSigningUp ? classes.Hidden : classes.Show}
                >
                    <label className={classes.Label}>Password:</label>
                    <input type="password" placeholder="Password*" />
                </FormGroup>

                <Button className={classes.RegisterBtn}>
                    {!isSigningUp ? "Register" : "Log in"}
                </Button>
            </form>
        </div>
    );
}
