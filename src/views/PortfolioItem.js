
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Image from "react-graceful-image";

const PortfolioItem = () => {
    const options = {
        websitebuilder: {
            title: "Webdrop",
            subtitle: "Vanilla JS Drag&Drop Website Builder",
            image: require(`../images/vanilla-websitebuilder/websitebuilder.webp`).default,
            secondaryImage: require(`../images/vanilla-websitebuilder/websitebuilder4.webp`).default,
            tertiaryImage: require(`../images/vanilla-websitebuilder/websitebuilder3.webp`).default,
            fourthImage: require(`../images/vanilla-websitebuilder/websitebuilder1.webp`).default,
            link: "https://webdrop-demo.netlify.app",
            stack: ["html-5", "css-3", "javascript", "bootstrap"],
            features: [
                "Drag and Drop to create fully-fledged HTML/CSS/JS pages",
                "Chrome DevTools alike custom panel to edit size/padding/margin etc.",
                "Reuse code written already, just edit it visually.",
                "Full CRUD cycle for every HTML element.",
                "Preview for any screen size.",
                "Download the source code",
                "And more..."
            ],
            description: {
                p1: "I have developed this project back in 2018 as a mean to learn JavaScript myself. I started it with reusability and non-coder adoption in mind when it comes to creating websites.",
            },
            disclaimer: "* This project is no longer maintained, it is highly possible you encounter bugs in the live example.",
            github: "https://github.com/Madalin-Antonoiu/webdrop-online"

        },
        yousync: {
            title: "YouSync",
            subtitle: "Youtube with friends in real time",
            image: require(`../images/vue-yousync/yousync.webp`).default,
            secondaryImage: require(`../images/vue-yousync/yousync3.webp`).default,
            link: "",
            stack: ["html-5", "css-3", "vue"],
            features: [
                "Control PLAY/PAUSE/MUTE/UNMUTE for everyone in the room.",
                "Change video for all via Youtube Video ID, at a press of a button.",
                "Automatically keeping every client in sync from the server.",
                "Manual Re-sync/ Play from start for everyone in the room.",
                "Sub 10ms delay due to the power of websockets.",
                "Sit back and watch in Fullscreen.",
            ],
            description: {
                p1: "The idea behind this is being able to watch youtube videos with friends when you cannot gather together, the same way you would if were sitting together on a couch.",
                p2: "",
                p3: ""
            },
            disclaimer: "* This project is no longer maintained, it is highly possible you encounter bugs in the live example.",
            github: "https://github.com/Madalin-Antonoiu/YouSync"
        },
        turnbasedrpg: {
            title: "Turn-Based RPG",
            subtitle: "animated, pixel style role-playing game",
            image: require(`../images/unity-turnbasedrpg/turnbasedrpg.webp`).default,
            secondaryImage: require(`../images/unity-turnbasedrpg/turnbasedrpg2.webp`).default,
            tertiaryImage: require(`../images/unity-turnbasedrpg/turnbasedrpg3.webp`).default,
            fourthImage: require(`../images/unity-turnbasedrpg/turnbasedrpg5.webp`).default,
            fifthImage: require(`../images/unity-turnbasedrpg/turnbasedrpg4.webp`).default,
            sixthImage: require(`../images/unity-turnbasedrpg/turnbasedrpg7.webp`).default,
            seventhImage: require(`../images/unity-turnbasedrpg/turnbasedrpg6.webp`).default,
            link: "https://turnbasedrpgdemo.netlify.app/",
            stack: ["unity", "c-plusplus"],
            features: [
                "Can be run on any platform Unity supports (mobile, desktop, web)",
                "Exploration & Secrets - Multiple maps to explore and events to uncover.",
                "Turn Based - Fighting monsters in a turn-based manner.",
                "Exp. System - Defeat enemies, gain experience and increase power.",
                "Inventory System - Hold your potions/weapons and armor with you.",
                "Equipment System - Equip/unequip items to alter your power.",
                "Status System - Life/Mana/Attack etc. based on level and items.",
                "Battle & Reward System - Defeat monsters and bosses to get items.",
                "Loot System - Pick up items found on the ground.",
                "Economy - Buy/sell items for gold.",
                "Progress saving and more...",
            ],
            description: {
            },
            github: "https://github.com/Madalin-Antonoiu/TurnBasedRPGDemo-WebGL"

        },
        iss: {
            title: "ISS Tracking",
            subtitle: "live location tracker across the globe",
            image: require(`../images/vanilla-iss/iss.webp`).default,
            link: "https://live-iss-tracker-madalin.netlify.app",
            stack: ["html-5", "css-3", "javascript"],
            features: [
                "Fully-featured global map powered by Leaflet and OpenStreetMap.",
                "Get live data from NASA`s server API and update the map every 3s.",

            ],
            description: {
            },
            github: "https://github.com/Madalin-Antonoiu/where-is-iss"

        },
        meetups: {
            title: "MeetUs",
            subtitle: "meetings application on Svelte",
            image: require(`../images/svelte-meetups/meetups.webp`).default,
            secondaryImage: require(`../images/svelte-meetups/meetus.webp`).default,
            link: "https://meetups-svelte.netlify.app/",
            stack: ["html-5", "css-3", "svelte-icon", "rollup"],
            features: [
                "Very lightweight",
                "Responsive design",
                "CRUD"
            ],
            description: {
                p1: "The sole reason for this project was to explore the posibilities and teach myself Svelte and Rollup. ",
            },
            github: "https://github.com/Madalin-Antonoiu/stores-finished"

        },
        wireframe: {
            title: "Wireframe Ext",
            subtitle: "Chrome Extension that replaces text & image to get a wireframe",
            image: require(`../images/chrext-wireframe/wireframe.webp`).default,
            secondaryImage: require(`../images/chrext-wireframe/wireframe1.webp`).default,
            tertiaryImage: require(`../images/chrext-wireframe/wireframe2.webp`).default,
            fourthImage: require(`../images/chrext-wireframe/wireframe3.webp`).default,
            fifthImage: require(`../images/chrext-wireframe/wireframe4.webp`).default,
            sixthImage: require(`../images/chrext-wireframe/wireframe5.webp`).default,
            stack: ["html-5", "css-3", "chrome"],
            features: [
                "Replace text with Lorem Ipsum, maintaining word length and ratio.",
                "Replace images with placeholder grey boxes that print measures too.",
                "Effectively transforms *any website into a wireframe",
                "There is also a variant that makes everything black/white/gray."
            ],
            description: {
                p1: "Often times i find myself not able to see the forest for the trees, namely when i seek common structural patterns in well designed websites, the text and image get in the way. By creating this extension, i can now find them much easier without being distracted by any of it."

            },
            github: "https://github.com/Madalin-Antonoiu/Wireframe-Extract---Chrome-Extension"

        },
        backendapi: {
            title: "API Server",
            subtitle: "realtime cryptocurrency data from Binance.com",
            image: require(`../images/react-backendapi/backendapi.webp`).default,
            stack: ["react", "nodejs", "express", "mongodb", "redis", "telegram", "aws"],
            features: [
                "Complete token based authentication system (Node, Mongo, Passport)",
                "Integration with AWS, Telegram, Redis and more.",
                "Pulls data from Binance.com API via Websockets and RESTApi calls.",
                "Saves data to DB and sends it to authenticated routes only",
                "Perform in-house analysis and inform about profitable trades.",
                "And more...",
            ],
            description: {
                p1: "This is the backend part of my cryptocurrency application. (WIP)",
                p2: "This is integrated with a front end, see /project/cryptofrontend."

            },
            github: "https://github.com/Madalin-Antonoiu/ctt-server"

        },
        cryptofrontend: {
            title: "Crypto App",
            subtitle: "React app integration with backend & binance.com",
            image: require(`../images/react-cryptofrontend/cryptofrontend.webp`).default,
            secondaryImage: require(`../images/react-cryptofrontend/cryptofrontend.webp`).default,
            tertiaryImage: require(`../images/react-cryptofrontend/cryptofrontend8.webp`).default,
            fourthImage: require(`../images/react-cryptofrontend/cryptofrontend3.webp`).default,
            fifthImage: require(`../images/react-cryptofrontend/cryptofrontend4.webp`).default,
            sixthImage: require(`../images/react-cryptofrontend/cryptofrontend6.webp`).default,
            seventhImage: require(`../images/react-cryptofrontend/cryptofrontend2.webp`).default,
            stack: ["react", "redux"],
            features: [
                "Responsive design, using Antd Framework.",
                "Token-based authentication connected to Redux.",
                "Tracks coins that are trending/ downtrending now.",
                "Buy/Sell coins from here directly on Binance.com (soon).",
                "Tracks all cryptocurrencies and updates data every second.",
                "Tracks favorite coins table with autocomplete, track top coins",
                "Realtime price percentage evolution (compared to 1,3,5m etc. ago).",
                "Secure - App communicates to Backend, which then talks to Binance.",
                "Candlestick Charts (soon), 24h data, historical data, sorting, and more...",
            ],
            description: {
                p1: "This is the frontend of the full-stack cryptocurrency app, which integrates my backend API server. ",
                p2: "Work in progress, live example soon."

            },
            github: "https://github.com/Madalin-Antonoiu/ctt-client"

        },

    }


    const location = window.location.pathname.replace("/project/", "")
    // console.log(location)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const title = options[location]?.title;
    const subtitle = options[location]?.subtitle;
    const image = options[location]?.image;
    const secondaryImage = options[location]?.secondaryImage;
    const tertiaryImage = options[location]?.tertiaryImage;
    const fourthImage = options[location]?.fourthImage;
    const fifthImage = options[location]?.fifthImage;
    const sixthImage = options[location]?.sixthImage;
    const seventhImage = options[location]?.seventhImage;


    const link = options[location]?.link;
    const stack = options[location]?.stack;
    const p1 = options[location]?.description.p1;
    const p2 = options[location]?.description.p2;

    const features = options[location]?.features;
    const disclaimer = options[location]?.disclaimer;
    const github = options[location]?.github;

    const history = useHistory();



    const stacklist = stack?.map((each) => {
        return <div key={`logos:${each}`} className="iconify iconify_me" data-icon={`logos:${each}`} data-inline="false">
            <span className="tooltip">Praesent ut tincidunt ligula. Donec at sem sit amet nulla porttitor consequat sit amet quis velit. Phasellus imperdiet mi in velit gravida tincidunt.</span>

        </div>



    })

    const featuresList = features?.map((each) => {
        return <li>{each}</li>
    })

    return <>

        <section className="intro">
            <h1 className="section__title section__title--intro">

                <strong>{title}</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro project-intro">{subtitle}</p>

            <Image placeholderColor="#eee" src={image} alt="" className="portfolio_item_image" />
        </section>


        <div className="portfolio-item-individual">

            <p>
                <h4 className="centered-span">Built with</h4>
                <span className="centered-span"> {stacklist}</span>
            </p>
            <br />
            <p>{p1}</p>

            <p><h4 className="centered-span">Features</h4></p>
            <p>{featuresList}</p>

            {secondaryImage ? <p><h4 className="centered-span">Screenshot(s)</h4></p> : ""}


            <p>
                {/* i could also have alts written in the code and display them for each image */}
                < Image
                    placeholderColor="#eee"
                    className="preview"
                    src={secondaryImage} alt=""
                />

                <br />



                {tertiaryImage ? <div>
                    <br />
                    < Image
                    placeholderColor="#eee"
                    src={tertiaryImage} alt=""
                    className="preview"
                />

                </div>
                    : ""}


                {fourthImage ? <div>
                    <br />
                    < Image
                        placeholderColor="#eee"
                        src={fourthImage} alt=""
                        className="preview"
                    />

                </div>
                    : ""}

                {fifthImage ? <div>
                    <br />
                    < Image
                        placeholderColor="#eee"
                        src={fifthImage} alt=""
                        className="preview"
                    />

                </div>
                    : ""}

                {sixthImage ? <div>
                    <br />
                    < Image
                        placeholderColor="#eee"
                        src={sixthImage} alt=""
                        className="preview"
                    />

                </div>
                    : ""}


                {seventhImage ? <div>
                    <br />
                    < Image
                        placeholderColor="#eee"
                        src={seventhImage} alt=""
                        className="preview"
                    />

                </div>
                    : ""}

            </p>


            <p>{p2}</p>
            <p><h4 className="centered-span"><a href={github} target="_blank" rel="noreferrer" style={{ float: "right", textDecoration: "none" }}><span className="iconify"  style={{marginRight: "5px"}}  data-icon="logos:github-icon"></span> <span>Source Code</span></a> </h4></p>
           

            {link ? <div>       <p>
                <sub>{disclaimer}</sub></p>
                <p><a href={link} target="_blank" rel="noreferrer" style={{ float: "right" }}>Live Example</a></p> </div>
                : ""}
            <p> <a href={() => false} onClick={() => history.goBack()} style={{ cursor: "pointer" }}> Back </a></p>


        </div>





    </>

}

export default PortfolioItem











