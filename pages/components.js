import Head from "next/head";
import Link from "next/link";
import { Button } from "@material-ui/core/";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

export default function Home() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setState({ ...state, [event.target.name]: event.target.checked });

  };


  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

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
        <br /> <br />
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
        <br />
        <br />
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Checkbox
          defaultChecked
          indeterminate
          inputProps={{ "aria-label": "indeterminate checkbox" }}
        />
        <Checkbox
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
        <Checkbox
          defaultChecked
          size="small"
          inputProps={{ "aria-label": "checkbox with small size" }}
        />
        <br /> <br />
        <center>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </center>
        <form className={classes.container} noValidate>
          <TextField
            id="time"
            label="Alarm clock"
            type="time"
            defaultValue="07:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </form>
        <br /> <br />
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Switch
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
      </center>
    </div>
  );
}
