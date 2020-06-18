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

function Monitor() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [tempDialogData, setDialogData] = React.useState({ note: "", uid: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInformation = () => {
    setMonitors((prevState) => {
      const data = [...prevState.data];
      data.push({
        name: "Name",
        uid: tempDialogData.uid,
        note: tempDialogData.note,
        kicks: 0,
      });
      setDialogData({ note: "", uid: "" });
      return { ...prevState, data };
    });
    setOpen(false);
  };

  const [monitors, setMonitors] = React.useState({
    columns: [
      { title: "User Name", field: "name" },
      { title: "User ID", field: "uid" },
      { title: "Quick Note", field: "note" },
      { title: "Number Of Kicks", field: "kicks" },
    ],
    data: [
      {
        name: "Nope",
        uid: 123187410923847,
        note: "for being so cute",
        kicks: 0,
      },
      {
        name: "Confuzz",
        uid: 123187410923847,
        note: "for being so cute",
        kicks: 0,
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
              To add a user to the monitor list, please enter the user id
              followed by a quick note.
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
              title="Monitor List"
              columns={monitors.columns}
              data={monitors.data}
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        setMonitors((prevState) => {
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
                      setMonitors((prevState) => {
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
      </div>
    </Grid>
  );
}

export default Monitor;
