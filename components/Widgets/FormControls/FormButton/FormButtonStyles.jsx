import { makeStyles } from "@material-ui/core";

export const FormButtonStyles = makeStyles(
    theme => ({
        label: {
            textTransform: "none",
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    })
);