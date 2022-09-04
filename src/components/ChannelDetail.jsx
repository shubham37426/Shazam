import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const {id} = useParams()
  const [channelDetail , setChannelDetail] = useState(null)
  const [videos , setVideos] = useState([])
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
    .then((data)=> setVideos(data?.items))
  }, [id] )
  console.log(channelDetail,videos)
  return (
    <Box minHeight={'95vh'}>
      <Box>
        <div style={{background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
          zIndex:10,height:'300px' }} />
          <ChannelCard channelDetail={channelDetail}
          marginTop = '-110px' />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{mr:{sm:'100px'}}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail