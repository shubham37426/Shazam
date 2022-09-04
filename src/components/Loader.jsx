import { Box } from "@mui/system";
import { RingLoader } from "react-spinners";


const Loader = () => {
  return (
    <Box sx={{
        position: 'fixed',
        top: '50%',
        left: '50%'
    }}>
<RingLoader color="#1fa9ff" size={100} />
</Box>
  )
}

export default Loader