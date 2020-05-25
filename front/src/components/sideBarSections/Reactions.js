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
import MaterialTable from "material-table";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Clear from "@material-ui/icons/Clear";
import Cancel from "@material-ui/icons/Cancel";

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

function ReactionTable(reactionData) {
  const classes = useStyles();

  const [reactionTable, setReactionTable] = React.useState({
    columns: [
      { title: "ID", field: "id" },
      { title: "Name", field: "name" },
      { title: "Emote", field: "emote" },
    ],
    data: reactionData,
  });

  return (
    <div className={classes.root}>
      <MaterialTable
        icons={{
          Check: Check,
          DetailPanel: ChevronRight,
          Export: SaveAlt,
          Filter: FilterList,
          FirstPage: FirstPage,
          LastPage: LastPage,
          NextPage: ChevronRight,
          PreviousPage: ChevronLeft,
          Search: Search,
          ThirdStateCheck: Remove,
          Add: Add,
          ViewColumn: ViewColumn,
          Edit: Edit,
          Delete: Delete,
          Clear: Clear,
          ResetSearch: Cancel,
          SortArrow: KeyboardArrowUpIcon,
        }}
        title="Reaction List"
        columns={reactionTable.columns}
        data={reactionTable.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setReactionTable((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setReactionTable((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setReactionTable((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </div>
  );
}

function Row(props) {
  const { reactions } = props;
  const [open, setOpen] = React.useState(false);
  const [innerOpen, setInnerOpen] = React.useState({});
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
        <TableCell component="th" scope="reaction">
          {reactions.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Messages
              </Typography>
              {reactions.messages.map((reactionRow, index) => {
                return (
                  <Table>
                    <TableBody>
                      <TableRow className={classes.root}>
                        <TableCell>
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() =>
                              setInnerOpen({
                                ...innerOpen,
                                [index]: !innerOpen[index],
                              })
                            }
                          >
                            {innerOpen[index] ? (
                              <KeyboardArrowUpIcon />
                            ) : (
                              <KeyboardArrowDownIcon />
                            )}
                          </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="reaction">
                          {reactionRow.name}
                        </TableCell>
                        <TableCell>{reactionRow.reactions.length}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          style={{ paddingBottom: 0, paddingTop: 0 }}
                          colSpan={6}
                        >
                          <Collapse
                            in={innerOpen[index]}
                            timeout="auto"
                            unmountOnExit
                          >
                            <Box margin={2}>
                              {ReactionTable(reactionRow.reactions)}
                            </Box>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                );
              })}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const reactionRoles = [
  {
    name: "join-lounge",
    messages: [
      {
        id: 1233951324908723947,
        name: "Group 1 Channel Selection",
        reactions: [
          {
            id: 1,
            name: "English A Lit",
            emote: ":lit:",
          },
          { id: 2, name: "English LangLit", emote: ":langlit:" },
        ],
      },
      {
        id: 9123847192384793847,
        name: "Group 2 Channel Selection",
        reactions: [
          {
            id: 1,
            name: "French",
            emote: ":french:",
          },
          { id: 2, name: "Chinese", emote: ":flag_cn:" },
        ],
      },
    ],
  },
];

function Reactions() {
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
                    <TableCell>Channel Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reactionRoles.map((reactionRole) => (
                    <Row key={reactionRole.name} reactions={reactionRole} />
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

export default Reactions;
