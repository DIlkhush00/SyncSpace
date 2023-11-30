import Todo from "./Todo"

function Card(props) {
    
    let {todos, week} = props

    return (
        <div className="p-4 bg-leaf/75 w-[18.375rem] h-[10rem]">
            <div className="mb-3">
                {week}
            </div>
            {
                todos.map((todo, index) => <Todo key={index} todo={todo}/>)
            }
        </div>
    )
}

export default Card