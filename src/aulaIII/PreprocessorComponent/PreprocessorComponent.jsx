import React from 'react';
import './componentStyles.scss';

const PreprocessorComponent = (props) => {
  const { isActive } = props;
  return (
    <div className="my-style-with-prepreocessor">
      <header>PreprocessorStyles</header>
      <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
      <b className={!isActive ? 'flag' : ''}>Is Active</b>
    </div>
  );
};

export default PreprocessorComponent;
