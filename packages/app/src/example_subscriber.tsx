import React, { Component, MouseEvent } from 'react';
import { observer, inject } from 'mobx-react';

interface Props {
    number: number;
    increase: (e?: MouseEvent) => void;
    decrease: (e?: MouseEvent) => void;
}

// **** 함수형태로 파라미터를 전달해주면 특정 값만 받아올 수 있음.
@inject((stores: any) => ({
    number: stores.rootStore.number,
    increase: stores.rootStore.increase,
    decrease: stores.rootStore.decrease,
}))
//@inject('rootStore') I'd suggest the above way to specify subscribing props
@observer
class Counter extends Component<Props> {
    render() {
        const { number, increase, decrease } = this.props;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={(e) => increase()}>+1</button>
                <button onClick={(e) => decrease()}>-1</button>
            </div>
        );
    }
}

export default Counter;
