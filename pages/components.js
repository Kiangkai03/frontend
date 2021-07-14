import Head from "next/head";
import Link from "next/link";
import { Button, Box } from "@material-ui/core/";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
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
        <br />
        <div className={classes.root}>
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#text-buttons" color="primary">
            Link
          </Button>
        </div>
      </center>
    </div>
  );
}
