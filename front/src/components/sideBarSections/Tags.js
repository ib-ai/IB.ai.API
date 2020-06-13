import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import MaterialTable from "material-table";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

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
import { Typography } from "@material-ui/core";
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
    fontSize: 14,
  },
});

function Tags() {
  const classes = useStyles();

  const [tags, setTags] = React.useState({
    columns: [
      { title: "Tag Trigger", field: "trigger" },
      {
        title: "Tag Result",
        field: "result",
        render: (rowData) => {
          return (
            <Typography className={classes.resize}>{rowData.result}</Typography>
          );
        },
        editComponent: (props) => (
          <TextField
            value={props.value}
            fullWidth={true}
            multiline={true}
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            onChange={(e) => props.onChange(e.target.value)}
          />
        ),
      },
      {
        title: "Tag Disable",
        field: "disable",
        type: "boolean",
        render: (rowData) => {
          return <Checkbox disabled checked={rowData.disable} />;
        },
        editComponent: (props) => (
          <Checkbox
            checked={props.value || false}
            onChange={(e) => props.onChange(e.target.checked)}
          />
        ),
      },
    ],
    data: [
      { trigger: "Mehmet", result: "Baran", disable: true },
      {
        trigger: "Zerya Betül",
        result: "Baran",
        disable: false,
      },
    ],
  });

  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <div className={classes.root}>
        <Card className={classes.cardDesign}>
          <CardContent>
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
              title="Tag List"
              columns={tags.columns}
              data={tags.data}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setTags((prevState) => {
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
                        setTags((prevState) => {
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
                      setTags((prevState) => {
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

export default Tags;
