import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";
import './HomePage.css';

const HomePage = () => {

    const [roomSearchResults, setRoomSearchResults] = useState([]);

    // Function to handle search results
    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    return (
        // <div className="home">
        //     {/* HEADER / BANNER ROOM SECTION */}
        //     <section>
        //         <header className="header-banner">
        //             <img src="./assets/images/hotel.webp" alt="Phegon Hotel" className="header-image" />
        //             <div className="overlay"></div>
        //             <div className="animated-texts overlay-content">
        //                 <h1>
        //                     Welcome to <span className="phegon-color">Royal Stay</span>
        //                 </h1><br />
        //                 <h3>Step into a haven of comfort and care</h3>
        //             </div>
        //         </header>
        //     </section>

        //     {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
        //     <RoomSearch handleSearchResult={handleSearchResult} />
        //     <RoomResult roomSearchResults={roomSearchResults} />

        //     <h4><a className="view-rooms-home" href="/rooms">All Rooms</a></h4>

        //     <h2 className="home-services">Services at <span className="phegon-color">Royal Stay</span></h2>

        //     {/* SERVICES SECTION */}
        //     <section className="service-section"><div className="service-card">
        //         <img src="./assets/images/ac.png" alt="Air Conditioning" />
        //         <div className="service-details">
        //             <h3 className="service-title">Air Conditioning</h3>
        //             <p className="service-description">Stay cool and comfortable throughout your stay with our individually controlled in-room air conditioning.</p>
        //         </div>
        //     </div>
        //         <div className="service-card">
        //             <img src="./assets/images/mini-bar.png" alt="Mini Bar" />
        //             <div className="service-details">
        //                 <h3 className="service-title">Mini Bar</h3>
        //                 <p className="service-description">Enjoy a convenient selection of beverages and snacks stocked in your room's mini bar with no additional cost.</p>
        //             </div>
        //         </div>
        //         <div className="service-card">
        //             <img src="./assets/images/parking.png" alt="Parking" />
        //             <div className="service-details">
        //                 <h3 className="service-title">Parking</h3>
        //                 <p className="service-description">We offer on-site parking for your convenience . Please inquire about valet parking options if available.</p>
        //             </div>
        //         </div>
        //         <div className="service-card">
        //             <img src="./assets/images/wifi.png" alt="WiFi" />
        //             <div className="service-details">
        //                 <h3 className="service-title">WiFi</h3>
        //                 <p className="service-description">Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.</p>
        //             </div>
        //         </div>

        //     </section>
        //     {/* AVAILABLE ROOMS SECTION */}
        //     <section>

        //     </section>
        // </div>

        <div>
            <section id="home">
                <div id="showcase">
                    <div class="container">
                        <div class="showcase-content">
                            <h1><span class="text-primary">Enjoy</span> your stay</h1>
                            <p class='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in cum qui hic nemo veritatis.</p>
                            <a href="#" class="btn">Book Now</a>
                        </div>
                    </div>
                </div>
                <section id="home-info" class='bg-dark'>
                    <div class="info-img">

                    </div>
                    <div class="info-content">
                        <h2><span class="text-primary">The History</span> Of Our Hotel</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aperiam maxime magni at? Praesentium iure vitae accusantium dolorum sit fugiat delectus rem atque, provident ipsam exercitationem. Enim veniam dolores distinctio, laborum fugiat recusandae saepe possimus explicabo perferendis quae eaque nobis.</p>
                        <a href="#" class="btn btn-light">Read more</a>
                    </div>
                </section>
                <section id="features">
                    <div class="box bg-light">
                        <i class="fas fa-hotel fa-3x"></i>
                        <h3>Great Location</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nostrum.</p>
                    </div>
                    <div class="box bg-primary">
                        <i class="fas fa-utensils fa-3x"></i>
                        <h3>Free meals</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quo.</p>
                    </div>
                    <div class="box bg-light">
                        <i class="fas fa-dumbbell fa-3x"></i>
                        <h3>Fitness room</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, modi?</p>
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
                            </span> Hotel BT</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis provident quod eius distinctio inventore sit deserunt sequi totam aliquam, consequatur, asperiores fugiat tempore atque, dolores earum? Ullam assumenda tempore qui?</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, alias perspiciatis nostrum laboriosam numquam quam vitae saepe maiores illo dicta?</p>
                        </div>
                        <div class="info-right">
                            <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="info"/>
                        </div>
                    </div>
                </section>
                <div class="clr"></div>
                <section id="testimonials" class="py-3">
                    <div class="container">
                        <h2 class="l-heading">What our guests say</h2>
                        <div class="testimonial bg-primary">
                            <img src="https://images.pexels.com/photos/2889359/pexels-photo-2889359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="John"/>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia qui repudiandae omnis porro suscipit mollitia sint error, dolor deserunt eaque at voluptatum, perspiciatis laborum facere laudantium sed repellendus ex, quos consequuntur reprehenderit quibusdam. Deleniti cumque pariatur omnis placeat. Alias!</p>
                        </div>
                        <div class="testimonial bg-primary">
                            <img src="https://images.pexels.com/photos/2899707/pexels-photo-2899707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Samantha"/>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia qui repudiandae omnis porro suscipit mollitia sint error, dolor deserunt eaque at voluptatum, perspiciatis laborum facere laudantium sed repellendus ex, quos consequuntur reprehenderit quibusdam. Deleniti cumque pariatur omnis placeat. Alias!</p>
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
