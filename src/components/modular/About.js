
import React from "react";
import mine from "./img/mine.webp"
import Image from "react-graceful-image";

const About = () => {
    return <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">
            Software Developer based out of Darlington, UK
      </p>

        <div className="about-me__body">
            <p>
                I have a lifelong passion for computers, their software and our
                interaction with them as a whole. I prefer listening to speaking. I
                chose to adapt in order to stay relevant.
        </p>
            <p>
                Software is paramount to our society. Creating and maintaining good
                software is what leads us forward. Used well, it gives back some of
                the most precious resource that we have - time. Good software reshapes
          the mentality of <i>"this is how I used to do it"</i>.
        </p>
        </div>

        <Image
            loading="lazy"
            src={mine}
            alt="my_picture"
            className="about-me__img"
            placeholderColor="#eee"
        />

    </section>
}

export default About





