import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import MaterialTable from "material-table";
import {
  Dialog,
  DialogTitle,
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
  Table,
  Stepper,
  Step,
  StepLabel,
  Avatar,
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

const useStyles = makeStyles((theme) => ({
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
  avatarCard: {
    margin: 10,
  },
  stepperText: {
    paddingBottom: 20,
  },
  stepperButton: {
    marginRight: theme.spacing(1),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
  monospace: {
    fontFamily: "Roboto Mono",
  },
}));

function Notes() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [tempDialogData, setDialogData] = React.useState({ note: "", uid: "" });
  const [notesTransition, setNotesTransition] = React.useState(false);
  const [cardData, setCardData] = React.useState({});

  const [editInformation, setEditInformation] = React.useState({
    id: 0,
    edit: false,
    note: "",
  });

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["Enter User ID", "User Info", "Add Note"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [collapseOpen, setCollapseOpen] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogData({ note: "", uid: "" });
    setActiveStep(0);
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
    setActiveStep(0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <TextField
            autoFocus
            margin="dense"
            id="uid"
            label="User ID"
            type="tel"
            fullWidth
            className={classes.stepperText}
            value={tempDialogData.uid || ""}
            onChange={(e) =>
              setDialogData({ ...tempDialogData, uid: e.target.value })
            }
          />
        );
      case 1:
        return (
          <Card className={classes.avatarCard}>
            <CardContent>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
              >
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Avatar alt="username" className={classes.large}>
                      H
                    </Avatar>

                    <Typography className={classes.monospace}>
                      RandomName
                    </Typography>
                    <Typography className={classes.monospace}>#1691</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="stretch"
                  >
                    <div className={classes.avatarCard}>
                      <Typography className={classes.monospace}>
                        User ID:
                      </Typography>
                      <Typography>{tempDialogData.uid}</Typography>
                    </div>
                    <div className={classes.avatarCard}>
                      <Typography className={classes.monospace}>
                        User Nick Name:
                      </Typography>
                      <Typography>RandomNickname</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      case 2:
        return (
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
        );
      default:
        return "Unknown step";
    }
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
            id: 1,
            text: "Note 1",
            timestamp: "2020-06-11",
            staffuid: "1237192371298731",
          },
          {
            id: 2,
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
            id: 1,
            text: "Note 1",
            timestamp: "2020-06-11",
            staffuid: "1237192371298731",
          },
          {
            id: 2,
            text: "Note 2",
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
              To add a user note, please enter the user ID and the note.
            </DialogContentText>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};

                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {getStepContent(activeStep)}

              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.stepperButton}
                >
                  Back
                </Button>

                {activeStep !== steps.length - 1 ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.stepperButton}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleInformation}
                    className={classes.stepperButton}
                  >
                    Finish
                  </Button>
                )}

                <Button onClick={handleClose} className={classes.stepperButton}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
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
              {cardData.notes.map((note, index) => (
                <Table>
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
                      <TableCell>
                        {"Last edited by: " + note.staffuid}
                      </TableCell>
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
                                      const prevState = { ...cardData.notes };
                                      const myKeys = Object.keys(prevState);

                                      var newKeys = myKeys.filter(
                                        (item) => myKeys.indexOf(item) !== index
                                      );

                                      var matchingValues = newKeys.map(
                                        (key) => {
                                          return prevState[key];
                                        }
                                      );

                                      setCardData({
                                        ...cardData,
                                        notes: matchingValues,
                                      });
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
                  rowData.notes.forEach((note) => {
                    const userId = rowData.uid;

                    const newData = {
                      ...collapseOpen.userId,
                      [note.id]: false,
                    };

                    setCollapseOpen({ [userId]: newData });
                  });
                  setNotesTransition(true);
                }}
                editable={{
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
