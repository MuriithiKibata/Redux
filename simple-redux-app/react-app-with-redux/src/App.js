
import './App.css';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import {increment ,decrement } from './counterSlice';
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
<h2>{count}</h2>
      <Button
      size='small'
      color='success'
      variant='contained'
      onClick={() => dispatch(increment())}
      sx={{
        margin: 3 
      }}
      >
        Increase
      </Button>
      <Button
      size='small'
      color='error'
      variant='contained'
      onClick={() => dispatch(decrement())}>
        Decrease
      </Button>
      
    </div>
  );
}

export default App;
