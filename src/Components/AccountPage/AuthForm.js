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
    const [isSigningUp, setIsSigningUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSigningUpMethod = (value) => {
        setIsSigningUp(value);
    };

    console.log(isSigningUp);
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (isSigningUp) {
            return alert("Please complete required fields");
        }
        //... backend logic here
    };

    return (
        <div className={classes.Container}>
            <h4>Sign in or register</h4>
            <form
                className={classes.AuthForm}
                onSubmit={(e) => {
                    handleFormSubmit(e);
                }}
            >
                <FormGroup>
                    <label className={classes.Label}>
                        Enter your email address:
                    </label>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="Email*"
                    />
                </FormGroup>

                <FormGroup>
                    <RadioButton
                        label="I already have an account"
                        onChange={() => {
                            handleSigningUpMethod(false);
                        }}
                        active={!isSigningUp}
                    />
                    <RadioButton
                        label="I don't have an account"
                        onChange={() => {
                            handleSigningUpMethod(true);
                        }}
                        active={isSigningUp}
                    />
                </FormGroup>

                <FormGroup
                    className={isSigningUp ? classes.Hidden : classes.Show}
                >
                    <label className={classes.Label}>Password:</label>
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                        placeholder="Password*"
                    />
                </FormGroup>

                <Button className={classes.RegisterBtn}>
                    {isSigningUp ? "Register" : "Log in"}
                </Button>
            </form>
        </div>
    );
}
