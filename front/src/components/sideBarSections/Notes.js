import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import MaterialTable from "material-table";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  TextField,
  Typography,
  IconButton,
  Collapse,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Table,
  Box,
} from "@material-ui/core";

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
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ArrowBack from "@material-ui/icons/ArrowBack";

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
  resize: {
    fontSize: 13,
  },
});

function NoteCollapse(props) {
  const { note } = props;
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setCollapseOpen(!collapseOpen)}
            >
              {collapseOpen ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </IconButton>
          </TableCell>
          <TableCell>{note.timestamp}</TableCell>
          <TableCell>{"Last edited by: " + note.staffuid}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
              <Table size="small" aria-label="notes">
                <TableBody>
                  <TableCell>
                    <IconButton>
                      <Delete />
                    </IconButton>
                    <IconButton>
                      <Edit />
                    </IconButton>
                  </TableCell>
                  <TableCell>{note.text}</TableCell>
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function Notes() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [tempDialogData, setDialogData] = React.useState({ note: "", uid: "" });
  const [notesTransition, setNotesTransition] = React.useState(false);
  const [cardData, setCardData] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInformation = () => {
    setNotes((prevState) => {
      const data = [...prevState.data];
      data.push({
        name: "Name",
        uid: tempDialogData.uid,
        number: 1,
        notes: [tempDialogData.note],
      });
      setDialogData({ note: "", uid: "" });
      return { ...prevState, data };
    });
    setOpen(false);
  };

  const [notes, setNotes] = React.useState({
    columns: [
      { title: "User Name", field: "name" },
      { title: "User ID", field: "uid" },
      { title: "Number Of Notes", field: "number" },
    ],
    data: [
      {
        name: "Nope",
        uid: 123187410923847,
        number: 2,
        notes: [
          {
            text: "Note 1",
            timestamp: "2020-06-11",
            staffuid: "1237192371298731",
          },
          {
            text: "Note 2",
            timestamp: "2020-06-11",
            staffuid: "1237192371298731",
          },
        ],
      },
      {
        name: "Confuzz",
        uid: 123187410923847,
        number: 2,
        notes: [
          {
            text: "Note 1",
            timestamp: "2020-06-11",
            staffuid: "1237192371298731",
          },
          {
            text:
              "When I saw this morning who had gotten the moderator positions, I was not surprised with Jasmine. What I was taken aback by is this person named “cotton bud [llb/long]” or “ryerfryer#5279”. In the two months of my trial moderator stay, I truthfully do not remember interacting once with Ryan and was surprised that someone who I had either not seen or had seen but forgot got the moderator position. I come to find out that the reason why I had never seen him was because he was away for one and a half months. One and a half months out of the two-month trial period. And the times where he was here, he was either relatively inactive by just lurking or when he did make a ‘public call,’ he made an incorrect call with Lime. As Arraying said in response to me mentioning this concern in off-topic-1, “because we’d rather give the benefit of the doubt. It’s a trial system after all, if we had a perfect set of applicants we would have not had it.” That encapsulates some of my concerns.",
            timestamp: "2020-06-11",
            staffuid: "1237192371298731",
          },
        ],
      },
    ],
  });

  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a user to the monitor list, please enter the user id and a
              note.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="uid"
              label="User ID"
              type="number"
              fullWidth
              value={tempDialogData.uid || ""}
              onChange={(e) =>
                setDialogData({ ...tempDialogData, uid: e.target.value })
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="note"
              label="Quick Note"
              type="text"
              fullWidth
              value={tempDialogData.note || ""}
              onChange={(e) =>
                setDialogData({ ...tempDialogData, note: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleInformation} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
        {notesTransition ? (
          <Card className={classes.cardDesign}>
            <CardContent>
              <Grid container direction="row" alignItems="center">
                <IconButton
                  size="medium"
                  onClick={() => {
                    setNotesTransition(false);
                  }}
                >
                  <ArrowBack fontSize="inherit" />
                </IconButton>
                <Typography variant="h5">{cardData.name}</Typography>
              </Grid>
              {cardData.notes.map((note) => (
                <NoteCollapse note={note} />
              ))}
            </CardContent>
          </Card>
        ) : (
          <Card className={classes.cardDesign}>
            <CardContent>
              <MaterialTable
                actions={[
                  {
                    icon: Add,
                    onClick: () => {
                      handleClickOpen();
                    },
                    isFreeAction: true,
                    tooltip: "Add New User",
                  },
                ]}
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
                title="User Notes"
                columns={notes.columns}
                data={notes.data}
                onRowClick={(event, rowData) => {
                  setCardData(rowData);
                  setNotesTransition(true);
                }}
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                      setTimeout(() => {
                        resolve();
                        if (oldData) {
                          setNotes((prevState) => {
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
                        setNotes((prevState) => {
                          const data = [...prevState.data];
                          data.splice(data.indexOf(oldData), 1);
                          return { ...prevState, data };
                        });
                      }, 600);
                    }),
                }}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </Grid>
  );
}

export default Notes;
