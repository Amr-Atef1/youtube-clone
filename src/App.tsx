import {Routes,Route} from 'react-router-dom'
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components';
import { Box } from '@mui/material';


function App() {

  return (
    <Box sx={{backgroundColor:"#000"}} >
      <Navbar/>
      <Routes>
        <Route path='/' caseSensitive element={<Feed/>}/>
        <Route path='/video/:id'  element={<VideoDetail/>}/>
        <Route path='/channel/:id'  element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm'  element={<SearchFeed/>}/>
      </Routes>
    </Box>
  );
}

export default App;
