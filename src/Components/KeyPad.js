import React from 'react'
import './KeyPad.css';

function KeyPad(props) {

  const keys = [
    {
      keyCode: 103,
      label: "7",
    },

    {
      keyCode: 104,
      label: "8",
    },

    {
      keyCode: 105,
      label: "9",
    },

    {
      keyCode: 100,
      label: "4",
    },

    {
      keyCode: 101,
      label: "5",
    },

    {
      keyCode: 102,
      label: "6",
    },

    {
      keyCode: 97,
      label: "1",
    },

    {
      keyCode: 98,
      label: "2",
    },

    {
      keyCode: 99,
      label: "3",
    },

    {
      keyCode: 96,
      label: "0",
    },

    {
      keyCode: 110,
      label: "."
    },

    {
      keyCode: 13,
      label: "="
    }
  ]

  const symbols = [
    {
      keyCode: 8,
      label: "⌫",
      value: "backspace"
    },

    // {
    //   keyCode: 13,
    //   label: "=",
    //   value: "enter"
    // },

    {
      keyCode: 111,
      label: "÷",
      value: "/"
    },

    {
      keyCode: 106,
      label: "×",
      value: "*"
    },

    {
      keyCode: 109,
      label: "–",
      value: "-"
    },

    {
      keyCode: 107,
      label: "+",
      value: "+"
    }
  ]

  return (
    <div className='keypad'>
      <div className="keypad_keys">
        {
          keys.map((item, index) => <p onClick={(event) => props.handleKeyPress(item.keyCode, item.label)} key={index}> {item.label} </p>)
        }
      </div>

      <div className="keypad_symbols">
        {
          symbols.map((item, index) => {
            return (
              <p onClick={(event) => props.handleKeyPress(item.keyCode, item.value)} key={index}> {item.label} </p>
            )
          })
        }
      </div>
    </div>
  )
}

export default KeyPad; 