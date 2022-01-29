import React from 'react';
import Form from './components/Form';
import ProviderContext from './context/ProviderContext';

class App extends React.Component {
  render() {
    return (
      <main>
        <ProviderContext>
          <h1>Tryunfo</h1>
          <Form />
        </ProviderContext>
      </main>
    );
  }
}

export default App;
