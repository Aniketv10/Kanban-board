import React from 'react';
import List from './List';

const Kanban = () => {
    return (
        <>
        <div style={{paddingTop:'40px'}}>
            <div>
                <h1 style={{textAlign:'center'}}>KanBan Board</h1>
            </div>
            <div>
                <List/>
            </div>
        </div>
        </>
    );
};
export default Kanban;