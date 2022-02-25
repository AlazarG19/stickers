import React from 'react'
import Sticker from './Sticker'
import "../../css/Stickers.css"
const Stickers = ({ stickers}) => {
   return (
        <section className ="basic-grid">
          {stickers.map((sticker)=>(
            
            <div className ="card">
              <Sticker key = {sticker.id} sticker = {sticker} />
            </div>
          ))}
        </section>
    )
}
export default Stickers
        