import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Input from './Input';
import WidthWindow from './WidthWindow';
import { useWidthResize } from './hooks/useWidthResize';
import { useInputForm } from './hooks/useInputForm';
import { useDocumentTitle } from './hooks/useDocumentTitle';

const FormWithHooks = () => {
  const nameInput = useInputForm('Com hooks');
  const surNameInput = useInputForm('');
  const width = useWidthResize();
  useDocumentTitle(nameInput.value);

  return (
    <Card>
      <CardHeader title="Form With Hooks" />
      <CardContent>
        <Input label="Name" {...nameInput} />
        <Input label="Surname" {...surNameInput} />
        <WidthWindow width={width} />
      </CardContent>
    </Card>
  );
};

FormWithHooks.propTypes = {};

const useStyles = makeStyles({});

export default FormWithHooks;
