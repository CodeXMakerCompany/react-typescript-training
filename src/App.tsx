
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { CounterPractice } from './components/practices/counterPractice';

//Components

const App = () => {
  return (
    <Grid container spacing={1} className="App">
      <Grid item xs={12} sm={12}>
        <Box bgcolor="primary.main" color="info.contrastText" >
          <h1 color="text.primary" > Hola mundo - Ts 🚀 </h1>
          <CounterPractice />
        </Box>
      </Grid>
    </Grid>

  );
}

export default App;
