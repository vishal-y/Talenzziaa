import { BrowserRouter ,  Routes, Route } from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Form from './component/Form';

export default function Web() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/form" element={<Form />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>

  )
}
