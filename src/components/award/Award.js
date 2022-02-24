import React, { Component } from 'react'
import classes from './Award.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Award extends Component {
    render() {
        return (
            <div className={classes.box} id="award">
                {/* <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>AWARDS AND RECOGNITION</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}></div>
                                        <article className={classes.timeline_entry}>
                                            <h2 className={classes.heading}>Emerging Talent of the Year</h2>
                                            <div className={classes.Award}>
                                                <p></p>
                                                
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </section>
                </ScrollAnimation> */}
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                <span className={classes.head}>AWARDS AND ACHEIVEMENTS</span>
                <section className={classes.container}>
                    <div className={classes.container_content}>
                        <div className={classes.row}>
                            <div className={classes.row_md_12}>
                                
                                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                    <article >
                                        
                                        <div className={classes.label}>
                                            <h2 >Emerging Talent of the Year <i class="fa fa-trophy"></i></h2>
                                            <p>
                                                Received the <b>Emerging Talent of the Year</b> award in the ETC India's El Premio 2021. This award was given to early in career folks for their extraordinary work.   
                                            </p>
                                        </div>
                                    </article>
                                </ScrollAnimation>
                                <hr/>
                                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                    <article >
                                        
                                        <div className={classes.label}>
                                            <h2 >Winner Cisco HackFest <i class="fa fa-trophy"></i></h2>
                                            <p>
                                                Our team was awarded <b>First Prize in the National Yearly Cisco Hackfest</b> for a project to provide analysis for customer reviews for Cisco products. Each member of the team thereby <b>received a grant</b> to develop it further.
                                            </p>
                                        </div>
                                    </article>
                                </ScrollAnimation>
                                <hr/>
                                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                    <article >
                                        
                                        <div className={classes.label}>
                                            <h2 >Connected Recognition <i class="fa fa-trophy"></i></h2>
                                            <p>
                                                Received <b>12 connected recognition</b> for my work and determination to go above and beyond for the team.
                                            </p>
                                        </div>
                                    </article>
                                </ScrollAnimation>
                                <hr/>
                                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                    <article >
                                        
                                        <div className={classes.label}>
                                            <h2 >CNR Rao Merit Scholarship <i class="fa fa-trophy"></i></h2>
                                            <p>
                                                Received <b>CNR Rao Merit Scholarship</b> awarded by PES University <b>twice</b> for excellence in academics.  
                                            </p>
                                        </div>
                                    </article>
                                </ScrollAnimation>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>
            </div>


        )
    }
}

export default Award;