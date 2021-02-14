import { ComponentA, ComponentB, Button, TextInput } from '.';

const ConditionalComponent = (props) => {
  const { renderA } = props;

  // alternativa para renderizaçao condicional com função render
  const renderContent = () => {
    if (renderA) {
      return <ComponentA />;
    } else {
      return <ComponentB />;
    }
  };

  return (
    <div className="container">
      <h6>Conditional component</h6>

      {/* chamar função render para renderização condicional */}
      {/* {renderContent()} */}

      {/* renderização condicionada as props */}
      {renderA && <ComponentA />}

      <ComponentB />
      <TextInput />
      <Button />
    </div>
  );
};

export default ConditionalComponent;
