import {useState, useEffect} from 'react'
import {Box,Stack,Typography } from '@mui/material'
import {SideBar, Videos} from './'
import {fetchFromAPI} from '../utils/fetchFromAPI'
import { Favorite } from '@mui/icons-material'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory])

  return (
    <Stack sx={{flexDirection:{sx:'column' , md:'row'}}} >
       <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
       
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      </Box>
      <Box p={2} sx={{ overflowY:'auto', flex: 2, height:'90vh'  }}>
      <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{
        color:'white'}}>
          {selectedCategory} <span style={{color:'#f31503'}}>Videos</span>
      </Typography>
      <Videos videos={videos} />
      <Typography  variant="subtitle1" sx={{ mt: 1.5, color: "text.default",fontSize:'20px',alignItems:'center' }}>
        Made with <span><Favorite sx={{color:'red',fontSize:20}}/></span> in India
        <div>Copyright © 2022 J Media </div>
      </Typography>

      </Box>
    </Stack>
  )
}

export default Feed