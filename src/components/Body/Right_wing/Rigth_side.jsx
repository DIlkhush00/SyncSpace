import Empty from "./Empty"
import Card from "./Todo_Card"
import details from "./todo_data"

function Right_wing() {

    return (
        <div className="p-5 flex-1 text-white bg-primary border-l-2 border-gry">
            <div className="text-2xl mb-11">Lorem Ipsum</div>
            <div className="flex">
                <div className="flex flex-1/2 flex-wrap gap-11">
                    <Card todos = {details} week="💚 Monday"/>
                    <Card todos = {details} week="💚 Monday"/>
                    <Card todos = {details} week="💚 Monday"/>
                    <Card todos = {details} week="💚 Monday"/>
                    <Card todos = {details} week="💚 Monday"/>
                </div>
                <Empty />
            </div>
        </div>
    )
}

export default Right_wing