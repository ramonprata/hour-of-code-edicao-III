const Button = () => {
  const handleClick = () => {
    alert('Clicked');
  };

  return (
    <button className="button" onClick={handleClick}>
      Click me
    </button>
  );
};

export default Button;
