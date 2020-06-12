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
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Checkbox } from "@material-ui/core";

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
  const { reminder } = props;
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
        <TableCell component="th" scope="reminder">
          {reminder.username}
        </TableCell>
        <TableCell align="right">{reminder.reminders.length}</TableCell>
        <TableCell align="right">{reminder.reminders[0].time}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Reminders
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell align="center">Complete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reminder.reminders.map((reminderRow) => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {reminderRow.name}
                      </TableCell>
                      <TableCell>{reminderRow.time}</TableCell>
                      <TableCell align="center">
                        <Checkbox disabled checked={reminderRow.complete} />
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

const reminders = [
  {
    username: "NathanealV",
    reminders: [
      { name: "Take out the trash", time: "2020-05-22 13:28", complete: false },
      { name: "Take out the trash", time: "2020-05-22 13:28", complete: false },
      {
        name: "Take out the garbage",
        time: "2020-05-22 13:28",
        complete: true,
      },
    ],
  },
];

function Reminders() {
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
                    <TableCell>User Name</TableCell>
                    <TableCell align="right">Number Of Reminders</TableCell>
                    <TableCell align="right">Next Reminder</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reminders.map((reminder) => (
                    <Row key={reminder.name} reminder={reminder} />
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

export default Reminders;
