import React from "react";
import './HomePage.css';

const HomePage = () => {

    return (

        <div>
            <section id="home">
                <div id="showcase">
                    <div class="container">
                        <div class="showcase-content">
                            <h1 id="lead-heading"><span class="text-primary">Enjoy</span> your stay</h1>
                            <p class='lead'>Experience the ultimate in comfort and luxury at Royal Stay, where every detail is designed to make your stay unforgettable.</p>
                            <a href="/rooms" class="btn">Book Now</a>
                        </div>
                    </div>
                </div>
                <section id="home-info" class='bg-dark'>
                    <div class="info-img">

                    </div>
                    <div class="info-content">
                        <h2><span class="text-primary">The History</span> Of Our Hotel</h2>
                        <p>Founded in 2024, Royal Stay has a rich history of providing exceptional hospitality. Our hotel has been a landmark in the city, offering luxurious accommodations and world-class amenities to guests from around the globe. Over the years, we have continually updated our facilities to ensure that we meet the highest standards of comfort and convenience.</p>
                        <a href="#" class="btn btn-light">Read more</a>
                    </div>
                </section>
                <section id="features">
                    <div class="box bg-light">
                        <i class="fas fa-hotel fa-3x"></i>
                        <h3>Great Location</h3>
                        <p>Our hotel is situated in the heart of the city, providing easy access to popular attractions and business centers.</p>
                    </div>
                    <div class="box bg-primary">
                        <i class="fas fa-utensils fa-3x"></i>
                        <h3>Free meals</h3>
                        <p>Enjoy complimentary meals prepared by our top chefs, available throughout your stay.</p>
                    </div>
                    <div class="box bg-light">
                        <i class="fas fa-dumbbell fa-3x"></i>
                        <h3>Fitness room</h3>
                        <p>Stay fit and healthy with our state-of-the-art fitness room, equipped with the latest exercise machines.</p>
                    </div>
                </section>
                <div class="clr"></div>
            </section>


            <section id="about">
                <section id="about-info" class="bg-light py-3">
                    <div class="container">
                        <div class="info-left">
                            <h1 class="l-heading"><span class="text-primary">
                                About
                            </span> Royal Stay</h1>
                            <p>Royal Stay offers luxurious accommodations with exceptional service, ensuring a memorable experience for all our guests.</p>
                            <p>Our hotel features modern amenities, including a spa, swimming pool, and gourmet dining options, making it the perfect choice for both business and leisure travelers.</p>
                        </div>
                        <div class="info-right">
                            <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="info" />
                        </div>
                    </div>
                </section>
                <div class="clr"></div>
                <section id="testimonials" class="py-3">
                    <div class="container">
                        <h2 class="l-heading">What our guests say</h2>
                        <div class="testimonial bg-primary">
                            <img src="https://images.pexels.com/photos/2889359/pexels-photo-2889359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="John" />
                            <p>"The Royal Stay hotel exceeded all my expectations. The staff was incredibly friendly and the amenities were top-notch. I will definitely be returning!"</p>
                        </div>
                        <div class="testimonial bg-primary">
                            <img src="https://images.pexels.com/photos/2899707/pexels-photo-2899707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Samantha" />
                            <p>"A wonderful experience from start to finish. The rooms were clean and comfortable, and the location was perfect for exploring the city."</p>
                        </div>
                    </div>
                </section>
            </section>

            <footer id="main-footer">
                <p>Hotel BT &copy; 2019, All rights reserved</p>
            </footer>
        </div>

    );
}

export default HomePage;
