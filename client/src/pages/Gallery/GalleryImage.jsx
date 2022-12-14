import { useState } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import heroImg from "./motorcycle-work.webp"
import { LazyLoadImage } from "react-lazy-load-image-component"

const GalleryImage = ({ image, handleClick }) => {
    return (
        <LazyLoadImage
            src={image[1]}
            alt={image[0].replaceAll("-", " ")}
            height="500"
            width="333"
            className="rounded-box shadow-box"
            onClick={handleClick}
        />
    )
}

export const HeroImage = () => {
    const [loaded, setLoaded] = useState(false)
    const handleLoad = () => setLoaded(true)
    const isHidden = !loaded ? { display: "none" } : {}

    return (
        <>
            {!loaded && (
                <Skeleton
                    baseColor="hsl(220, 12%, 20%)"
                    highlightColor="hsl(31, 1%, 30%)"
                    className="h-56 md:h-64 lg:h-72 xl:h-80"
                />
            )}
            <img
                className="rounded-b shadow-box"
                src={heroImg}
                alt="motorcycle work"
                style={isHidden}
                onLoad={handleLoad}
            />
        </>
    )
}

export default GalleryImage
