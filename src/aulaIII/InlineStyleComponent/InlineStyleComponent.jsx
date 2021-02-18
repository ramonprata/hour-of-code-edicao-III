import React, { useState } from 'react';

const InlineStyleComponent = (props) => {
  const [isHover, setHover] = useState(false);
  const { isActive } = props;

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        padding: '8px 0',
        backgroundColor: '#9d7ce2',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.4s',
        color: '#fff',
        filter: isHover ? 'brightness(100%)' : 'brightness(90%)',
        borderRadius: 4,
        border: isHover ? 'solid 2px #fff' : 'solid 2px #9d7ce2',
        transform: isHover ? 'scale(1.05)' : 'unset',
        boxShadow: isHover ? '0 8px 16px 0 rgba(0, 0, 0, 0.7)' : 'unset',
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
