import { Route, Routes } from 'react-router-dom';
import Header from './header/header';
import { Login } from './login/login';

export function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/login"
          element={
            <Login></Login>
          }
        />
      </Routes>
    </>
  );
}

export default App;
