import React from 'react';

class MyFirstClassComponent extends React.Component {
  state = {
    estaoLocal: 'Class component estado local',
  };

  // lifecycle executado quando o componente é montado
  componentDidMount() {
    // criar uma variavel no localstorage
    setTimeout(() => {
      this.setState({ estaoLocal: 'Class component estado local - modificado após 5s' });
    }, 5000);
  }

  // lifecycle executado quando o componente é desmontado
  componentWillUnmount() {
    // apagar uma variavel no localstorage
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
