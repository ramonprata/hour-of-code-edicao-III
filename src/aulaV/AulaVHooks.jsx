import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import FormNoHooks from './FormNoHooks';
import FormWithHooks from './FormWithHooks';
import Controls from './Controls';
import { ThemeContext } from '../App';
import { Card, FormControlLabel, Switch } from '@material-ui/core';

const AulaVHooks = (props) => {
  const { darkMode, handleSwitchDarkMode } = props;
  const [formSelected, setFormSelected] = useState('both');

  function handleFormChange(e) {
    setFormSelected(e.target.value);
  }

  const theme = useContext(ThemeContext);
  const classes = useStyles(theme);

  // passa Switch como props para controls renderizar (composição usando component as props: customControls)
  const renderSwitchDarckMode = () => {
    return (
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={handleSwitchDarkMode}
            name="enebledDarkMode"
            color="primary"
          />
        }
        label="Dark mode"
      />
    );
  };

  return (
    <div className={classes.container}>
      <Controls
        handleFormChange={handleFormChange}
        formSelected={formSelected}
        customControls={renderSwitchDarckMode()}
      />
      <div className={classes.formsContainer}>
        {(formSelected === 'noHooks' || formSelected === 'both') && <FormNoHooks />}
        {(formSelected === 'hooks' || formSelected === 'both') && <FormWithHooks />}
      </div>
      <Card className={classes.themeContainer}>Some content with contect theme</Card>
    </div>
  );
};

AulaVHooks.propTypes = {
  darkMode: PropTypes.bool,
};

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
  formsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 24,
    width: '100%',
    justifyContent: 'space-between',
  },
  themeContainer: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    height: 64,
    backgroundColor: theme.background,
    color: theme.foreground,
  }),
});

export default AulaVHooks;
