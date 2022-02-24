import React, { Component } from 'react'
import classes from './Hobbies.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdStar } from 'react-icons/md';
class Hobbies extends Component {
    render() {
        return (
            <div className={classes.box} id="hobbies">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                <span className={classes.head}>EXTRA CURRICULAR</span>
              
                <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}></div>                
                                    <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                        <article >
                                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_1}`} >
                                            <MdStar />
                                         </div>
                                        <div className={classes.label}>
                                            <h2 >Volunteering</h2>
                                            <span>
                                                <ul>
                                                    <li>
                                                        - Volunteered with <b>CareerVillage.org</b> to mentor under privileged kids and offer them career guidance.
                                                    </li>
                                                    <li>
                                                        - Volunteered with <b>Concern India Foundation</b> to show gratitude to the covid warriors by making thank you cards.
                                                    </li>
                                                    <li>
                                                        - Volunteered with <b>GiftAbled</b> to made teaching materials for kindergarden special kids.
                                                    </li>
                                                    <li>
                                                        - Volunteered with <b>Step Up For Students</b> and taught english to government school students.
                                                    </li>
                                                    <li>
                                                        - Volunteered with <b>Rashtrotthana Blood Bank</b> to donate blood every year since I turned 18.
                                                    </li>
                                                    <li>
                                                        - Volunteered with <b>LGBTQ+ Community (Pride ERO)</b> of Cisco to help community feel inclusive and help them improve their career paths within Cisco.
                                                    </li>

                                                </ul>
                                            </span>
                                        </div>
                                    </article>
                                </ScrollAnimation>
                                <hr/>
                                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                    <article >
                                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                            <MdStar />
                                        </div>
                                        <div className={classes.label}>
                                            <h2 >Invited Talks</h2>
                                            I presented my application in various top platforms of Cisco like : 
                                            
                                            <ul>
                                                <li>- <b>Cisco Symposium 2021</b> ( with 100+ participants). </li>
                                                <li>- <b>Cisco Tech Talk</b> ( with 90+ participants). </li>
                                                <li>- <b>Cisco Connect India 2021</b> ( with 50+ participants). </li>
                                                <li>- <b>Webinar</b> (with 120+ participants) </li>
                                                
                                            </ul>
                                        </div>
                                    </article>
                                </ScrollAnimation>
                                <hr/>
                                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                    <article >
                                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                            <MdStar />
                                        </div>
                                        <div className={classes.label}>
                                        <h2 >Organising</h2>
                                            
                                            <ul>
                                                <li>- <b>ACM Women Chapter</b> - PR head of PES University. </li>
                                                <li>- <b>Core team member</b> of Techno Cultural Fest (Aatmatrisha) of our college. </li>
                                                <li>- Volunteer of <b>Samaphana</b> an event to honor the martyr of the Indian Defense Forces. </li>
                                                <li>- Organised drawing competition for kids of <b>Kidwai Memorial Institute of Oncology hospital</b>.</li>
                                                <li>- Part of street play on various social topics like <b>mental health and LGBTQ+ community</b> in order to offer support and to make the society aware. </li>
                                            </ul>
                                        </div>
                                    </article>
                                </ScrollAnimation>
                                <hr/>
                                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                    <article >
                                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                            <MdStar />
                                        </div>
                                        <div className={classes.label}>
                                            <h2 >Hobbies</h2>
                                            <ul>
                                                <li>- In my free time I take time to <b>teach and mentor my cousins</b> and encourage them to explore more technologies. As I have always loved teaching kids, I take full advantage of it :P.
                                                </li>
                                                
                                                <li>- I take <b>carnatic music class</b> over the weekend as it helps me focus and stay calm.
                                                </li>

                                                <li>- I occasionally like <b>sketching and painting</b> or make personalised gifts for my loved ones.</li>
                                            </ul>
                                        </div>
                                        {/* <div className={classes.timeline_entry_inner}><div className={classes.timeline_icon_3 || classes.color_none}></div></div> */}
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

export default Hobbies;