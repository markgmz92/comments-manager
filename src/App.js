import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './screen/HomePage';
import PostPage from './screen/PostPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/posts/:id' element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
