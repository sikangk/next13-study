'use client'

import {useState} from "react";


function Counter() {
    const [count, setCount] = useState(1);
    console.log('클라이언트 컴포넌트');
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>
                숫자증가시키기
            </button>
        </>
    )
}

export default Counter;
