import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import Header from './header/header';
import { Login } from './login/login';

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header/>
      <Routes>
        <Route
          path="/login"
          element={
            <Login></Login>
          }
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
