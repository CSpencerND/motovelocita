import { useState } from "react"
import images from "./images-webp"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import GalleryImage, { HeroImage } from "./GalleryImage"
// import ScrollButton from "../../components/ScrollButton/ScrollButton"
import { motion } from "framer-motion"

const Gallery = (props) => {
    props.useTitle("Gallery")
    // const mainRef = useRef(null)
    const [modalIMG, setModalIMG] = useState(null)

    const handleClick = (e) => {
        setModalIMG(<img src={e.target.src} alt={e.target.alt} />)
    }

    return (
        <>
            <div id="top"></div>
            {/* <ScrollButton mainRef={mainRef} /> */}

            <motion.div key="gallery" {...props.motions}>
                <div className="opacity-50 container mx-auto">
                    <HeroImage />
                </div>

                <input
                    type="checkbox"
                    id="image-modal"
                    className="modal-toggle"
                />
                <label
                    htmlFor="image-modal"
                    className="modal cursor-pointer backdrop-blur-sm"
                >
                    <label
                        className="modal-box relative p-0 max-w-fit rounded-box shadow-box"
                        htmlFor="image-modal"
                    >
                        {modalIMG}
                    </label>
                </label>

                <main
                    id="main"
                    className="container mx-auto"
                    //ref={mainRef}
                >
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{
                            320: 1,
                            360: 2,
                            768: 3,
                            1080: 4,
                        }}
                        className="m-6"
                    >
                        <Masonry>
                            {images.map((image, i) => {
                                return (
                                    <label
                                        htmlFor="image-modal"
                                        className="m-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                                        key={i}
                                    >
                                        <GalleryImage
                                            image={image}
                                            handleClick={handleClick}
                                        />
                                    </label>
                                )
                            })}
                        </Masonry>
                    </ResponsiveMasonry>
                </main>
            </motion.div>
        </>
    )
}

export default Gallery
