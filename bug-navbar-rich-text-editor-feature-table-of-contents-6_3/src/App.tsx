import './App.css';
import log from './log';
import RichTextEditor from './components/richtexteditor/RichTextEditor';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import RootLayout from './components/rootlayout/RootLayout';

function App() {
  log("<App /> rendered");
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: '',
      children: [
        {
          path: '/',
          element: <Navigate to="/richtext" replace />,
        },
        {
          path: '/richtext',
          element: <RichTextEditor />
        },
      ]
    },
  ]);
  
  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
      {/* <div className="App">
        <RichTextEditor />
      </div> */}
    </>
  )
}

export default App;