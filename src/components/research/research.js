import React, { Component } from 'react';
import classes from './Research.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdWork } from 'react-icons/md';

class Research extends Component {
    render() {
        return (
            <div className={classes.box} id="research">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MY RESEARCH</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_1}`} >
                                                    <MdWork /> 
                                                </div>
                                                <div className={classes.label}>
                                                    <h2>Automatic Subtitle Generation for Videos <span>IEEE · Apr 1, 2020 </span></h2>
                                                    <p>The aim of the project is to present a media player which can generate subtitles for videos in real time.We extract the audio from the video, perform speech recognition, generate a subtitle and finally combine the subtitles and the video. </p>
                                                    <span><a href="https://ieeexplore.ieee.org/document/9074180">Click here to read the paper</a></span>
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

export default Research;
