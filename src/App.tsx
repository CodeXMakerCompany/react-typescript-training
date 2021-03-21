
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { CounterPractice } from './components/practices/counterPractice';
import { UserPractice } from './components/practices/userPractice';
import { ParentTimer } from './components/practices/parentTimerPractice';

//Components

const App = () => {
  return (
    <Grid container spacing={1} className="App">
      <Grid item xs={12} sm={12}>
        <Box bgcolor="primary.main" color="info.contrastText" >
          <h1 color="text.primary" > Hola mundo - Ts 🚀 </h1>
          <CounterPractice />
          <UserPractice />

          <h3>useEffect - useRef</h3>
          <br />
          <ParentTimer />
        </Box>
      </Grid>
    </Grid>

  );
}

export default App;
