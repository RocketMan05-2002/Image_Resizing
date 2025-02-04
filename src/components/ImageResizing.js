import { useEffect, useState } from 'react'
import './ImageResizing.css'

export default function ImageResizing(){

    // const[image,setImage] = useState(null);
    const[imageSrc,setImageSrc] = useState(null);
    const[imageDimensions,setImageDimensions] = useState({height:0,width:0});

    const handleFileChange = (e) =>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function(e){
                setImageSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const resizeImage = (width,height) =>{
        setImageDimensions({width, height});
    };

    useEffect(()=>{
        resizeImage(1080,1080)
    },[]);
    // so that as soon as the image is uploaded it starts to put itself in instagram's dimensions

    return(
        <div className="container">
            <h1>IMAGE RESIZER</h1>
            <input
                type="file"
                id="image-input"
                accept="image/*"
                onChange={handleFileChange}
            />
            <div className="buttons-container">
                <button onClick={()=>resizeImage(1080,1080)}> Instagram (1080x1080)</button>
                <button onClick={()=>resizeImage(1200,630)}> Facebook (1200x630)</button>
                <button onClick={()=>resizeImage(1200,675)}> Twitter (1200x675)</button>
                <button onClick={()=>resizeImage(600,300)}> Website (600x300)</button>
            </div>
            <br />
            {
                imageSrc && (
                    <div className='image-container'>
                        <img
                        src={imageSrc}
                        alt='uploaded'
                        width={imageDimensions.width}
                        height={imageDimensions.height}
                        />
                    </div>
                )
            }
        </div>
    )
}