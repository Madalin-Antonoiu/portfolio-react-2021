import React from "react";
// import profilePic from "./img/profile.webp"

const Services = () => {
    return <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I do</h2>
        <div className="services">
            <div className="service">
                <h3>Software Development</h3>
                <p>
                    Do you want to create a new website or an app? Perhaps you thought
                    about redesigning an existing one? No matter what it is that you
                    need, your project deserves a solid foundation and the best
                    technology to date, specifically applied to your niche.
        </p>
            </div>


            <div className="service">
                <h3>Automation</h3>
                <p>
                    My philosophy is this: "<i
                    >If a computer can do it, a computer should do it.</i
                    >" From ordinary daily tasks, all the way to intricate workflows,
          there is always a way to automate things and make your life easier!
        </p>
            </div>

        </div>


        <a href="#work" className="btn">My Work</a>
    </section>

}

export default Services





