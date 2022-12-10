import skullInvert from "./velocita-skull-logo-inverted-colors.webp"
import { FileText } from "react-feather"
import { motion } from "framer-motion"

const Services = (props) => {
    props.useTitle("Services")

    return (
        <motion.div key="services" {...props.motions}>
            <div
                className={`bg-base-100 h-16 md:h-20 shadow-box lg:mb-6`}
            ></div>

            {/* <div className="opacity-60 container mx-auto"> */}
            {/*     <img */}
            {/*         src={skullInvert} */}
            {/*         alt="velocita skull logo inverted colors" */}
            {/*         className="max-h-[540px] w-full object-cover rounded-b shadow-box" */}
            {/*         style={{ objectPosition: "50% 33%" }} */}
            {/*     /> */}
            {/* </div> */}

            <main className="container mx-auto md:grid md:grid-cols-2 xl:max-w-screen-lg">
                <section className="card bg-base-100 shadow-box m-6 md:col-span-2 md:mb-2 h-fit">
                    <div className="card-body">
                        <h2 className="card-title">SERVICES</h2>
                        <p>
                            At Velocita, you can make an appointment to get your
                            Ducati or Triumph serviced. Here you can find the
                            service intervals for your specific models.
                        </p>
                        <p>
                            It is recommended to get your oil replaced once a
                            year if you don’t go the mileage between service
                            intervals.
                        </p>
                    </div>
                </section>

                <section className="card bg-base-100 shadow-box m-6 md:mr-3 h-fit">
                    <div className="card-body">
                        <h2 className="card-title pb-3">DUCATI</h2>
                        <ul className="menu p-2 -m-6 text-primary">
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1uW1UR_MPqUDI-QUncm3WBpfRq4mVLgv3/preview"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FileText />
                                    Scrambler
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1ycvylGVBre689APkaUG7xnP3Ip5USP62/preview"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FileText />
                                    Testastretta
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1lijBaYkW3YcN2TIWQIXC0b32XLPuF8ZX/preview"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FileText />
                                    Panigale
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1Cus8p4DjyCDR4SBX82QRpNdcMu8u_WCr/preview"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FileText />
                                    Two-Valve Engines
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="card bg-base-100 shadow-box m-6 h-fit">
                    <div className="card-body">
                        <h2 className="card-title pb-3">TRIUMPH</h2>
                        <ul className="menu p-2 -m-6 text-primary">
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1OCvhfNwuqcQ-biHkwep6zYwHPEQtUpn-/preview"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FileText />
                                    Water-Cooled 10k Interval
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1f8Wc0sfKh7upSAeBmYoSrvmwU3DJ1pyb/preview"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FileText />
                                    Air-Cooled 6k Interval
                                </a>
                            </li>
                        </ul>
                    </div>

                    <figure>
                        <img
                            src={skullInvert}
                            alt="velocita skull logo"
                            className="max-h-48 md:max-h-24 lg:max-h-[6.5rem] w-full object-cover opacity-60"
                            style={{ objectPosition: "50% 42%" }}
                        />
                    </figure>
                </section>
            </main>
        </motion.div>
    )
}

export default Services
