import React, { useState, useEffect } from 'react';

//Component LADS
import Header from './Header';
import PizzaForm from './PizzaForm';
import PizzaList from './PizzaList';

const pizzaAPI = 'http://localhost:3001/pizzas';

function App() {
  const [za, setZa] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(pizzaAPI)
      .then((r) => r.json())
      .then((zaData) => {
        setZa(zaData);
      });
    console.log(za);
  }, []);

  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList za={za} />
    </>
  );
}

export default App;
