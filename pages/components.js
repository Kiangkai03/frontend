import Head from "next/head";
import Link from "next/link";
import { Button } from "@material-ui/core/";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
     },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
  },
}));


<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

export default function Home() {
  return (
    <div>
      <center>
        <Head>
          <title>ออกแบบ</title>
        </Head>

        <main>
          <h1>
            <center> Index page</center>
          </h1>
          <br />
          <center>
            <Link href="/">
              <a>home │</a>
            </Link>
            <Link href="/about">
              <a>about │</a>
            </Link>
            <Link href="/service">
              <a>service │</a>
            </Link>
            <Link href="/products/a001">
              <a>products │</a>
            </Link>
            <Link href="/components">
              <a>components</a>
            </Link>
          </center>
        </main>
        <br />
        <Button variant="contained" color="secondary">
          Hello
        </Button>
        <br /><br />
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
        <br /><br />
        <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
      </center>
    </div>
  );
}
