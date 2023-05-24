import Helloworld from './components/Helloworld';
import './App.css';

function App() {
  const name = 'My Friend';
  return (
    <>
      <Helloworld name={name} />
    </>
  );
}

export default App;
