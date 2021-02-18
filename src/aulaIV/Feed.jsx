import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { paletteColors } from '../shared/consts';

const Feed = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <header>Feed</header>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante
          blandit hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num morreus.
          Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota
          uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os
          porris que eu tomo, mas ninguém vê os tombis que eu levo! Mais vale um bebadis
          conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. A ordem
          dos tratores não altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum
          diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu reclamis. Nec orci
          ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
        </p>
      </div>
    </div>
  );
};

Feed.propTypes = {};

const useStyles = makeStyles({
  container: {
    minHeight: '20vh',
    minWidth: '20vw',
    justifySelf: 'center',
    backgroundColor: paletteColors.tertiary,
  },
  content: {
    padding: 8,
    maxWidth: '30vw',
    maxHeight: 300,
    overflowX: 'auto',

    '-moz-box-shadow': 'inset 0 0 10px #000000',
    '-webkit-box-shadow': 'inset 0 0 10px #000000',
    'box-shadow': 'inset 0 0 10px #000000',
  },
});

export default Feed;
