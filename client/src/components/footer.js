import * as React from "react";
import { Toolbar, AppBar, makeStyles, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    footer: {
        backgroundColor: "#00A3BC",
        color: "white",
        padding: "20px",
        marginTop: "40px",
    },
    content: {
        display: "flex",
        justifyContent: "space-around",
    },
});
export default function Footer() {
    const classes = useStyles();
    return (
        <Box sx={{ m: 0 }}>
            <AppBar position="static" className={classes.footer}>
                <Toolbar className={classes.content}>
                    <Typography variant="p"> @supportyourgang</Typography>
                    <Typography variant="p"> Contact</Typography>
                    <Typography variant="p">
                        CHausseestraße 41B, 10115, Berlin
                    </Typography>
                    <Typography variant="p">Contact: 017665674560</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
