import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {IconButton, InputAdornment} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonIcon from '@material-ui/icons/Person';
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import {SignUpStyles} from "./RegisterStyles";
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
    fullName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    subscribe: false,
};


const Register = () => {
    const styles = SignUpStyles();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    /* handle password visibility */
    const handlePasswordVisible = (event) => {
        event.preventDefault();
        setPasswordVisible(!passwordVisible);
    }

    /* validate form */
    const handleConfirmPasswordVisible = (event) => {
        event.preventDefault();
        setConfirmPasswordVisible(!confirmPasswordVisible);
    }

    const validateForm = (fieldValues = values) => {
        let temp = { ...errors };
        if ('fullName' in fieldValues) {
            temp.fullName = fieldValues.fullName ? "" : "This Field is Required";
        }
        if ('emailAddress' in fieldValues) {
            temp.emailAddress = (/$^|.+@.+..+/).test(fieldValues.emailAddress) ? "" : "Invalid Email";
        }
        if ('phoneNumber' in fieldValues) {
            temp.phoneNumber = fieldValues.phoneNumber.length > 9 ? "" : "Invalid Phone Number";
        }
        if ('password' in fieldValues) {
            temp.password = fieldValues.password.length > 6 ? "" : "Password must be at least six characters";
        }
        if ('confirmPassword' in fieldValues) {
            temp.confirmPassword = fieldValues.confirmPassword === fieldValues.password ? "" : "Password do not match";
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
                            SIGN UP
                        </Typography>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <InputField
                            required
                            label="Full Name"
                            name="fullName"
                            type="text"
                            value={values.fullName}
                            onChange={handleInputChange}
                            error={errors.fullName}
                            inputIcon={<PersonIcon color="secondary" />}
                        />

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
                            inputIcon={<LockOutlinedIcon color="secondary" />}
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

                        <InputField
                            required
                            label="Confirm Password"
                            name="confirmPassword"
                            type={confirmPasswordVisible ? "text" : "password"}
                            value={values.confirmPassword}
                            onChange={handleInputChange}
                            error={errors.confirmPassword}
                            inputIcon={<LockOutlinedIcon color="secondary" />}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onMouseDown={handleConfirmPasswordVisible}
                                    >
                                        {confirmPasswordVisible ? <Visibility color="secondary" /> : <VisibilityOff color="secondary" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                        <CheckBox
                            name="subscribe"
                            label="I would like to receive mails on new products"
                            value={values.subscribe}
                            onChange={handleInputChange}
                        />

                        <div className="flex flex-row items-center justify-center">
                            <div className="mx-2">
                                <FormButton
                                    type="submit"
                                    text="Sign Up"
                                    color="secondary"
                                />
                            </div>

                            <div className="mx-2">
                                <FormButton
                                    variant="outlined"
                                    color="secondary"
                                    text="Reset"
                                    onClick={handleResetForm}
                                />
                            </div>
                        </div>

                        <Grid container className="flex flex-row items-center justify-center">
                            <Grid item>
                                <Link href="/auth" variant="body2">
                                    <a>Already have an account ? Sign In</a>
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <CopyRight />
                        </Box>
                    </Form>
                </div>
            </Grid>
        </Grid>
    );
}

export default Register;