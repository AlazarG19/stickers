import React from 'react'
import Sticker from './Sticker'
import "../../css/Stickers.css"
const Stickers = ({ stickers, onDelete }) => {
    return (
      
        <section class="basic-grid">
          {stickers.map((sticker)=>(
            <div class="card">
              <Sticker key={stickers.catagory} sticker = {sticker} onDelete={onDelete}/>
            </div>
          ))}
        </section>
    )
}
export default Stickers
        