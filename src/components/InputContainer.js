import React, { useState } from 'react';
import styled from 'styled-components';
import Custombutton from './CustomButton';
import { MEDIUM } from './CustomButton';

const InputFrom = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

const Input = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
`;

function InputContainer() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const onSubmitEvent = (event) => {
    event.preventDefault();
    alert(`${name} , ${price}`);
    console.log(name);
    console.log(price);
  };

  const changeEntredNum = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(',', ''));
    setPrice(removedCommaValue.toLocaleString());
  };

  return (
    <>
      <InputFrom onSubmit={(event) => setPrice(onSubmitEvent(event))}>
        <div>
          <label>이름</label>
          <Input
            value={name}
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></Input>
        </div>
        <div>
          <label>가격</label>
          <Input value={price} type="text" onChange={changeEntredNum}></Input>
        </div>
        <div>
          <Custombutton cusStyle={MEDIUM}>저장</Custombutton>
        </div>
      </InputFrom>
    </>
  );
}

export default InputContainer;
