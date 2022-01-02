import React, { useState } from 'react';



const Controls = () => {
    const [inputVal , setInputVal] = useState('');

    const onChangeHandler = (e) => {
        setInputVal(e.target.value);
    }
     return (
        <>
        <div style={{paddingTop:'20px',backgroundColor:'greenyellow',paddingBottom:'10px'}}>
            <div>
                <h1 style={{textAlign:'center'}}>Controls</h1>
            </div>
            <div style={{paddingLeft:'20px'}}>
                <input type="input" value={inputVal} onChange={onChangeHandler}/>
                <button>Create</button><br/>
                <input type="input" disabled/>
                <button>Move Back</button>
                <button>Move Forword</button>
                <button>Delete</button>
            </div>
        </div>    
        </>
    )
}
export default Controls;