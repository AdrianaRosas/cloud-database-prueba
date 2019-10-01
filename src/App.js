import React from 'react';
import {Container} from 'reactstrap';
import Title from './Components/Title'
import Todos from './Components/Todos';

function App() {
  return (
    <div className="App">
      <Container>
        <Title />
        <Todos />
      </Container>
    </div>
  );
}

export default App;
