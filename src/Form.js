
function Form(props) {

    return (
        <div className='row'>
        <from>
            <input type="text"
                   value={props.text}
                   onChange={(e) => props.setText(e.target.value)}/>
            <button onClick={props.handleAddToto}>
                Добавить
            </button>
            <input type="checkbox" checked={props.check} onChange={props.handleCheck}/>
        </from>
        </div>
    );
}

export default Form;