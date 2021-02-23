import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const nayiok = ['Tanjin', 'Tuhin'];
  const nayika = ['Maria', 'Monisa'];

  const products = [
    {name: 'Photoshop', price: '$89.60'},
    {name: 'Illustrator', price: '$60.25'},
    {name: 'PDF Reader', price: '$9.20'},
    {name: 'CD', price: '$69.66'},
  ]

  var person = {
    name: "Mahfuz",
    job: "singer",
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow',
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        <Person name={nayiok[0]} gf={nayika[0]}></Person>
        <Person name={nayiok[1]} gf={nayika[1]}></Person>
        <Person></Person>
        <Person></Person>

        {
          nayiok.map(nayiok => <li>{nayiok}</li>)
        }

        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>

        

        <h1 style={style}>My Heading: {(3+5)*2}</h1>
        <p style={{color: 'cyan', backgroundColor: 'black',}}>My first Paragraph {person.name+ " "+ person.job}</p>
      </header>
    </div>
  );
}

function Person(props){

  const personStyle={
    border: '2px solid red',
    margin: '10px',
  }
  return(
    <div>
      <h1>Sakib Al Hasan</h1>
      <p>Best of the Year</p>
      <div style={personStyle}>
        <h1>Name : {props.name}</h1>
        <p>Wife : {props.gf}</p>
      </div>
      
    </div>
  )
}



function Product(props) {
  const productStyle = {
    height: '200px',
    width: '200px',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    float: 'left',
  }

  const {name, price} = props.product;

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count+1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
