
import './App.css';
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
    <h1 className='text-3xl font-bold text-gray-500'>Todo App</h1>
     <TodoList/>
    </div>
  );
}

export default App;
