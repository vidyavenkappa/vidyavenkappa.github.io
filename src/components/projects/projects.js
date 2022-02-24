import React, { Component } from 'react';
import classes from './Projects.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';

class Projects extends Component {
    render() {
        return (
            <div className={classes.box} id="projects">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MY PROJECTS</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2>CSR Report </h2>
                                                    <p>Perform Natural Language processing on the CSR(Corporate social responsibility) reports of various companies to get a better idea on the fields they are improving upon. Perform a data visualization on the same and compare the companies.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2>Gender Classification</h2>
                                                    <p>Gender recognition is essential and critical for many applications in the commercial domains such as applications of human-computer interaction and computer-aided physiological or psychological analysis since it contains a wide range of information regarding the characteristics difference between male and female. This project aims to recognize gender for a given image using various different approaches.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2>Seoul Bike Sharing Demand Forecasting</h2>
                                                    <p>Developed a good algorithm using Gradient Boosting technique to predict the rented bike demand forecasting. We obtained an accuracy of 96%.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2>Cognalyst</h2>
                                                    <p>A Cognitive Assistant automates the feedback process. The user’s text feedback is processed, analyzed, and is rated using sentiment analysis. The intents are marked and the concerns of the business are listed out.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2>Crypto</h2>
                                                    <p>Cryptography is a method of protecting information and communications through the use of codes so that only those for whom the information is intended can read and process it. This project has various cryptography algorithms implements for encryption and decryption of data.</p>

                                                </div>
                                                <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Projects;
