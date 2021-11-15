import React from 'react'

const Image = ({imageUri}) => {
    return (
        <div>
            <img src={imageUri} alt = "img" 
            style = {{
                width : "240px",
                height : "240px"
            }}
            />
        </div>
    )
}

export default Image
