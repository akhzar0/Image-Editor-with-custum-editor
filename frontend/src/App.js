
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import Login from './component/Login';
import ImageEditor from './component/Image editor';
import Editor from './component/Editor';
function App() {
  return (
    <BrowserRouter>
          <Navbar/>
          <Routes>
          <Route element={<Navigate to="/login" />} path="/" />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<ImageEditor />} path="imageeditor" />
            <Route element={<Editor />} path="editor" />
            <Route element={<ImageEditor/>} path="image" />

            {/* <Route element={<NotFound />} path="*" /> */}
          </Routes>
      </BrowserRouter>
  );
}

export default App;
