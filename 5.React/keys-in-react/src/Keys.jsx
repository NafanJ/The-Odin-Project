import { v4 as uuidv4 } from '/node_modules/.vite/deps/uuid.js?v=e63b1d0c';

const todos = [
    { task: "mow the yard", id: uuidv4() },
    { task: "work on Odin Projects", id: uuidv4() },
    { task: "feed the cat", id: uuidv4() }
]

function TodoList() {
    return (
        <ul>
            {todos.map((todo) => (
                // here we are using the already generated id as the key.
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    );
}

// If Certain List won't change, can use index

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function MonthList() {
    return (
        <ul>
            {months.map((month, index) => (<li key={index}>{month}</li>))}
        </ul>
    );
}

function NameList(){
    const names  = ['Bruce', 'Clarke', 'Diana', 'Bruce']
    const nameList = names.map(name => <h2 key={uuidv4()}>{name}</h2>)
    return <div>{nameList}</div>
}

export { TodoList, MonthList, NameList }