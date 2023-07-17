import './App.css';
import image from './pic1.jpeg';
import imageTwo from './pic2.jpg';
import { TodoList } from './TodoList';



function App() {
  return (
    <div className="App">
          <div className='container'>
          <img src={image} width="250px" alt='picture1' />
          </div>
          <div className='container'>
          <h1>To Do List</h1>
          </div>
          <TodoList/>
          <div className='container'>
          <img src={imageTwo} width="300px" alt='picture2' />
          </div>
    </div>
  );
}

export default App;
