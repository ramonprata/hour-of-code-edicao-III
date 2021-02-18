import React from 'react';
import classes from './componentStyles.module.css';

const CssModuleComponent = (props) => {
  const { isActive } = props;
  const { container, flag, activeFlag } = classes;
  return (
    <div className={container}>
      <header>CssModules</header>
      <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
      <b className={isActive ? activeFlag : flag}>Is Active</b>
    </div>
  );
};

export default CssModuleComponent;
