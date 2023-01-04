import { useEffect, useRef } from "react"
import skullLG from "./assets/velocita-skull-logo-lg.webp"
import skullMD from "./assets/velocita-skull-logo-md.webp"
import skullSM from "./assets/velocita-skull-logo-sm.webp"
import poster from "./frame2.webp"
import video from "./assets/velocita.mp4"
import { Link } from "react-router-dom"
// import ScrollButton from "../../components/ScrollButton/ScrollButton"
import { motion } from "framer-motion"

const Home = (props) => {
    props.useTitle("Home")
    const videoRef = useRef(null)
    // const mainRef = useRef(null)

    useEffect(() => {
        videoRef.current.play()
    }, [])

    return (
        <>
            <div id="top"></div>
            {/* <ScrollButton mainRef={mainRef} /> */}

            <motion.div key="home" {...props.motions}>
                <div className="opacity-40 container mx-auto">
                    <video
                        id="video"
                        className="w-full rounded-b shadow-box"
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                        poster={poster}
                        ref={videoRef}
                    >
                        This is supposed to be a video of the shop. Your browser
                        is having trouble with it =(
                    </video>
                </div>

                <main
                    id="main"
                    className="container mx-auto lg:max-w-screen-lg"
                    // ref={mainRef}
                >
                    <section className="card shadow-box m-6">
                        <div className="card-body">
                            <h2 className="card-title">
                                REPAIRS YOU CAN TRUST
                            </h2>
                            <p>
                                Velocita is a motorcycle service and repair shop
                                in Red Hook. I work on everything from the most
                                current superbikes to carbureted road bikes.
                            </p>
                            <p>
                                With over 15 years of experience working on
                                Ducatis, Triumphs, and older BMWs, I am
                                dedicated to doing honest work and being a
                                trustworthy shop in an industry where that is
                                not always the perception.
                            </p>
                            <p>Come check out Velocita and see for yourself!</p>
                        </div>
                    </section>

                    <section className="card md:card-side shadow-box m-6 lg:max-h-[295px]">
                        <div className="card-body md:w-1/2 lg:w-2/3">
                            <h2 className="card-title">GET A QUOTE</h2>
                            <p>
                                I can do an oil change, a custom build, or
                                anything in between. Click for a service quote.
                            </p>
                            <div className="card-actions justify-end">
                                <Link
                                    to="/contact"
                                    className="btn btn-primary"
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    REQUEST
                                </Link>
                            </div>
                        </div>

                        <figure className="md:p-6 md:w-1/2 lg:w-1/3">
                            <img
                                srcSet={`${skullSM} 530w, ${skullMD} 920w, ${skullLG} 1180w`}
                                sizes="(min-width: 1040px) 267px, (min-width: 780px) 317px, (min-width: 680px) 597px, calc(93.33vw - 28px)"
                                src={skullLG}
                                alt="velocita skull logo"
                                height={300}
                                width={450}
                                className="max-h-48 md:max-h-96 w-full md:rounded-box object-cover opacity-80"
                                style={{ objectPosition: "50% 42%" }}
                            />
                        </figure>
                    </section>
                </main>
            </motion.div>
        </>
    )
}

export default Home
