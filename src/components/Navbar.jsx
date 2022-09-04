import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
import DarkModeSwitch from './darkmode/DarkModeSwitch';

const Navbar = () => {
  return (
    <Stack
      bgcolor={'Background.default'} color={'text.primary'}
      direction={'row'}
      alignItems='center'
      p={2}
      sx={{ position: 'sticky', top: 0, justifyContent: 'space-between' }} >
      <Link to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Typography
        variant='h3' fontWeight='bold'
        sx={{ marginLeft: '-26%', display: 'inline-block' }}>
        Shazam
      </Typography>
      <SearchBar />
      <DarkModeSwitch />
    </Stack>
  )
}

export default Navbar