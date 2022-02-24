import React, { Component } from 'react'
// import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
// import { GoProject } from 'react-icons/go'
// import { FaArrowCircleDown } from 'react-icons/fa'
import hello from '../images/hello.png'
// import Pencil from '../images/Pencil.jpg'
// import laptop1 from '../images/laptop1.jpg'

class CarouselImages extends Component {
    render() {
        return (
            <div className={classes.carousel_container} id="start">
                <div  dynamicHeight className={classes.centered} >
                    <div className={classes.image_container} >
                        <img className={classes.image} src={hello} alt="myImage" />
                    </div>
                </div>
            </div>
        )
    }
}
export default CarouselImages