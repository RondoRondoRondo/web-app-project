// Dependencies
import React, { useState, useEffect } from 'react';
import { Container, AppBar, Grow, Typography, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import logo from './images/logo.png'
import useStyles from './styles';
/////////////////////////////////////////////////////////

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxidth="lg">
            {/* <AppBar className={classes.appBar} position="static" color="inherit" >
                <Typography className={classes.heading} variant="body2">"Anyone can cook"</Typography>
            </AppBar> */}
            <img className={classes.image} src={logo} alt="logo" align="left" height="200" width="372" />
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;