function Image({url = '', alt='No Image Found'}){
    const imageStyle = {
        width: "10rem",
        height: "10rem",
        borderRadius: "10px"
    }
    return (
        <img
        src={url}
        alt={alt}
        style={imageStyle}
        />
    )
}

export default Image