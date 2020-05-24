import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Checkbox } from "@material-ui/core";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Cancel from "@material-ui/icons/Cancel";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { red, orange, green } from "@material-ui/core/colors";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardDesign: {
    flexGrow: 1,
    marginRight: "20px",
    marginLeft: "20px",
    width: "100%",
  },
});

function Row(props) {
  const { vote } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="vote">
          {vote.name}
        </TableCell>
        <TableCell align="center">{vote.votes.length}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Votes
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Upvotes</TableCell>
                    <TableCell>Downvotes</TableCell>
                    <TableCell>Expiry</TableCell>
                    <TableCell align="center">Complete</TableCell>
                    <TableCell align="center">Approved</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vote.votes.map((voteRow) => (
                    <TableRow>
                      <TableCell>{voteRow.id}</TableCell>
                      <TableCell component="th" scope="row">
                        {voteRow.name}
                      </TableCell>
                      <TableCell>{voteRow.upvotes}</TableCell>
                      <TableCell>{voteRow.downvotes}</TableCell>
                      <TableCell>{voteRow.expiry}</TableCell>
                      <TableCell align="center">
                        <Checkbox disabled checked={voteRow.complete} />
                      </TableCell>
                      <TableCell align="center">
                        {voteRow.approved == undefined ? (
                          <WatchLaterIcon style={{ color: orange[300] }} />
                        ) : voteRow.approved ? (
                          <CheckCircleIcon style={{ color: green[300] }} />
                        ) : (
                          <Cancel style={{ color: red[300] }} />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const allVotes = [
  {
    name: "voting",
    votes: [
      {
        id: 1,
        name:
          "New Emoji #1 Suggested by @me https://discordlonglinkhereykthedeal.com",
        upvotes: 5,
        downvotes: 2,
        expiry: "2020-24-05",
        complete: false,
        approved: undefined,
      },
      {
        id: 2,
        name: "New Emoji #2",
        upvotes: 10,
        downvotes: 2,
        expiry: "2020-20-05",
        complete: true,
        approved: true,
      },
      {
        id: 3,
        name: "New Emoji #3",
        upvotes: 5,
        downvotes: 18,
        expiry: "2020-18-05",
        complete: true,
        approved: false,
      },
    ],
  },
  { name: "staff", votes: [] },
];

function Votes() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <div className={classes.root}>
        <Card className={classes.cardDesign}>
          <CardContent>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>VoteLadder Name</TableCell>
                    <TableCell align="center">Number Of Votes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allVotes.map((vote) => (
                    <Row key={vote.name} vote={vote} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    </Grid>
  );
}

export default Votes;
