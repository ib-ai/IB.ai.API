import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
  Filter,
  RoleIDs,
  // EmojiStats, Not ready
  Monitor,
  Notes,
  Reactions,
  Reminders,
  Tags,
  // UserSearch, Not ready
  Votes,
  Links,
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
  avatarCard: {
    margin: 10,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Sidebar() {
  const sideBarCategories = [
    { id: "Tags", comp: Tags, default: false },
    { id: "Reactions", comp: Reactions, default: false },
    // { id: "Emoji Stats", comp: EmojiStats, default: false}, Not ready
    { id: "Filter", comp: Filter, default: false },
    { id: "Votes", comp: Votes, default: false },
    // { id: "User Search", comp: UserSearch }, Not ready
    { id: "Notes", comp: Notes, default: false },
    { id: "Reminders", comp: Reminders, default: false },
    { id: "Monitor", comp: Monitor, default: false },
    { id: "Role IDs", comp: RoleIDs, default: false },
    { id: "Cassowaries", comp: Cassowaries, default: false },
    { id: "Links", comp: Links, default: true },
  ];

  const sideBarHiddenState = {};

  sideBarCategories.map((cat) => {
    sideBarHiddenState[cat.id] = cat.default;
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

  function renderGrid() {
    Object.keys(sideBarShown).map((key) => {
      if (sideBarShown[key] !== previousValues.current[key]) {
        if (sideBarShown[key] === true) {
          setCards((c) => c.concat({ id: key }));
        } else {
          setCards((c) => c.filter(({ id }) => id !== key));
        }

        previousValues.current = sideBarShown;
      }
    });
  }

  useEffect(() => {
    if (firstRun) {
      Object.keys(sideBarShown).map((key) => {
        if (sideBarShown[key] === true) {
          setCards((c) => c.concat({ id: key }));
        }
        previousValues.current = sideBarShown;
      });
      setFirstRun(false);
    }
    renderGrid();
  }, [...Object.keys(sideBarShown).map((key) => sideBarShown[key])]);

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
      <Card className={classes.avatarCard}>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Avatar alt="username" className={classes.large}>
              H
            </Avatar>
            <div>
              <Typography>RandomName</Typography>
              <Typography>#1691</Typography>
            </div>
          </Grid>
        </CardContent>
      </Card>
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
          <Grid justify="space-between" container>
            <Grid item>
              <Avatar
                className={classes.ibLogo}
                alt="IB Logo"
                src="../../ib-logo.svg"
              />
            </Grid>
            <Grid item>
              <Button variant="outlined" color="inherit">
                Logout
              </Button>
            </Grid>
          </Grid>
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
