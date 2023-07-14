import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import {Link} from 'react-router-dom';
function About() {
    return (
    <div className="container aboutus">
        <div className="row">
            <div className="col-md-6 col-12 my-auto">
                <img src={require('../images/about.svg')} alt="about us" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 my-auto">
                <h1 className="display-4 text-center my-5">About Us </h1>
                <p className="lead text-justify text-center">Spruce Travels is conveniently designed with a Royal touch. Whether you travel for business or pleasure, you will appreciate our contemporary design and understated elegance of our user-friendly interface and premium partner hotels that embodies an artistic vision which runs through the entire customer experience. We believe in personalized service to cater every guest’s unique needs. You can find all the expected services of Hotel booking, destination transport and dining experience. For a business traveler, we provide all the business specific service like board-rooms for business meetings.... and for the family travellers, a home away from home.</p>
                <div className="text-center col-md-6 col-12 mx-auto">
                    <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">Contact us</Link>
                </div>
            </div>
        </div>
        <div className="about_company">
            <h1 className="display-4">About Company</h1>
            <div className="pt-4">
                <p className="about_info">Spruce Travels, is definitely a cosy cove of a place. Competent service with gracious cordiality evokes a sense of belonging for every guest. The sterling amenities, leisure activities, culinary treats and well-furnished rooms contribute to an unforgettable experience. The miscellaneous services of this hotel cater to the leisure needs, business requirements and gourmet demands of the guests. Room service, internet, 24-hour front desk, air conditioning, parking, travel desk, 24-hour security, concierge and doctor-on-call include the basic facilities provided to the guests. ATM/cash machine and non-smoking rooms are added benefits. The features like massage services, shopping arcade, Jacuzzi and a boutique offer total unwinding and relaxation. Wedding services, banquet facilities and catering services are also available at this hotel. Business services, conference facilities and conference suite are the set of amenities for hosting successful corporate meets. The multi-cuisine restaurant within the hotel premises churns out lip-smacking Indian, Chinese and Continental cuisines.</p>
            </div>
        </div>
        <div className="testimony">
            <h1 className="display-4 mb-4">What Our Clients says</h1>
            <div className="row mb-5">
                <div className="col-md-10 col-12 mx-auto">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner card border-0 shadow-lg p-4">
                            <div className="carousel-item active text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer.svg')} className="text-center img-fluid" width="450" height="400" alt="customer1"/>
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Lauren</h3>
                                            <p>Best app for booking on cheap prices easy to use with multiple payment options. Good place to stay. All staff members are very friendly, rooms are clean, and beds are so comfortable!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer1.svg')} className="text-center img-fluid" width="450" height="400" alt="customer2" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Samantha</h3>
                                            <p>I never saw such competitive prices of hotel rooms and that too with all the same features and amenities! this is way far the best Hotel Booking website I've ever came across!! and and this User- Interface is super fun and easy to use that adds more to the Travel experience!.Interesting pricing and exclusive package offers available on this site! Super easy hotel browsing experience!.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer3.svg')} className="text-center img-fluid" width="450" height="400" alt="customer3" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Daniel</h3>
                                            <p>Hello friends today I am going to share my experience with Spruce Travels.. this is the best site to search hotels this site is very useful for me as it saved my time and in to search a hotel at the cheapest price!  I could compare 100's of hotels with such ease!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer4.svg')} className="text-center img-fluid" width="450" height="400" alt="customer4" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Jake</h3>
                                            <p> I checked out the Spruce Travels website and compared hotels and rooms and to my surprise they were cheaper priced than all the sites I visited before! So I booked the Hotel from Spruce Travels  and also booked all my travel chauffers from this site only!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="team">
            <h1 className="display-4">Meet our Team</h1>
        </div>
        <div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Director</h5>
                        <div className="card-text text-black-50">CEO <p className="float-right">5 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <a href="https://www.facebook.com/">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="https://www.linkedin.com/signup">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="https://www.instagram.com/?hl=en">
                                <AiFillInstagram className="connect text-dark" /></a>
                            <a href="https://www.youtube.com/">
                                <IoLogoYoutube className="connect text-dark" /></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://source.unsplash.com/sNut2MqSmds/500x350" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Team Member</h5>
                        <div className="card-text text-black-50">Manager <p className="float-right">5 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <a href="https://www.facebook.com/">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="https://www.linkedin.com/signup">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="https://www.instagram.com/?hl=en">
                                <AiFillInstagram className="connect text-dark" /></a>
                            <a href="https://www.youtube.com/">
                                <IoLogoYoutube className="connect text-dark" /></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Team Member</h5>
                        <div className="card-text text-black-50">Manager <p className="float-right">8 years</p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <a href="https://www.facebook.com/">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="https://www.linkedin.com/signup">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="https://www.instagram.com/?hl=en">
                                <AiFillInstagram className="connect text-dark" /></a>
                            <a href="https://www.youtube.com/">
                                <IoLogoYoutube className="connect text-dark" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;