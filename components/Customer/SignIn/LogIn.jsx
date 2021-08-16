import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {IconButton, InputAdornment} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import {SignInStyles} from "./LogInStyles";
import {
    UseForm,
    CopyRight,
    Form,
    InputField,
    FormButton,
    CheckBox,
} from '../../components';

const initialValues = {
    id: 0,
    emailAddress: '',
    password: '',
    rememberMe: false,
};


const LogIn = () => {
    const styles = SignInStyles();
    const [passwordVisible, setPasswordVisible] = useState(false);

    /* validate form */
    const handlePasswordVisible = (event) => {
        event.preventDefault();
        setPasswordVisible(!passwordVisible);
    }

    const validateForm = (fieldValues = values) => {
        let temp = { ...errors };
        if ('password' in fieldValues) {
            temp.password = fieldValues.password ? "" : "Invalid Password";
        }

        if ('emailAddress' in fieldValues) {
            temp.emailAddress = fieldValues.emailAddress ? "" : "This Field is Required";
        }

        setErrors({
            ...temp
        });

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }
    }

    const handleLogIn = (event) => {
        event.preventDefault();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            handleResetForm();
            handleLogIn();
        }
    }

    const {
        values,
        setErrors,
        handleInputChange,
        handleResetForm,
        errors,
    } = UseForm(initialValues, true, validateForm);

    return (
        <Grid container component="main" className={styles.root}>
            <Grid item xs={false} sm={4} md={7} className={styles.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={styles.paper}>
                    <div className="flex flex-col justify-center items-center mb-8">
                        <Avatar className={styles.avatar} />
                        <Typography component="h1" variant="h3">
                            SIGN IN
                        </Typography>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <InputField
                            required
                            label="Email Address"
                            name="emailAddress"
                            type="email"
                            value={values.emailAddress}
                            onChange={handleInputChange}
                            error={errors.emailAddress}
                            inputIcon={<EmailIcon color="secondary" />}
                        />

                        <InputField
                            required
                            label="Password"
                            name="password"
                            type={passwordVisible ? "text" : "password"}
                            value={values.password}
                            onChange={handleInputChange}
                            error={errors.password}
                            inputIcon={<VpnKeyIcon color="secondary" />}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onMouseDown={handlePasswordVisible}
                                    >
                                        {passwordVisible ? <Visibility color="secondary" /> : <VisibilityOff color="secondary" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                        <CheckBox
                            name="rememberMe"
                            label="Remember Me"
                            value={values.rememberMe}
                            onChange={handleInputChange}
                        />

                        <div className="mb-4">
                            <FormButton
                                type="submit"
                                text="Sign In"
                                color="secondary"
                            />
                        </div>

                        <Grid container>
                            <Grid item xs>
                                <Link href="/auth/forgot" variant="body2">
                                    <a>Forgot password</a>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/auth/signup" variant="body2">
                                    <a>Don&apos;t have an account ? Sign Up</a>
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={10}>
                            <CopyRight />
                        </Box>
                    </Form>
                </div>
            </Grid>
        </Grid>
    );
}

export default LogIn;