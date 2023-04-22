'use client';
import { DRAWER } from '../Context/types';
import "./headerStyle.css";
import {Fragment,useContext} from 'react';
import { Container,Grid,Hidden,SwipeableDrawer } from '@mui/material';
import MyDrawer from './Drawer/MyDrawer';
import WorkArea from './WorkArea/WorkArea';
import MainContext from '../Context/MainContext';

const Header = () => {
  const {state, dispatch}= useContext(MainContext)

  const handleDrawerToggle = () => {
        dispatch({type:DRAWER})
  };
  return (
    <Fragment>
        <section id="mainBg">
            <div id="topBg">
            </div>
        <Container disableGutters maxWidth="xl" id="mainContainer">
        <Grid container>
            <Grid item xs={12} md={3} id="drawer">
              <Hidden smDown implementation='css'>
              <SwipeableDrawer 
            onOpen={handleDrawerToggle}
            onClose={handleDrawerToggle}
            variant="temporary"
            anchor='left'
            sx={{
              display: { xs: 'block', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 340 },
            }}
            open={state.mobileDrawer}
        >
         <MyDrawer mobile={true}/>
        </SwipeableDrawer >
              </Hidden>
              <Hidden mdDown implementation='css'>
              <MyDrawer mobile={false}/>
              </Hidden>
            </Grid>
            <Grid item xs={12} md={9}>
              <WorkArea />
            </Grid>
        </Grid>
        </Container>
        </section>
        
       
    </Fragment>
  )
}

export default Header