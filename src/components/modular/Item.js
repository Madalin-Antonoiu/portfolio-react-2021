import React from "react";
import { Link } from "react-router-dom";
import Image from "react-graceful-image";

const Item = ({ imageName, link }) => {

    var imageImport = null;
    // var tagName = null;


    if (imageName) {
        const name = imageName.split("-").pop()
        // tagName = imageName.split("-")[0].replace(/^\w/, (c) => c.toUpperCase());
        imageImport = require(`../../images/${imageName}/${name}.webp`).default
    }
   

    return <Link to={{ pathname: link }} className="portfolio__item" >
        <Image
            placeholderColor="#eee"
            src={imageImport}
            alt={imageName}
            className="portfolio__img"
        />
    </Link>
}

export default Item