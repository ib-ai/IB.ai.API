import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Typography,
  TableCell,
  TableRow,
  Collapse,
  Table,
  TableBody,
  Card,
  CardContent,
} from "@material-ui/core";

import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Cancel from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  resize: {
    fontSize: 13,
  },
  monospace: {
    fontFamily: "Roboto Mono",
  },
}));

function NotesSubsection(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState({});
  const [tempDialogData, setDialogData] = React.useState({
    note: "",
    uid: "",
    idx: 0,
  });
  const [cardData, setCardData] = React.useState(props.noteData);
  const [collapseOpen, setCollapseOpen] = React.useState(props.collapseOpen);

  const [editInformation, setEditInformation] = React.useState({
    id: 0,
    edit: false,
    note: "",
  });

  const handleClickOpen = (dialogName) => {
    setOpen({ ...open, [dialogName]: true });
  };

  const handleClose = (dialogName) => {
    setOpen({ ...open, [dialogName]: false });
    setDialogData({ note: "", uid: "" });
  };

  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <Dialog
          open={open["newNote"]}
          onClose={() => {
            handleClose("newNote");
          }}
        >
          <DialogTitle>Add a new note</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a new note to this user, simply type in the note below.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="note"
              label="New Note"
              type="text"
              fullWidth
              value={tempDialogData.note || ""}
              onChange={(e) =>
                setDialogData({ ...tempDialogData, note: e.target.value })
              }
            />
            <DialogActions>
              <Button
                onClick={() => {
                  handleClose("newNote");
                }}
                color="primary"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  var noteIDs = [];
                  cardData.notes.forEach((note) => {
                    noteIDs.push(note.id);
                  });
                  const today = new Date();
                  setCardData({
                    ...cardData,
                    notes: [
                      ...cardData.notes,
                      {
                        id: parseInt(Math.max(...noteIDs)) + 1,
                        text: tempDialogData.note,
                        timestamp:
                          today.getDate() +
                          "-" +
                          parseInt(today.getMonth() + 1) +
                          "-" +
                          today.getFullYear(),
                        staffuid: "1237192371298731",
                      },
                    ],
                  });
                  handleClose("newNote");
                }}
                color="primary"
                autoFocus
              >
                Add
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
        <Dialog
          open={open["confirmDelete"]}
          onClose={() => {
            handleClose("confirmDelete");
          }}
        >
          <DialogTitle>Are you sure you want to delete this note?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Deleting this note is a non-reversible action. It cannot be
              recovered.
            </DialogContentText>
            <DialogActions>
              <Button
                onClick={() => {
                  handleClose("confirmDelete");
                }}
                color="primary"
              >
                Nah
              </Button>
              <Button
                onClick={() => {
                  const prevState = { ...cardData.notes };
                  const myKeys = Object.keys(prevState);

                  var newKeys = myKeys.filter(
                    (item) => myKeys.indexOf(item) !== tempDialogData.idx
                  );

                  var matchingValues = newKeys.map((key) => {
                    return prevState[key];
                  });

                  setCardData({
                    ...cardData,
                    notes: matchingValues,
                  });
                  handleClose("confirmDelete");
                }}
                color="primary"
                autoFocus
              >
                Sure!
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
        <Card className={classes.cardDesign}>
          <CardContent>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Grid item>
                <Grid container direction="row" alignItems="center">
                  <IconButton
                    size="medium"
                    onClick={() => {
                      props.setNotesTransition(false);
                    }}
                  >
                    <ArrowBack fontSize="inherit" />
                  </IconButton>
                  <Typography variant="h5">{cardData.name}</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <IconButton
                  size="medium"
                  onClick={() => {
                    handleClickOpen("newNote");
                  }}
                >
                  <Add fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>
            {cardData.notes.map((note, index) => (
              <Table key={note.id}>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => {
                          const userId = cardData.uid;
                          const prevState = { ...collapseOpen[userId] };

                          const data = {
                            ...prevState,
                            [note.id]: !prevState[note.id],
                          };

                          setCollapseOpen({
                            ...collapseOpen,
                            [userId]: data,
                          });
                        }}
                      >
                        {collapseOpen[cardData.uid][note.id] ? (
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
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={6}
                    >
                      <Collapse
                        in={collapseOpen[cardData.uid][note.id]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Table size="small" aria-label="notes">
                          <TableBody>
                            {editInformation["edit"] &&
                            editInformation["id"] === note.id ? (
                              <TableCell>
                                <IconButton
                                  onClick={() => {
                                    setEditInformation({
                                      id: 0,
                                      edit: false,
                                      note: "",
                                    });
                                  }}
                                >
                                  <Cancel />
                                </IconButton>
                                <IconButton
                                  onClick={() => {
                                    const prevState = [...cardData.notes];
                                    prevState[index]["text"] =
                                      editInformation["note"];

                                    setCardData({
                                      ...cardData,
                                      notes: prevState,
                                    });

                                    setEditInformation({
                                      id: 0,
                                      edit: false,
                                      note: "",
                                    });
                                  }}
                                >
                                  <Check />
                                </IconButton>
                              </TableCell>
                            ) : (
                              <TableCell>
                                <IconButton
                                  onClick={() => {
                                    setDialogData({
                                      ...tempDialogData,
                                      idx: index,
                                    });
                                    handleClickOpen("confirmDelete");
                                  }}
                                >
                                  <Delete />
                                </IconButton>
                                <IconButton
                                  onClick={() => {
                                    setEditInformation({
                                      id: note.id,
                                      edit: true,
                                      note: note.text,
                                    });
                                  }}
                                >
                                  <Edit />
                                </IconButton>
                              </TableCell>
                            )}

                            <TableCell width="70%">
                              {editInformation["edit"] &&
                              editInformation["id"] === note.id ? (
                                <TextField
                                  value={editInformation["note"]}
                                  fullWidth={true}
                                  multiline={true}
                                  InputProps={{
                                    classes: {
                                      input: classes.resize,
                                    },
                                  }}
                                  onChange={(e) =>
                                    setEditInformation({
                                      ...editInformation,
                                      note: e.target.value,
                                    })
                                  }
                                />
                              ) : (
                                <Typography>{note.text}</Typography>
                              )}
                            </TableCell>
                          </TableBody>
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            ))}
          </CardContent>
        </Card>
      </div>
    </Grid>
  );
}

export default NotesSubsection;
