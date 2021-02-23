import React from 'react';
import logo from './logo.svg';
import './App.css';

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
export default App;
