import React, {useEffect, useState} from "react";
import axios from "axios";

const Carusel = () => {

    let endpoints = [
        'https://dog.ceo/api/breeds/image/random',
        'https://dog.ceo/api/breeds/image/random',
        'https://dog.ceo/api/breeds/image/random',
        'https://dog.ceo/api/breeds/image/random',
        'https://dog.ceo/api/breeds/image/random',
      ]        
    
      const [images, setImages] = useState([]);
      const [currentIndex, setCurrentIndex] = useState(0);

      const showPrev = () => {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex-1)
        } else { return }
      }

      const showNext = () => {
        if(currentIndex < 4){
            setCurrentIndex(currentIndex+1)
        } else { return}
      }

      let randomIndex = () =>{ return Math.floor(Math.random() * 5)};

    
      useEffect(() =>{
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then(data => setImages([...images, ...data]))
      },[])

      

      useEffect(() =>{
        let timer = setInterval(() => setCurrentIndex(randomIndex()), 3000)
        return () => {
            clearInterval(timer);
          };
      },[])

      console.log(images[currentIndex]?.data?.message)
      const imgUrl = images[currentIndex]?.data?.message;

    return (
        <>
            <h1>Carusel</h1>
            <button onClick={showPrev}>prev</button>
            {
                imgUrl && <img src={imgUrl} alt="dog" width="300px" height="250px"/> 
            }
            <button onClick={showNext}>next</button>
        </>
    )
}

export default Carusel;