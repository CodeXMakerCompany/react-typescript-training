
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { CounterPractice } from './components/practices/counterPractice';
import { UserPractice } from './components/practices/userPractice';
import { ParentTimer } from './components/practices/parentTimerPractice';
import { ReducerCounter } from "./components/practices/useReducer/reducerCounter";
import { Page1 } from './components/practices/contextApi/page1';
import { Page2 } from './components/practices/contextApi/page2';
//Components
import { DataProvider } from "./components/practices/contextApi/DataContext";

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
          <br />
          <h3>useReducer</h3>
          <ReducerCounter />

          <DataProvider>
            <h3>conextApi</h3>
            <Page1 />
            <Page2 />

          </DataProvider>

        </Box>
      </Grid>
    </Grid>

  );
}

export default App;
