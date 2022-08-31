import './tailwind.css';
import MessagesBar from './components/MessagesBar'
import Content from './components/Content'

function App() {
  return (
    <div className="flex">
      <MessagesBar />
      <Content />
    </div>
  );
}

export default App;
