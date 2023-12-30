import Todo from "./Todo"
import Toggle from "./Toggle_button"
function Card(props) {
    
    let {todos, week} = props

    return (
        <div className="p-4 bg-leaf/75 w-[18.375rem] h-[10rem]">
            <div className="mb-3">
                <Toggle/>
                {week}
                
            </div>
            {
                todos.map((todo, index) => <Todo key={index} todo={todo}/>)
            }
        </div>
    )
}

export default Card