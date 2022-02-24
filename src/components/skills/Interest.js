import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';

class Interest extends Component {
  render() {
    return (
        <div className={classes.box} id="interest">
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                <span className={classes.head}>WORK EXPERIENCE</span>
                <section className={classes.container}>
                    <div className={classes.container_content}>
                        <div className={classes.row}>
                            <div className={classes.row_md_12}>
                                <div className={classes.timeline_centered}>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article className={classes.timeline_entry}>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                <MdWork />
                                            </div>
                                            <div className={classes.label}>
                                                <h2 >Software Engineer II at Cisco <span>June 2019 - Present</span></h2>
                                                <p>
                                                  Working on restructuring the whole application into microservice architecture. 
                                                  Developed a simplified login page for both internal and external client.
                                                  Developed a skill sharing feature for all the users to reuse the skills developed by other clients. 
                                                </p>

                                                <hr/>
                                                <h2 >Software Engineer I at Cisco <span>Jan 2019 - June 2021</span></h2>
                                                <p>
                                                  Developed a critical tool that tracks the status of the test orders of the application. Ownership of building end-to-end features. 
                                                  Developed a release management tool that tracks and helps in the release management process. 
                                                  Developed an application that checks the infosec of the application used inside Cisco. All the applications developed and also all the used in Cisco have to go through this application to check the infosec of the application. 
                                                  Developed the analytics module for a chatbot. Created the analytics dashboard that provides information on bot usage and trends. It helps the customers to get insights into their bot and improve it in a continuous fashion.
                                                </p>
                                            </div>
                                        </article>
                                    </ScrollAnimation>
                             
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article className={classes.timeline_entry}>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                <MdWork />
                                            </div>
                                            <div className={classes.label}>
                                                <h2 >Software Developer Internship at Singularium Technologies  <span>May 2017 - June 2017</span></h2>
                                                <p>
                                                  Analyzed source code to identified and rectified potential functionality issues. Worked on making the search engine of the tool better. Created Email Notification Module to send notifications to clients about their status. Partnered with company mentor to learn best practices in software design. </p>
                                            </div>
                                        </article>
                                    </ScrollAnimation>
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article className={classes.timeline_entry}>
                                            <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                <MdSchool />
                                            </div>
                                            <div className={classes.label}>
                                                <h2 >Teaching at TechSparx Technology Training School <span>May 2015 - Aug 2015</span></h2>
                                                <p> I had a chance to teach students of class 9th, 10th Java course which helped me improve and strengthen my basic programming skills. Served as mentor to students, answered questions, provided tutoring services, and offered one-on-one lesson reviews. </p>
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

export default Interest;