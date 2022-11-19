
import './App.css';
import 'bulma/css/bulma.css'
import { Box } from '@mui/material'
import SearchForm from './components/SearchForm'

function App() {
  return (
    <div className="App">
      <Box sx={{
        width: 500,
        height: 500,
      }}>
           <SearchForm />

      </Box>

    </div>
  );
}

export default App;
