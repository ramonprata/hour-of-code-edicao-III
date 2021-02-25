import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Input from './Input';
import WidthWindow from './WidthWindow';

class FormNoHooks extends React.Component {
  state = {
    name: 'Ramon',
    surname: '',
    width: 0,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleReziseWidth);
    this.setDocumentTitle('Sem Hooks');
  }

  componentDidUpdate(prevProps, prevState) {
    this.setDocumentTitle(this.state.name);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleReziseWidth);
  }

  setDocumentTitle = (name) => {
    document.title = name;
  };
  handleReziseWidth = () => {
    this.setState({ width: window.innerWidth });
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSurnameChange = (e) => {
    this.setState({
      surname: e.target.value,
    });
  };

  render() {
    return (
      <Card>
        <CardHeader title="Form With NO Hooks" />
        <CardContent>
          <Input label="Name" value={this.state.name} onChange={this.handleNameChange} />
          <Input label="Surname" value={this.state.surname} onChange={this.handleSurnameChange} />
          <WidthWindow width={this.state.width} />
        </CardContent>
      </Card>
    );
  }
}
export default FormNoHooks;
