import { Routes, Route } from 'react-router-dom';
import BirthdaySlideshow from '../src/components/BirthdaySlideShow.jsx';
import Letter from '../src/components/Letter.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Letter />} />
      <Route path='/carousel' element={<BirthdaySlideshow />} />
    </Routes>
  );
}

export default App;
