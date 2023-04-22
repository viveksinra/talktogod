'use client';
import "./drawerStyle.css";
import MainContext from "../../Context/MainContext";
import { DRAWER,SETSELECTED } from "../../Context/types";
import {Tooltip, IconButton,Avatar,InputBase,Divider,List,ListItem,ListItemButton, ListItemAvatar,Typography } from '@mui/material/';
import { useContext } from "react";
import { FcGlobe,FcSearch } from "react-icons/fc";


const MyDrawer = ({mobile}) => {
  const {state, dispatch} = useContext(MainContext)
  const selectChat =(id)=>{
    if(state.searchResult){
      var selectedItem = state.searchResult.find(x=>x.id === id)
      // var oldActive =state.searchResult.find(a=>a.active === true)
      // oldActive.active = false;
      selectedItem.active = true;

      dispatch({type:SETSELECTED,payload:selectedItem})

    }
    if(mobile){
      dispatch({type:DRAWER})
    }
  }
  return (
    <section >
      <div id="userBg">
           <Tooltip title="User Name">
              <IconButton>
                <Avatar alt="User Name" src="https://mui.com/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <span style={{flexGrow:1}} />
            <IconButton size="large">
              <FcGlobe/>
            </IconButton>
      </div>

      <div id="searchBg">

      <FcSearch style={{fontSize:25}}  />
      <Divider orientation="vertical" sx={{ height: 28, m: 0.5, }} />
      <InputBase
        placeholder="Search your God"
        fullWidth
        inputProps={{ 'aria-label': 'Search your God' }}
      />
      </div>
      <div id="drawerBg">
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {state.searchResult && state.searchResult.map(s=> <ListItemButton key={s.id} dense onClick={()=>selectChat(s.id)}>
        <ListItem> 
        <ListItemAvatar>
        <Avatar alt={s.title} src={s.icon} sx={{ width: 56, height: 56 }}/>
        </ListItemAvatar>
        <div className="textBox">
          <Typography color="primary"  variant="body1">{s.title}</Typography>
          <Typography color="textsondary" variant="caption">{s.subtitle}</Typography>
        </div>
      </ListItem>
      </ListItemButton>  )}
      </List>
      </div>
    </section>
  )
}

export default MyDrawer