import { Paper , IconButton } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm , setSearchTerm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <Paper component={'form'}
    bgcolor={'Background.default'} color={'text.primary'}
    onSubmit={handleSubmit}
    sx={{
      borderRadius:20,
      border:'1px solid #e3e3e3',
      pl:2,
      boxShadow: 'none',
      mr:{sm:5},
      background:'white',
      xs:{wdith:'5%',height:'2%'},
      md:{}
      
    }} >
      <input type="text" className="search-bar"
      placeholder='Search...'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)} />
        <IconButton type='submit' sx={{p:'10px', color:'red'}}>
          <Search />
        </IconButton>

    </Paper>
  )
}
export default SearchBar