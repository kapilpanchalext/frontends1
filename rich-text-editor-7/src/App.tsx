import './App.css';
import RichTextEditor from './components/richTextEditor/RichTextEditor';
import log from './log';

function App() {
  log("<App /> rendered");

  return (
    <>
      <RichTextEditor layoutHeight={800} />
    </>
  )
}

export default App;