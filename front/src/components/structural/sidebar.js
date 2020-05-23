import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Typography, Divider, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  Cassowaries,
  EmojiStats,
  Filter,
  RoleIDs,
  Monitor,
  Notes,
  Reactions,
  Reminders,
  Tags,
  UserSearch,
  Votes,
} from "../sideBarSections/index.js";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  ibLogo: {
    marginRight: theme.spacing(4),
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginRight: 40,
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function Sidebar() {
  const sideBarCategories = [
    { id: "Tags", comp: Tags },
    { id: "Emoji Stats", comp: EmojiStats },
    { id: "Reactions", comp: Reactions },
    { id: "Filter", comp: Filter },
    { id: "Votes", comp: Votes },
    { id: "User Search", comp: UserSearch },
    { id: "Notes", comp: Notes },
    { id: "Reminders", comp: Reminders },
    { id: "Monitor", comp: Monitor },
    { id: "Role IDs", comp: RoleIDs },
    { id: "Cassowaries", comp: Cassowaries },
  ];

  const sideBarHiddenState = {};

  sideBarCategories.map((cat) => {
    sideBarHiddenState[cat.id] = false;
  });

  const previousValues = React.useRef(sideBarHiddenState);

  const [sideBarShown, setSideBar] = React.useState(sideBarHiddenState);
  const [firstRun, setFirstRun] = React.useState(true);

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cardsInGrid, setCards] = React.useState([]);

  const onSideBarClick = (sideBarKey) => {
    let newArray = { ...sideBarShown };

    const key = sideBarKey;
    const bool = newArray[key];

    newArray = { ...newArray, [key]: !bool };
    setSideBar(newArray);
  };

  function addToGrid(id) {
    setCards((c) => c.concat({ id: id }));
  }

  function removeFromGrid(componentId) {
    setCards((c) => c.filter(({ id }) => id !== componentId));
  }

  useEffect(() => {
    if (firstRun === true) {
      setFirstRun(false);
    }
    Object.keys(sideBarShown).map((key) => {
      if (sideBarShown[key] !== previousValues.current[key]) {
        if (sideBarShown[key] === true) {
          addToGrid(key);
        } else {
          removeFromGrid(key);
        }

        previousValues.current = sideBarShown;
      }
    });
  }, [
    addToGrid,
    removeFromGrid,
    firstRun,
    ...Object.keys(sideBarShown).map((key) => sideBarShown[key]),
  ]);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <List>
        {Object.keys(sideBarShown).map((key, index) => (
          <ListItem button key={key} onClick={() => onSideBarClick(key)}>
            <ListItemText primary={key} />
            {sideBarShown[key] ? <Typography>•</Typography> : null}
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography align="center">Signed in as:</Typography>
      <Grid container direction="row" justify="center" alignItems="center">
        <Avatar alt="username">H</Avatar>
        <Grid item direction="column">
          <Typography>RandomName</Typography>
          <Typography>#1691</Typography>
        </Grid>

        <Grid container item direction="column"></Grid>
      </Grid>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            className={classes.ibLogo}
            alt="IB Logo"
            src="../../ib-logo.svg"
          />
          <Button variant="outlined" color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Grid
          container
          direction="row"
          alignContent="center"
          alignItems="center"
          wrap="wrap"
          spacing={4}
        >
          {cardsInGrid.map((card) => {
            const Component = sideBarCategories.find(
              (cat) => cat.id === card.id
            ).comp;
            return <Component key={card.id} />;
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Sidebar;
