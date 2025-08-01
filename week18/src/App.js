import './App.css';
//import useLikeStore from './store/store';
import useLikeStore from './store/store_copy';

function App() {
    const {count, increment, decrease, reset} = useLikeStore();
  return (
    <div>
        <button className='likeButton' onClick={increment}>
            ❤️ {count}
        </button>

        <button className='likeButton' onClick={increment}>
            증가
        </button>
        <button className='likeButton' onClick={decrease}>
            감소
        </button>
        
        <button onClick={reset}>초기화</button>
    </div>
  );
}

export default App;
