import React from "react";
import profilePic from "./img/profile.webp"
import Image from "react-graceful-image";

const Intro = () => {
    return <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I am <strong>Madalin Antonoiu</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">software developer</p>


            <Image
                src={profilePic}
                alt="Me smiling"
                className="intro__img "
                placeholderColor="#eee"
            />
    


    </section>

}

export default Intro



