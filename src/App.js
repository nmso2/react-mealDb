import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Restaurants from './components/Restaurants/Restaurants';
import About from './components/About/About';
import Meals from './components/Meals/Meals';
import Meal from './components/Meal/Meal';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Restaurants>
            </Restaurants>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/meals">
            <Meals></Meals>
          </Route>
          <Route path="/meals/:mealId">
            <Meal></Meal>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
