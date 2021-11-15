import React from 'react'
import "../../css/DashBoard.css"
import { useEffect,useState } from 'react'
import Stickers from './Stickers'
const DashBoard = () => {
    
    const [original, setOriginal] = useState(
        [ 
          {
            catagory: 'Anime',
            img: '../../assets/img/image (1).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Movie',
            img: '../../assets/img/image (2).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Movie',
            img: '../../assets/img/image (3).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Music',
            img: '../../assets/img/image (4).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Sports',
            img: '../../assets/img/image (5).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Movie',
            img: '../../assets/img/image (6).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Anime',
            img: '../../assets/img/image (7).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Memes',
            img: '../../assets/img/image (8).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Memes',
            img: '../../assets/img/image (9).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Anime',
            img: '../../assets/img/image (10).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Anime',
            img: '../../assets/img/image (11).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Anime',
            img: '../../assets/img/image (12).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Music',
            img: '../../assets/img/image (13).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Music',
            img: '../../assets/img/image (14).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Music',
            img: '../../assets/img/image (15).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Anime',
            img: '../../assets/img/image (16).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'TV/show',
            img: '../../assets/img/image (17).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'TV/show',
            img: '../../assets/img/image (18).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Sport',
            img: '../../assets/img/image (19).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Memes',
            img: '../../assets/img/image (20).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Memes',
            img: '../../assets/img/image (21).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Movie',
            img: '../../assets/img/image (2).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          {
            catagory: 'Music',
            img: '../../assets/img/image (14).jpg',
            code:'Nar100',
            size: '5cm',
            price: '10'
          },
          ]
      );
      const [stickers, setStickers] = useState([...original]);
        const [filteredSticker, SetFilterSticker] = useState(stickers);
        const [catagory,setCatagory] = useState("All")
        const onClick = () => {
          setStickers(original)
          setCatagory("All")
        }
       
        const onDelete = (catagory) => {
          setStickers(original);
          setCatagory(catagory)
          setStickers(original.filter((sticker) => sticker.catagory === catagory))
        }
    return (
        <div class="shopdiv">
          <div 
          className = "txt"
          style = 
          {{fontSize : "50px",textAlign:"center",backgroundColor : "#E4E9F7"
          ,fontFamily : "Comfortaa cursive;"
        }}>
            {catagory}
          </div>
            <div class="sidebar">
                <div class="logo-details">
                    <div class="logo_name txt">Sticker List</div>
                    <i class='bx bx-menu' id="btn"></i>
                </div>
                <ul class="nav-list">
                    <li>
                        <i class='bx bx-search'></i>
                        <input type="text" placeholder="Search..." />
                        <span class=" txt tooltip">Search</span>
                    </li>
                    <li>
                        <button onClick = {onClick}>
                            <i class='bx bx-grid-alt'></i>
                            <span class=" txt links_name">All</span>
                        </button>
                        <span class=" txt tooltip">All</span>
                    </li>
                    <li>
                        <button onClick = {()=>(onDelete('Anime'))}>
                            <i class='bx bx-user'></i>
                            <span class=" txt links_name">Anime</span>
                        </button>
                        <span class=" txt tooltip">Anime</span>
                    </li>
                    <li>
                        <button onClick = {()=>(onDelete('Movie'))}>
                            <i class='bx bx-chat'></i>
                            <span class=" txt links_name">Movie</span>
                        </button>
                        <span class=" txt tooltip">Movie</span>
                    </li>
                    <li>
                        <button onClick = {()=>(onDelete('Music'))}>
                            <i class='bx bx-pie-chart-alt-2'></i>
                            <span class=" txt links_name">Music</span>
                        </button>
                        <span class=" txt tooltip">Music</span>
                    </li>
                    <li>
                        <button onClick = {()=>(onDelete('TV/show'))}>
                            <i class='bx bx-folder'></i>
                            <span class=" txt links_name">Tv/Shows</span>
                        </button>
                        <span class=" txt tooltip">Tv/Shows</span>
                    </li>
                    <li>
                        <button onClick = {()=>(onDelete('Sports'))}>
                            <i class='bx bx-cart-alt'></i>
                            <span class=" txt links_name">Sports</span>
                        </button>
                        <span class=" txt tooltip">Sports</span>
                    </li>
                    <li>
                        <button onClick = {()=>(onDelete('Memes'))}>
                            <i class='bx bx-heart'></i>
                            <span class=" txt links_name">Memes</span>
                        </button>
                        <span class=" txt tooltip">Memes</span>
                    </li>
                    

                </ul>
            </div>
            <section class="home-section">
                <Stickers stickers = {stickers} onDelete={onDelete}/>
            </section>

        </div>
    )
}

export default DashBoard
