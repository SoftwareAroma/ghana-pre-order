import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {IconButton, InputAdornment} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import {CopyRight} from '../widgets';
import {SignUpStyles} from "./RegisterStyles";

const initialValues = {
    name : "",
    password: "",
    confirmPassword: "",
    email: "",
}


const Register = () => {
    const styles = SignUpStyles();
    const [values, setValues] = useState(initialValues);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});

    /* handle on value change */
    const handleValueChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const handlePasswordVisible = (event) => {
        event.preventDefault();
        setPasswordVisible(!passwordVisible);
    }

    const logInUser = (event) => {
        event.preventDefault();
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

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if(validateForm()){
            logInUser();
        }
    }

    return (
        <Grid container component="main" className={styles.root}>
            <Grid item xs={false} sm={4} md={7} className={styles.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={styles.paper}>
                    <Avatar className={styles.avatar} />
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={styles.form} noValidate onSubmit={handleOnSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={values.email}
                            onChange={handleValueChange}
                            autoComplete="email"
                            autoFocus
                            error={!!errors.emailAddress}
                            helperText={errors.emailAddress}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={values.password}
                            onChange={handleValueChange}
                            label="Password"
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                            error={!!errors.password}
                            helperText={errors.password}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <VpnKeyIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onMouseDown={handlePasswordVisible}
                                        >
                                            {passwordVisible ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={styles.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/auth" variant="body2">
                                    <a>Already have an account? Sign In</a>
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <CopyRight />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default Register;