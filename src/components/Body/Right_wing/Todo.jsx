import { useState } from "react"

function Todo(props) {
    
    const {todo} = props
    const [checked, setChecked] = useState(todo.check);
    const toggleCheck = () => setChecked(!checked)
    return (
        <div className="ml-4 flex gap-3">
            <input type="checkbox" defaultChecked={checked} onChange={toggleCheck}/>
            <p className={checked?'line-through':''}>{todo.time}  <span className="pl-4">{todo.task}</span></p>
        </div>
    )
}

export default Todo