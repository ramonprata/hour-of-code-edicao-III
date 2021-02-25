import { TextField } from '@material-ui/core';

const Input = (props) => {
  return (
    <TextField
      component="div"
      fullWidth
      id="standard-name"
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      margin="normal"
    />
  );
};

export default Input;
