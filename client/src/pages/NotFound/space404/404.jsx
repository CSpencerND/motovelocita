import gsap from "gsap"
import React, { useEffect, createRef, useState } from "react"

import "./404.css"
import Astronaut from "./assets/astronaut"
import Comet from "./assets/comet"
import Stars from "./assets/stars"
import Star from "./assets/star"
import BlackHole from "./assets/black-hole"

import {
    astronaut_shape,
    blackhole_shape,
    comets_shapes,
    stars_shapes,
    star_shapes,
    palette_d,
} from "./404.shape"

const Space404 = ({
    palette = palette_d,
    countdown = 30,
    href = "/",
    stay = false,
}) => {
    const [cd, set_cd] = useState(countdown)
    const [loading, set_loading] = useState(true)

    Object.assign(palette, palette_d)

    const all_shapes = [
        astronaut_shape,
        blackhole_shape,
        ...comets_shapes,
        ...stars_shapes,
        ...star_shapes,
    ]

    for (const option of all_shapes) {
        option.ref = createRef()
        if (option.to.dx != null) {
            option.to.x = (option.from.x || 0) + option.to.dx
            delete option.to.dx
        }
        if (option.to.dy != null) {
            option.to.y = (option.from.y || 0) + option.to.dy
            delete option.to.dy
        }
    }

    // only start the animation once
    useEffect(() => {
        if (!loading) return
        for (const option of all_shapes) {
            gsap.fromTo(option.ref.current, option.from, option.to)
        }
        set_loading(false)
        // eslint-disable-next-line
    }, [loading])

    useEffect(() => {
        if (stay) return
        const tid = setTimeout(() => {
            if (cd > 0) set_cd(cd - 1)
            else window.location.href = href
        }, 1e3)
        return () => clearTimeout(tid)
        // eslint-disable-next-line
    }, [cd, stay])

    return (
        <main id="page404" className="page container mx-auto">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row max-sm:max-w-sm">
                    <div
                        id="outer-space"
                        style={{
                            visibility: `${loading ? "hidden" : "inherit"}`,
                        }}
                    >
                        <Astronaut
                            props={{
                                ref: astronaut_shape.ref,
                                className: "astronaut",
                            }}
                        />
                        <BlackHole
                            props={{
                                ref: blackhole_shape.ref,
                                className: "blackhole",
                            }}
                        />
                        {comets_shapes.map((o, i) => (
                            <Comet
                                key={`comet-${i}`}
                                props={{ ref: o.ref, className: "comet" }}
                                fill={o.fill}
                                stroke={o.stroke}
                            />
                        ))}
                        {stars_shapes.map((o, i) => (
                            <Stars
                                key={`stars-${i}`}
                                props={{ ref: o.ref, className: "star" }}
                                fill={o.fill}
                                stroke={o.stroke}
                            />
                        ))}
                        {star_shapes.map((o, i) => (
                            <Star
                                key={`star-${i}`}
                                props={{ ref: o.ref, className: "star" }}
                                fill={o.fill}
                                stroke={o.stroke}
                                kind={o.kind}
                            />
                        ))}
                    </div>
                    <div
                        id="message-404"
                        className="max-w-md xl:max-w-lg space-y-6"
                    >
                        <h1 className="text-5xl font-bold">404</h1>
                        <h4 className="text-xl">
                            Oops! You're lost in outer space!{" "}
                        </h4>
                        <p>
                            The page you're looking for cannot be reached. An
                            emergency flashback procedure will be activated
                            right before you run out of oxygen. Your safety is
                            guaranteed.
                        </p>
                        <div className="space-x-6">
                            <a
                                href={href}
                                className="btn glass"
                            >
                                HOME
                            </a>
                            <span className="text-error">
                                {stay
                                    ? ""
                                    : `Oxygen runs out in ${cd} seconds.`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Space404
