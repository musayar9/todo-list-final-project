
import './App.css';
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 ">
    <h1 className='text-5xl font-semibold underline text-white italic'>Todo List</h1>
     <TodoList/>
    </div>
  );
}

export default App;
