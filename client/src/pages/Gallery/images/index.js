const getAll = (r) => {
    let images = {}
    r.keys().forEach((item) => {
        images[item.replace("./", "")] = r(item)
    })
    return images
}

const imagesObj = getAll(require.context(".", false, /\.(png|jpe?g|svg)$/i))
const images = Object.entries(imagesObj)

export default images
