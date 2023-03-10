import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
    const [index, setIndex] = useState(0)
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ]

    const handleArrow = (direction) =>{
        if(direction==="left"){
            setIndex(index !== 0 ? index-1 : 0)
        }
        if(direction==="right"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
console.log(index)
return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0 }} onClick={() => handleArrow("left")}>
        <Image src="/img/arrowl.png" alt="arrow-left" fill />
        </div> 
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img, i) => (
            <div className={styles.imgContainer} key={i}>
                <Image src={img}  alt="" fill objectFit="contain" />
            </div>
                ))}
        </div>
        <div className={styles.arrowContainer} style={{right:0}} onClick={() => handleArrow("right")}>
        <Image src="/img/arrowr.png" alt="arrow-right" fill />
        </div>
    </div>
)
}

export default Featured