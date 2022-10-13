import React from 'react'
import logo from './logo.png'
import './index.css'
import Counter from './Counter';
const App = () => {
    return (
        <>
            <h1>hello config</h1>
            <h2>{process.env.NODE_ENV}</h2>
            <h3>{process.env.NAME}</h3>
            {/* <img src={logo} /> */}
            <Counter />
        </>
    );
}

export default App;