import MainReducer from "./MainReducer";
import {RESET} from "./types"

import { createContext, useEffect, useReducer, useRef } from "react"

export const MainContext = createContext()

function useEffectOnce(cb){
    const didRun = useRef(false);
    useEffect(()=>{
        if(!didRun.current){
            cb();
            didRun.current = true
        }
    })
}

const initialState = {
    isAuthenticated:false,
    token:"",
    id:"",
    name:"",
    mobileDrawer:false,
    selectedItem:{id:"sd54s",active:true,title:"Selecting...", subtitle:"Life is all about you shape it.",icon:"https://i.pinimg.com/222x/82/97/d2/8297d2cd6bdd0a861bda24b7811cece3.jpg"},
    searchResult:[{id:"jahsdklsdsdewewewetetfhj",active:true, title:"Jesus christ", subtitle:"Jesus is Listning", icon:"https://images.news18.com/ibnlive/uploads/2023/04/good-friday-2023-jesus-history-significance.jpg"},{id:"jahsdklsdssdsdewtetfhj", active:false, title:"Accept My Sin", subtitle:"Accept sin infront of Father", icon:"https://christianministryedu.org/wp-content/uploads/2022/04/what-is-protestant-church.jpg"},{id:"jahsdklhjakldsddfhj", active:false, title:"Shree Ram", subtitle:"Shree is Typing...", icon:"https://images.ganeshaspeaks.com/GSV7/images/prediction/Dipawali-Special-1.webp"},{id:"osdhsddsser54151efj", active:false, title:"Hanuman", subtitle:"Hanuman is flying", icon:"https://www.godpng.com/uploads/png/hanuman-god-images-png.png"},{id:"osdfsdekdsdsjkj", active:false, title:"Shiv Ji", subtitle:"Talk to Mahadev", icon:"https://i.pinimg.com/736x/05/26/79/052679049536265d75c5c8caa6a920a3.jpg"},{id:"jahsdklsddwetestfhj", active:false, title:"Jesus christ", subtitle:"Jesus is Listning", icon:"https://images.news18.com/ibnlive/uploads/2023/04/good-friday-2023-jesus-history-significance.jpg"},{id:"jahsdklsdsdewtdsdsfger5654etfhj", active:false, title:"Accept My Sin", subtitle:"Accept sin infront of Father", icon:"https://christianministryedu.org/wp-content/uploads/2022/04/what-is-protestant-church.jpg"},{id:"jahsdklhjsddfejdfakldfhj", active:false, title:"Shree Ram", subtitle:"Shree is Typing...", icon:"https://images.ganeshaspeaks.com/GSV7/images/prediction/Dipawali-Special-1.webp"},{id:"osdhsddds5e4fkjkj", active:false, title:"Hanuman", subtitle:"Hanuman is flying", icon:"https://www.godpng.com/uploads/png/hanuman-god-images-png.png"},{id:"osdhsddssdsjsdssdwekj", active:false, title:"Shiv Ji", subtitle:"Talk to Mahadev", icon:"https://i.pinimg.com/736x/05/26/79/052679049536265d75c5c8caa6a920a3.jpg"},{id:"jahsdklsdsdeds5484hj", active:false, title:"Jesus christ", subtitle:"Jesus is Listning", icon:"https://images.news18.com/ibnlive/uploads/2023/04/good-friday-2023-jesus-history-significance.jpg"},{id:"jahsdklsdssdswtetfhj", active:false, title:"Accept My Sin", subtitle:"Accept sin infront of Father", icon:"https://christianministryedu.org/wp-content/uploads/2022/04/what-is-protestant-church.jpg"},{id:"jahsdkxcdsddfhj", active:false, title:"Shree Ram", subtitle:"Shree is Typing...", icon:"https://images.ganeshaspeaks.com/GSV7/images/prediction/Dipawali-Special-1.webp"},{id:"osdhsdkjkdsdsfedsefj", active:false, title:"Hanuman", subtitle:"Hanuman is flying", icon:"https://www.godpng.com/uploads/png/hanuman-god-images-png.png"},{id:"osdhsdd54548ds48sjkj", title:"Shiv Ji", subtitle:"Talk to Mahadev", icon:"https://i.pinimg.com/736x/05/26/79/052679049536265d75c5c8caa6a920a3.jpg"},{id:"jahsdklsds5sdewewetetfhj", active:false, title:"Jesus christ", subtitle:"Jesus is Listning", icon:"https://images.news18.com/ibnlive/uploads/2023/04/good-friday-2023-jesus-history-significance.jpg"},{id:"jahsdklsdsdewt54545151dafsetfhj", active:false, title:"Accept My Sin", subtitle:"Accept sin infront of Father", icon:"https://christianministryedu.org/wp-content/uploads/2022/04/what-is-protestant-church.jpg"},{id:"jahsdklhjsddfejwojadfsdfj", active:false, title:"Shree Ram", subtitle:"Shree is Typing...", icon:"https://images.ganeshaspeaks.com/GSV7/images/prediction/Dipawali-Special-1.webp"},{id:"osdhsddsde55ederfd15154fkjkj", active:false, title:"Hanuman", subtitle:"Hanuman is flying", icon:"https://www.godpng.com/uploads/png/hanuman-god-images-png.png"},{id:"osdhsddssdsjdsdssjdlkjkj", active:false, title:"Shiv Ji", subtitle:"Talk to Mahadev", icon:"https://i.pinimg.com/736x/05/26/79/052679049536265d75c5c8caa6a920a3.jpg"}],
}

export const MainProvider =(props)=>{
    const [state, dispatch] = useReducer(MainReducer, initialState);
    useEffectOnce(()=>{
        const raw = localStorage.getItem("data");
        if(raw){
            dispatch({type:RESET, payload: JSON.parse(raw)})
        }
    })

    useEffect(()=>{
        if(state){
            localStorage.setItem("data", JSON.stringify(state))
        }
    }, [state])
    return <MainContext.Provider value={{state, dispatch}}> {props.children}</MainContext.Provider>
}

export default MainContext