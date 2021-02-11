import { ComponentA, ComponentB } from '.';
import { Button } from './Button';
import { TextInput } from './TextInput';

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
