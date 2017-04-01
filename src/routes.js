import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import App from './components/app';
import ExerciseList from './components/exercise_list';

const Greeting = () => {
  return <div>Hey There!</div>;
};

export default(
  <BrowserRouter>
    <App>
      <Route path="/" exact={true} component={ExerciseList}/>
      <Route path="/greet" component={Greeting}/>
    </App>
  </BrowserRouter>
);
