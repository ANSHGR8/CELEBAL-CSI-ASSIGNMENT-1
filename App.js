import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Form';

const Success = ({ location }) => {
  const { formData } = location.state;

  return (
    <div>
      <h1>Form Submitted Successfully!</h1>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  );
};

export default App;
