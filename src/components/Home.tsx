import React from "react";
import "@fontsource/roboto/400.css";
import { Button, Grid } from "@mui/material";
import { Margin } from "@mui/icons-material";

const Home = () => {
  return (
    <div>
      <h1 style={{fontFamily: 'roboto', textAlign: 'center'}}>Home</h1>
      <Grid container sx={{Margin: '1rem'}}>
        <Grid style={{border: 'solid 1px black'}}item xs={12}>
            Hello
        </Grid>
        <Grid container item xs={12}>
        <Grid style={{border: 'solid 1px black'}}item xs={4}>
            Hello
        </Grid>
        <Grid style={{border: 'solid 1px black'}}item xs={8}>
            Hello
        </Grid>
        </Grid>
        <Grid style={{border: 'solid 1px black'}}item xs={12}>
            Hello
        </Grid>
        <Grid style={{border: 'solid 1px black'}}item xs={12}>
            Hello
        </Grid>
        <Grid container item xs={12}>
        <Grid style={{border: 'solid 1px black'}}item xs={8}>
            Hello
        </Grid>
        <Grid style={{border: 'solid 1px black'}}item xs={4}>
            Hello
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
