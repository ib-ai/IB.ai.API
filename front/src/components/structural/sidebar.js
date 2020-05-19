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
import Tags from "../sideBarSections/Tags";
import Reactions from "../sideBarSections/Reactions";
import EmojiStats from "../sideBarSections/EmojiStats";
import Filter from "../sideBarSections/Filter";

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
  const sideBarCategories = ["Tags", "Reactions", "Emoji Stats", "Filter"];
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cardsInGrid, setCards] = React.useState([]);

  const [showTags, setShowTags] = React.useState(false);
  const [showReactions, setShowReactions] = React.useState(false);
  const [showEmojiStats, setShowEmojiStats] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(false);

  const onTagsClick = () => {
    setShowTags(!showTags);
  };
  const onReactionsClick = () => {
    setShowReactions(!showReactions);
  };
  const onEmojiStatsClick = () => {
    setShowEmojiStats(!showEmojiStats);
  };
  const onFilterClick = () => {
    setShowFilter(!showFilter);
  };

  function addToGrid(id, component) {
    setCards((c) => c.concat({ id: id, component: component }));
  }

  function removeFromGrid(componentId) {
    setCards((c) => c.filter(({ id }) => id !== componentId));
  }

  useEffect(() => {
    if (showTags) {
      addToGrid("tags", Tags);
    } else {
      removeFromGrid("tags");
    }
  }, [showTags]);

  useEffect(() => {
    if (showReactions) {
      addToGrid("reactions", Reactions);
    } else {
      removeFromGrid("reactions");
    }
  }, [showReactions]);

  useEffect(() => {
    if (showEmojiStats) {
      addToGrid("emojistats", EmojiStats);
    } else {
      removeFromGrid("emojistats");
    }
  }, [showEmojiStats]);

  useEffect(() => {
    if (showFilter) {
      addToGrid("filter", Filter);
    } else {
      removeFromGrid("filter");
    }
  }, [showFilter]);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <List>
        <ListItem
          button
          key={sideBarCategories[0]}
          onClick={() => onTagsClick()}
        >
          <ListItemText primary={sideBarCategories[0]} />
          {showTags ? <Typography>•</Typography> : null}
        </ListItem>
        <ListItem
          button
          key={sideBarCategories[1]}
          onClick={() => onReactionsClick()}
        >
          <ListItemText primary={sideBarCategories[1]} />
          {showReactions ? <Typography>•</Typography> : null}
        </ListItem>
        <ListItem
          button
          key={sideBarCategories[2]}
          onClick={() => onEmojiStatsClick()}
        >
          <ListItemText primary={sideBarCategories[2]} />
          {showEmojiStats ? <Typography>•</Typography> : null}
        </ListItem>
        <ListItem
          button
          key={sideBarCategories[3]}
          onClick={() => onFilterClick()}
        >
          <ListItemText primary={sideBarCategories[3]} />
          {showFilter ? <Typography>•</Typography> : null}
        </ListItem>
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
          {/* {showTags ? <Tags /> : null}
          {showReactions ? <Reactions /> : null}
          {showEmojiStats ? <EmojiStats /> : null}
          {showFilter ? <Filter /> : null} */}
          {cardsInGrid.map(({ id, component: Component }) => (
            <Component key={id} />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Sidebar;
