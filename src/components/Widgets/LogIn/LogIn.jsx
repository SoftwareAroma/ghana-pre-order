import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {IconButton, InputAdornment} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import {CopyRight} from '../widgets';
import {SignInStyles} from "./LogInStyles";


const LogIn = () => {
    const styles = SignInStyles();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    /* on email change */
    const handleOnEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    /* on password change */
    const handleOnPasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    /* handle password visibility */
    const handlePasswordVisible = (event) => {
        event.preventDefault();
        setPasswordVisible(!passwordVisible);
    }

    const logInUser = (event) => {
        event.preventDefault();
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (password.length >= 6) {
            setPasswordError("");
        } else {
            setPasswordError("Invalid Password");
            return;
        }

        if (email.includes("@") && email.endsWith(".com")) {
            setEmailError("");
        }else{
            setEmailError("This Field is Required");
            return;
        }

        logInUser();
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
                            value={email}
                            onChange={handleOnEmailChange}
                            autoComplete="email"
                            autoFocus
                            error={!!emailError}
                            helperText={emailError}
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
                            value={password}
                            onChange={handleOnPasswordChange}
                            label="Password"
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                            error={!!passwordError}
                            helperText={passwordError}
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={styles.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/auth/forgot" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/auth/signup" variant="body2">
                                    <a>Don&apos;t have an account? Sign Up</a>
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

export default LogIn;