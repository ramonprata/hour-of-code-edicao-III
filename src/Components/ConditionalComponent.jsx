import { ComponentA, ComponentB, Button, TextInput } from '.';

const ConditionalComponent = (props) => {
  return (
    <div className="container">
      <h6>Conditional component</h6>
      <ComponentA />
      <ComponentB />
      <TextInput />
      <Button />
    </div>
  );
};

export default ConditionalComponent;
