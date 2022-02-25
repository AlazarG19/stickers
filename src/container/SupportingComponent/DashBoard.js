import React, { useEffect } from 'react'
import "../../css/DashBoard.css"
import {useState} from 'react'
import Stickers from './Stickers'
import {useSelector} from 'react-redux'
const DashBoard = () => {
    const original = useSelector(state=>state.stickerCatalogueReducer)
    const [stickers,
        setStickers] = useState([]);
    const [catagory,
        setCatagory] = useState("All")
    const [sideBarStat,
        setsideBarStat] = useState("sidebar")
    const [closeBtnStat,
        setcloseBtnStat] = useState("bx bx-menu")
    useEffect(() => {
        if(original !== []){
            setStickers(original)
        }
    }, [original])
    const onClick = () => {
        setStickers(original)
        setCatagory("All")
    }
    const onDelete = (catagory) => {
        setStickers(original);
        setCatagory(catagory)
        setStickers(original.filter((sticker) => sticker.catagory === catagory))
    }
    const closeBtn = () => {
        if (sideBarStat.includes("open")) {
            setsideBarStat("sidebar")
            menuBtnChange();
        } else {
            setsideBarStat("sidebar open")
            menuBtnChange();
        }
    }
    const searchBtn = () => {
        if (sideBarStat.includes("open")) {
            setsideBarStat("sidebar")
            menuBtnChange();
        } else {
            setsideBarStat("sidebar open")
            menuBtnChange();
        }
    }
    const menuBtnChange = () => {
        if (sideBarStat.includes("open")) {
            setcloseBtnStat("bx bx-menu")
        } else {
            setcloseBtnStat("bx bx-menu-alt-right")
        }
    }
    const close = () => {
        setsideBarStat("sidebar")
        setcloseBtnStat("bx bx-menu")
    }
    return (
        <div className="shopdiv">
            <div
                className="txt"
                style={{
                fontSize: "50px",
                textAlign: "center",
                backgroundColor: "#E4E9F7",
            }}>
                {catagory}
            </div>
            <div className ={sideBarStat}>
                <div className="logo-details">
                    <div className="logo_name txt">Sticker List</div>
                    <i className ={closeBtnStat} onClick={closeBtn} id="btn"></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <i className='bx bx-search' onClick={searchBtn}></i>
                        <input type="text" placeholder="Search..."/>
                        <span className=" txt tooltip">Search</span>
                    </li>
                    <li>
                        <button onClick= {()=>{onClick(); close()}}>
                            <i className='bx bx-grid-alt'></i>
                            <span className=" txt links_name">All</span>
                        </button>
                        <span className=" txt tooltip">All</span>
                    </li>
                    <li>
                        <button onClick= {()=>{onDelete('Anime') ; close()}}>
                            <i className='bx bx-user'></i>
                            <span className=" txt links_name">Anime</span>
                        </button>
                        <span className=" txt tooltip">Anime</span>
                    </li>
                    <li>
                        <button onClick= {()=>{onDelete('Movie'); close()}}>
                            <i className='bx bx-chat'></i>
                            <span className=" txt links_name">Movie</span>
                        </button>
                        <span className=" txt tooltip">Movie</span>
                    </li>
                    <li>
                        <button onClick= {()=>{onDelete('Music'); close()}}>
                            <i className='bx bx-pie-chart-alt-2'></i>
                            <span className=" txt links_name">Music</span>
                        </button> 
                        <span className=" txt tooltip">Music</span>
                    </li>
                    <li>
                        <button onClick= {()=>{onDelete('TV/show'); close()}}>
                            <i className='bx bx-folder'></i>
                            <span className=" txt links_name">Tv/Shows</span>
                        </button>
                        <span className=" txt tooltip">Tv/Shows</span>
                    </li>
                    <li>
                        <button onClick= {()=>{onDelete('Games'); close()}}>
                            <i className='bx bx-cart-alt'></i>
                            <span className=" txt links_name">Games</span>
                        </button>
                        <span className=" txt tooltip">Games</span>
                    </li>
                    <li>
                        <button onClick= {()=>{onDelete('Memes'); close()}}>
                            <i className='bx bx-heart'></i>
                            <span className=" txt links_name">Memes</span>
                        </button>
                        <span className=" txt tooltip">Memes</span>
                    </li>
                </ul>
            </div>
            <section className="home-section">
                <Stickers stickers={stickers} onDelete={onDelete}/>
            </section>
        </div>
    )
}

export default DashBoard
