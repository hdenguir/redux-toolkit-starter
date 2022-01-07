import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementAmount
} from "./redux/slices/counterSlice";
import { getPosts } from "./redux/slices/postsSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);
  const { posts, loading, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="App">
      <h1>Redux Toolkit Starter</h1>
      <div>
        <p>
          {counter}
        </p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementAmount(10))}>+10</button>
      </div>

      <hr />

      <div>
        {loading && <p>...</p>}
        {error &&
          <p>
            {error}
          </p>}
        {posts &&
          <ul>
            {posts.map(post =>
              <li key={post.id}>
                {post.title}
              </li>
            )}
          </ul>}
      </div>
    </div>
  );
}

export default connect()(App);
