import './App.css';
import './scss/app.scss';
import React from 'react';
import { Header } from './components';
import { Main, Cart } from './pages'
import { Route } from 'react-router-dom';
import axios from 'axios';

function App() {
    const [pizzas, setPizzas] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => setPizzas(data.pizzas))}, [])

  return (
    <div className="App">
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' render={() => <Main items={pizzas}/>} exact />
                <Route path='/cart' component={Cart} exact />
            </div>
        </div>
    </div>
  );
}

export default App;