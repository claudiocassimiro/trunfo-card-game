import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
import ProviderContext from './context/ProviderContext';
import Main from './AppStyle';

class App extends React.Component {
  render() {
    return (
      <Main>
        <ProviderContext>
          <Form />
          <Card />
          <CardList />
        </ProviderContext>
      </Main>
    );
  }
}

export default App;
