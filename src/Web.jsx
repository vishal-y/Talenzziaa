import { BrowserRouter ,  Routes, Route } from 'react-router-dom';
import App from './App';
import Admin from './Admin';

export default function Web() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>

  )
}
