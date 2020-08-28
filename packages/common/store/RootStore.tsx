import { observable, reaction, computed, autorun, action, transaction } from 'mobx';

const calculator = observable({
    a: 1,
    b: 2,
});

// **** 특정 값이 바뀔 때 특정 작업 하기!
reaction(() => calculator.a, (value, reaction) => {
      console.log(`a 값이 ${value} 로 바뀌었네요!`);
    }
  );
  
  reaction(() => calculator.b, value => {
      console.log(`b 값이 ${value} 로 바뀌었네요!`);
  }
);

calculator.a = 10;
  calculator.b = 20;