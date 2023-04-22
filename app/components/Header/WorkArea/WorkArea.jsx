import "./workStyle.css"
import {DRAWER} from "../../Context/types"
import MainContext from "../../Context/MainContext";
import { useContext, useEffect, useState } from "react";
import { AppBar,Toolbar,IconButton,Typography,Avatar,InputBase,Divider } from '@mui/material';

import { FcMenu,FcAdvance } from "react-icons/fc";

const WorkArea = () => {
  const {state, dispatch} = useContext(MainContext);
  const [active, setActive]= useState({id:"sdsdwe54s",active:true,title:"Selecting...", subtitle:"Life is all about you shape it.",icon:"https://i.pinimg.com/222x/82/97/d2/8297d2cd6bdd0a861bda24b7811cece3.jpg"})
  useEffect(()=>{
    if(state.selectedItem){
      setActive(state.selectedItem)
    }
  },[state.selectedItem])
  const handleDrawerToggle = () => {
      dispatch({type:DRAWER})
  };
  const [chat,setChat]=useState([{user:true,id:"kljashfia", chatText:"New monitor kaam karenga to le lenge", time:"5.17 PM"},{user:true, id:"kljassddewrwhfia", chatText:"Vivek, Are you Ready to code ?", time:"5.25 PM"},{user:true, id:"kljassddewsdsd674844rwhfia",chatText:"I am coding, brother", time:"5.26 PM"},{user:false, id:"kljassddeew4548dsdfrwhfia", chatText:"Yes, Raghav I am also coding.", time:"5.35 PM"},{user:false, id:"kljassddes5d4s8dsdfrwhfia", chatText:"You can join my Anydesh on insta gram, I will help you to make your code smotoosj I am good guy. I can play and dance. I am from Gita API and It will help people to grow in his life. So All the best.", time:"5.40 PM"},{user:true, id:"kljassd544s8dsdfrwhfia", chatText:"Thank you so much!", time:"5.40 PM"},{user:false, id:"kljassd854s5sddsdfrwhfia", chatText:"You Welcome, Raghav.", time:"5.36 PM"}])
  return (
    <section>
      <AppBar
        position="relative"
        id="appHeader"
        color="default"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <FcMenu />
          </IconButton>
          <Avatar alt={active && active.title} sx={{ width: 46, height: 46 }} src={active && active.icon} />
          <div id="heroText">
          <Typography color="primary"  variant="h6">{active && active.title}</Typography>
          <Typography color="textsondary" variant="caption">{active && active.subtitle}</Typography>
        </div>
        </Toolbar>
      </AppBar>
     
      <section id="chatArea">
      <div id="disclaimer">
          <p>Disclaimer: Please use your discretion and don't base your decisions on this experimental AI project.</p>
        </div>
        {chat.map(c=> c.user ? <div key={c.id} className="userChat">
          <Typography variant="body2">{c.chatText}</Typography>
        </div> : <div key={c.id} className="replyChat">
          <Typography variant="body2">{c.chatText}</Typography>
        </div> )}
      </section>

      {/* Bottom Nav */}
      <AppBar
        position="relative"
        id="bottomNav"
        color="default"
      >
        <Toolbar>
        <InputBase
        placeholder="Type your Question"
        fullWidth
        multiline
        inputProps={{ 'aria-label': 'Type your Question' }}
      />
      <span style={{flexGrow:1}}/>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <FcAdvance />
      </IconButton>
        </Toolbar>
      </AppBar>
    </section>
  )
}

export default WorkArea