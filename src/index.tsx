import React from 'react';

const onClick = (name: any) => {
  window.alert(`hi~~ ${name}`);
};
const SayHello = ({ name }: { name: string }): JSX.Element => (
  <>
    <div>Hey {name}, say hello to TypeScript npm test !!!!.</div>
    <button
      onClick={() => {
        onClick(name);
      }}
    >
      click me
    </button>
  </>
);

export default SayHello;
