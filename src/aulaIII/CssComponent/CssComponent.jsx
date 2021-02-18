import React from 'react';
import './componentStyles.css';

const CssComponent = (props) => {
  const { isActive } = props;

  return (
    <div className="my-style-with-css">
      <header>CssStyles</header>
      <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
      <b className={!isActive ? 'flag' : ''}>Is Active</b>
    </div>
  );
};

export default CssComponent;
