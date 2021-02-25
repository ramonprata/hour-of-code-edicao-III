import { Grid } from '@material-ui/core';

const WidthWindow = ({ width }) => {
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <>
        <label htmlFor="">Width window:</label> <span style={{ padding: '0 10px' }}>{width}</span>
      </>
    </Grid>
  );
};

export default WidthWindow;
