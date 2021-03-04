
import React from "react";
import Item from "../modular/Item"


const Work = () => {

    return <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My work</h2>
        <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

        <div className="portfolio">

            <Item imageName="vanilla-websitebuilder" link="/project/websitebuilder" />
            <Item imageName="vue-yousync" link="/project/yousync" />
            <Item imageName="unity-turnbasedrpg" link="/project/turnbasedrpg" />
            <Item imageName="svelte-meetups" link="/project/meetups" />
            <Item imageName="react-backendapi" link="/project/backendapi" />
            <Item imageName="react-cryptofrontend" link="/project/cryptofrontend" />
            <Item imageName="vanilla-iss" link="/project/iss" />
            <Item imageName="chrext-wireframe" link="/project/wireframe" />

            {/* Not done yet */}

            {/* <Item imageName="zapchat" link="/project/zapchat" /> */}









        </div>
    </section>
}

export default Work





