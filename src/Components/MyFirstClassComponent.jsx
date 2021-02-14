import React from 'react';

class MyFirstClassComponent extends React.Component {
  state = {
    estaoLocal: 'Meu estado Local',
  };

  componentDidMount() {
    // criar uma variavel no localstorage
    setTimeout(() => {
      this.setState({ estaoLocal: 'Meu estado local mudado após 5s' });
    }, 5000);
  }

  componentWillUnmount() {
    // apagar uma variavel
  }

  render() {
    return (
      <div>
        <h4>MyFirstClassComponent</h4>
        <p>{this.props.paragrafo}</p>
        <p>{this.state.estaoLocal}</p>
      </div>
    );
  }
}

export default MyFirstClassComponent;
