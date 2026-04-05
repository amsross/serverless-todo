import './App.css'
import { TodoList } from './components/TodoList.tsx'
import { Container, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import { useAuth } from "react-oidc-context"


export const App = () => {

  const auth = useAuth();
  const signOutRedirect = () => {
    const clientId = "6u3udafd9fqvlnnb368no3a2gd";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://us-east-29qc8vavlu.auth.us-east-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {

    return (
      <div className="App">

        <header className="App-header">
          <h1>TO DO LIST</h1>
        </header>

        <button onClick={() => auth.removeUser()}>Sign out</button>

        <Container>
          <Stack direction='horizontal'>
            <TodoList status="PENDING"></TodoList>
            <TodoList status="DOING"></TodoList>
            <TodoList status="DONE"></TodoList>
          </Stack>
        </Container>

      </div>

    )
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}


