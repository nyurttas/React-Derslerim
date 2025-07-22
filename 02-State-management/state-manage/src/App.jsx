import { useState } from 'react';
import './App.css'
import Card from './components/Card';


function App() {
  const [first,setFirst] = useState(0)
  const [second,setSecond] = useState(0);
  

  return (
    <>
      <div id="first">
        <h1>First : {first} </h1>
        <button onClick={() => {setFirst(first + 1)}}>First Increment</button>
      </div>
      <div id="seconst">
        <h1>Second : {second}</h1>
        <button onClick={() => setSecond(second + 1)}>Second Increment</button>
      </div>
      <Card />
    </>
  )
}

export default App

// const [cities,setCities] = useState(["İstanbul","Ankara"]);
  // const [firstName,setFirstName] = useState("Akın");
  // const [isActive,setIsActive] = useState(true);
  // const [user,setUser] = useState({firstname : "Akın",lastname : "Cengiz"});
  // function firstIncrement(){
  //   setFirst(first + 1);
  // }
  // function secondIncrement(){
  //   setSecond(second + 1);
  // }

  //props nedir?
  //props bir bileşene veri geçişi için kullanılır.
  //props bileşenlerin dışarıdan aldığı verilerdir.
  // state nedir?
  // state bir bileşenin içindeki verilerdir.
 // komponent nedir?
 // komponent bir bileşendir.
  // bileşen nedir?
  // bileşen bir parçadır.
  // bileşenler bir araya gelerek uygulamayı oluşturur.
  // komponent nereden miras alır?
  // komponentler react'ten miras alır.

  // bileşenler nasıl oluşturulur?
  // bileşenler fonksiyonlar veya sınıflar olarak oluşturulur.
  // bileşenler nasıl kullanılır?
  // bileşenler JSX ile kullanılır.
  // bileşenler nasıl oluşturulur?
  // bileşenler fonksiyonlar veya sınıflar olarak oluşturulur.
