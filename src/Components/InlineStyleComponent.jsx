import React from 'react';

const InlineStyleComponent = (props) => {
  const { isActive } = props;

  return (
    <div
      style={{
        padding: '8px 0',
        backgroundColor: '#9d7ce2',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        color: '#fff',
        filter: 'brightness(90%)',
        borderRadius: 4,
      }}
    >
      <header style={{ fontWeight: 'bold' }}>InlineStyles</header>
      <p
        style={{
          fontSize: 16,
          filter: 'brightness(100%)',
        }}
      >
        Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.
      </p>
      <b style={{ color: isActive ? '#fff' : '#bbb' }}>Is Active</b>
    </div>
  );
};

export default InlineStyleComponent;
