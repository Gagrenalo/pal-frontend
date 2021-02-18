/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {useState} from "react"
import {register} from "../../UserConnection/User"

import {TextField, Typography, Link, Button} from "@material-ui/core"
// import {Button} from "@material-ui/core"
// import {Typography, Link} from "@material-ui/core"

const styles = {
    foobar : {
        color: "red",
        display: "hidden"
    }
}
export const RegisterFormComponent = function() : JSX.Element {
    const [username, setUn] = useState("");
    const [password, setPass] = useState("");
    const [confirmation, setConf] = useState("");
    const [email, setEmail] = useState(""); 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ): Promise<void> => {
        e.preventDefault();

        if (validateForm()) {
            // const submitSuccess: boolean = await submitForm();
            // this.setState({ submitSuccess });
        }
    };

    const validateForm = function(): boolean {
        return true;
    }

    return (
        <div id="formDiv">
            <form id="registerForm" onSubmit={handleSubmit}>

                <TextField onChange = {(e: React.ChangeEvent<HTMLInputElement>) : void => {
                    setUn(e.target.value);
                }} id="uUserInput" label="Username" variant="outlined" name="username" type="text"/>

                <TextField onChange = {(e: React.ChangeEvent<HTMLInputElement>) : void => {
                    setEmail(e.target.value);
                }} id="uEmailInput" label="Email" variant="outlined" name="email" type="email"/>


                <TextField onChange = {(e: React.ChangeEvent<HTMLInputElement>) : void => {
                    setPass(e.target.value);
                }} id="uPasswordInput" label="Password" variant="outlined" name="password" type="password" placeholder="*****"/>

                <TextField onChange = {(e: React.ChangeEvent<HTMLInputElement>) : void => {
                    setConf(e.target.value);
                }} id="uPasswordConfInput" label="Password Confirmation" variant="outlined" name="password" type="password" placeholder="*****"/>

                <Typography>
                    <Link href="/register" >
                        Already have an account? Login.
                    </Link>
                </Typography>
                <Button variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </div>
    )
}