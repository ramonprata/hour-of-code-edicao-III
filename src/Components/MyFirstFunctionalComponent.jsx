import { useState, useEffect } from 'react';

const MyFirstFunctionalComponent = (props) => {
  const [estadoLocal, setestadoLocal] = useState('Functional component estado local');

  useEffect(() => {
    setTimeout(() => {
      setestadoLocal('Functional component estado local - modificado após 5s');
    }, 5000);
  }, []);

  return (
    <div>
      <h4>MyFirstFunctionalComponent</h4>
      {/* renderiza alguma props recebida */}
      <p>{props.paragrafo}</p>

      {/* renderização condicionada ao estado local */}
      {estadoLocal && <p>{estadoLocal}</p>}
    </div>
  );
};
export default MyFirstFunctionalComponent;
