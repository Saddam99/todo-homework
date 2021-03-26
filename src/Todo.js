import React from 'react';

function Todo(props) {

    return (
            <div className="row">
                <div className='col-7'>
                    <div className='todo'>
                        <input
                            type="checkbox"
                            checked={props.todo.done}
                        />
                            {props.todo.text}
                    </div>
                </div>
            </div>
    );
}

export default Todo;