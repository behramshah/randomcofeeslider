import React, {useEffect, useState} from "react";
import { axiosInstance } from '../utils/axios';

const Carusel = () => {

    const [image, setImage] = useState([]);

    console.log(image)

    const fetchImage = async () => {
        const res = await fetch('https://picsum.photos/200/300');
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImage(imageObjectURL);
      };

    useEffect(() =>{
        fetchImage();
    },[])

    return (
        <>
            <h1>Carusel</h1>
            <img src={image} alt="icons" />
        </>
    )
}

export default Carusel;