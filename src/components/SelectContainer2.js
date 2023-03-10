import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
function SelectContainer2() {
  const [index, setIndex] = useState('0');

  const options = [
    { value: 0, label: '리엑트' },
    { value: 1, label: '자바' },
    { value: 2, label: '스프링' },
    { value: 3, label: '리엑트 네이티브' },
  ];

  return (
    <>
      <SelectBlock>
        <h1>Select</h1>
        <Select value={index} options={options} onChange={(e) => setIndex(e)} />
      </SelectBlock>
    </>
  );
}

const SelectBlock = styled.div`
  margin-top: 50px;
  border: 2px solid rgb(221, 221, 221);
  height: 200px;
`;

// const Select = styled.select`
//   width: 250px;
//   height: 50px;

//   padding: 10px;
//   background-color: white;
//   border-radius: 10px;
// `;
export default SelectContainer2;
