import {useState} from "react";
import Form from "./Form";
import Todos from "./Todos";
import './index.css';

function App() {
    const [todos, setTodos] = useState([{}]);
    const [text, setText] = useState('');
    const [check, setCheck] = useState(false)

    const handleAddToto = () => {
        setTodos([
            {
                text: text,
                done: check
            },
            ...todos
        ])
        setText('')
    }

    const handleCheck = () => {
        setCheck(!check)
    }



    return (
        <div className='container w-50'>
              <Form
                  text={text}
                  setText={setText}
                  handleAddToto={handleAddToto}
                  handleCheck={handleCheck}
                  check={check}/>
              <Todos todos={todos} />
       </div>
    );
}

export default App;