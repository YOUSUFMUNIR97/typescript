import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';
import Input from './Components/Input';
import Selected from './Components/Selected';

function App() {

  const [buttontext, buttontextnew] = useState("New");
  const [text, setbuttontext] = useState("")
  const [selecttext, setSelectText] = useState("");

  let first = () => {
    console.log("Hello World")
  }

  let changebtn = (text: any) => {
    buttontextnew(text)
  }

  let users = [
    {
      id: 1,
      name: "abc",
      age: 20,
      institute: "SAIMS",
      isActive: "true",
    },
    {
      id: 2,
      name: "def",
      age: 24,
      institute: "SAIMS",
      isActive: "false",
    },
    {
      id: 3,
      name: "wewe",
      age: 22,
      institute: "SAIMS",
      isActive: "true",
    },
    {
      id: 4,
      name: "dffgf",
      age: 21,
      institute: "SAIMS",
      isActive: "true",
    },
    {
      id: 5,
      name: "eerte",
      age: 21,
      institute: "SAIMS",
      isActive: "true",
    },
  ]

  let gettext = (e: any) => {
    console.log(e.target.value)
    setbuttontext(e.target.value)
    console.log(text)
  }

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setSelectText(e.target.value);
  }


  return (
    <div className='main'>
      {/* ==================Button============= */}
      <div className='button'>
        <h1>Button</h1>
        <Button onClick={first} ButtonValue="First" />
        <Button onClick={() => { changebtn("NewButton") }} ButtonValue={buttontext} />
      </div>

      {/* ==================Card============= */}
      <div >
        <h1>Card</h1>
        <Card cardValue={users.map((value, i) => {
          return (
            <>
              <p key={i}>
                <p>Id: {value.id}</p>
                <p>Name: {value.name}</p>
                <p>Age: {value.age}</p>
              </p>
            </>
          )
        })} />
      </div>

      {/* ==================Input============= */}
      <div>
        <h1>Input</h1>
        <Input inputValue={gettext} />
        <p>{text}</p>
      </div>

      {/* ==================Selected============= */}
      <Selected
        selectchange={handleChange}

        label='Gender'
        option={[
          {
            value: "Male",
            displayName: "Male"
          },
          {
            value: "female",
            displayName: "female"
          }
        ]}
      />
      {selecttext}

    </div>
  );
}

export default App;
