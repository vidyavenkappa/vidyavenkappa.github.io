import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is <b>VIDYA VENKAPPA</b> a Data Science and Machine Learning Enthusiast. I am currently pursuing my M.Tech from IISC  and working as a Software Engineer at Cisco. I am working on a chatbot framework that helps customers use our application to develop their use-case-specific chatbots at ease.</p>
                        <p>I have always wondered how we can make the world a better place and serve the community using technology. I have actively been volunteering in various NGOs like <b>CareerVillage.org, Concern India Foundation, GiftAbled, Step Up For Students,</b> etc. They aim to improve education for underprivileged and special kids. I have also been volunteering in the <b>Pride ERO of Cisco</b> that aims to help the LGBTQ+ community within Cisco.  </p>
                        <p className={classes.br}>My research interest lies in <b>Ethics and Bias in artificial intelligence, fairness for women in technology, Computational education for kids, Fairness and acceptance in tech for the LGBTQ community</b>.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;