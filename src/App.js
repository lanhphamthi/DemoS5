import './App.css';
import Home from './Home';
import NotFound from './NotFound';
import UserDetail from './UserDetail';
import UserList from './UserList';
import { Routes, Route, Link, Navigate} from 'react-router-dom';


const USER_LIST = [
  { "name": "Quan", "pic": "/image/ava1.jpg", "address": "HN" },
  { "name": "Thu", "pic": "/image/ava2.jpg", "address": "SG" },
  { "name": "Bao", "pic": "/image/ava3.jpg", "address": "Hue" },
  { "name": "Binh", "pic": "/image/ava4.jpg", "address": "Da Nang" }
];

function App() {
  const users = USER_LIST;
  return (
    <div className="App">
      <nav className="nav-link">
        <Link to="/">Home</Link>
        <Link to="/users">UserList</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList users={users} />} />
        <Route path="/users/:id" element={<UserDetail users={users} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/people" element={<Navigate replace to="/users" />} />
      </Routes>
    </div>
  );
}

export default App;
