import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Input from './Input';
import { useState, useEffect } from 'react';
import WidthWindow from './WidthWindow';

const FormWithHooks = (props) => {
  const classes = useStyles(props);
  const [width, setWidth] = useState(window.innerWidth);

  const [name, setName] = useState('Com Hooks');
  const [surname, setSurName] = useState('');

  useEffect(() => {
    document.title = name;
  }, [name]);

  const handleWidthResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleWidthResize);
    return () => {
      window.removeEventListener('resize', handleWidthResize);
    };
  }, [width]);

  return (
    <Card>
      <CardHeader title="Form With Hooks" />
      <CardContent>
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Surname" value={surname} onChange={(e) => setSurName(e.target.value)} />
        <WidthWindow width={width} />
      </CardContent>
    </Card>
  );
};

FormWithHooks.propTypes = {};

const useStyles = makeStyles({});

export default FormWithHooks;
