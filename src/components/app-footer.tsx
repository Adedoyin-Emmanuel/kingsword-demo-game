import React from 'react'
import CategoryIcon from "./../assets/images/category.svg";
import HomeIcon from "./../assets/images/home.svg";
import RecentIcon from "./../assets/images/recent.svg";

const Footer = ():JSX.Element => {
    return (
        <React.Fragment>
            <section className="app-footer d-flex align-items-center justify-content-around">
                <section className="home">
                    <img src={HomeIcon} alt="Home" height={"20"} width={"20"}/>
                </section>
                
                <section className="home">
                    <img src={CategoryIcon} alt="Category" height={"20"} width={"20"}/>
                </section>
                
                <section className="home">
                    <img src={RecentIcon} alt="Recent" height={"20"} width={"20"}/>
                </section>
            </section>
        </React.Fragment>
    )
}


export default Footer;