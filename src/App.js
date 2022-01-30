import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import ProviderContext from './context/ProviderContext';

class App extends React.Component {
  render() {
    return (
      <main>
        <ProviderContext>
          <h1>Tryunfo</h1>
          <Form />
          <Card />
          <CardList />
        </ProviderContext>
      </main>
    );
  }
}

export default App;
