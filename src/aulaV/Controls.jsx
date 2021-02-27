import React from 'react';
import { Grid, RadioGroup, Radio, FormControlLabel, Card, Switch } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const Controls = (props) => {
  const { handleFormChange, formSelected, customControls } = props;
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center" className={classes.container}>
      <Card>
        <Grid container alignItems="center">
          <RadioGroup
            className={classes.radioGroup}
            aria-label="Forms"
            name="radioforms"
            value={formSelected}
            onChange={handleFormChange}
          >
            <FormControlLabel
              value="noHooks"
              control={<Radio />}
              label="With no hooks"
              className="radioInline"
            />
            <FormControlLabel
              value="hooks"
              control={<Radio />}
              label="With hooks"
              className="radioInline"
            />
            <FormControlLabel
              value="both"
              control={<Radio />}
              label="Both"
              className="radioInline"
            />
          </RadioGroup>
          {customControls}
        </Grid>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles({
  container: {
    marginBottom: 16,
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 500,
  },
});

export default Controls;
