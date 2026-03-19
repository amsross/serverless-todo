import './App.css'
import { TaskList } from './components/TaskList.tsx'
import { Container, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export const App = () => {

  return (
    <div className="App">

      <header className="App-header">
        <h1>TO DO LIST</h1>

      </header>
      <Container>
        <Stack direction='horizontal'>
          <TaskList status="PENDING"></TaskList>
          <TaskList status="DOING"></TaskList>
          <TaskList status="DONE"></TaskList>
        </Stack>
      </Container>

    </div>

  )
}
