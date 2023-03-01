

const Home = () =>{
    return (
      <div id="root" >
         <body>
    <div id="app" class="generic">
        <div>
            
            <div class="content">
                <us-page-home inline-template>
                    <section id="home_page">
                        <div class="years-of-service">
                            <div class="container">
                                For 20 years, we've helped travelers on their way. With free cancellations & a customer
                                service team in the US, we are committed to serving you.
                            </div>
                        </div>
                        <section id="hero"
                            style={{backgroundImage: 'url("assets/generic_landing.jpg")', minHeight: '500px'}}>
                            <div class="hero-backdrop"></div>
                            <div class="container position-relative">
                                <div class="hero-heading mb-4">
                                    <h1>SAVE BIG ON AIRPORT PARKING</h1>
                                    <h2>We have the best deals for airport parking lots!</h2>
                                </div>
                                <div class="searchbox landing">
                                    <div class="row tabs">
                                        <div class="tab">
                                            <div class="heading">Most Convenient</div>
                                            <div class="button">
                                                <div class="icon"><i class="fas fa-car"></i></div>
                                                Airport Parking Only
                                            </div>
                                        </div>
                                        <div class="tab">
                                            <div class="heading">Best Value</div>
                                            <div class="button">
                                                <div class="icon"><i class="fas fa-bed"></i> + <i
                                                        class="fas fa-car"></i></div>
                                                Hotel &amp; Parking Package
                                            </div>
                                        </div> 
                                    </div>
                                    <form action="/results.html" method="post" autocomplete="off" novalidate="">
                                        <div class="options row m-0"><label class="col-12 col-xl-3 p-0 mr-xl-3 mb-2">
                                                <div class="heading mb-1">Departure Airport</div>
                                                <div class="placeholder placeholder-airport">
                                                    <input type="text" placeholder="Departure Airport" class="placeholder placeholder-airport"/>
                                                </div> <i
                                                    class="fas fa-map-marker-alt input-icon"></i>
                                            </label>
                                            <div class="col p-0 row m-0 mb-2 dates"><label
                                                    class="col-sm-6 p-0 pr-sm-3 date_input">
                                                    <div class="heading mb-1">Parking Check-In</div>
                                                    <div class="placeholder">
                                                        <input name="checkin" type="date" placeholder="Parking Check-Out" class="placeholder placeholder-airport" style={{width:'100%'}}/>
                                                    </div> 
                                                </label> <label class="col-sm-6 p-0 pl-sm-0 date_input">
                                                    <div class="heading mb-1">Parking Check-Out</div>
                                                        <input name="Check-Out" type="date" placeholder="Parking Check-Out" class="placeholder placeholder-airport" style={{width:'100%'}}/>
                                                   
                                                </label></div>
                                            <div class="col-12 col-xl-2 p-0 pl-xl-3 my-3 my-xl-0">
                                                <div class="d-none d-xl-block heading mb-1 invisible">Submit</div>
                                                <button type="submit"class="btn btn-secondary btn-big btn-block p-2"><span>SEARCH</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                        <section id="benefits">
                            <div class="container">
                                <h5>What Can You Save with AirportParkingReservations.com?</h5>

                                <ul class="row">
                                    <li class="col-12 col-lg-4 p-3">
                                        <img src="/assets/check.png" alt="Tick" width="50" height="50" />
                                        <div>
                                            <h6>Save Money</h6>
                                            <p>Save up to 70% off on our site compared to the cost of on-airport
                                                parking.</p>
                                        </div>
                                    </li>
                                    <li class="col-12 col-lg-4 p-3">
                                        <img src="/assets/check.png" alt="Tick" width="50" height="50" />
                                        <div>
                                            <h6>Save Time</h6>
                                            <p>
                                                It's easy to compare parking at all major airports.<br />
                                                Booking a reservation is quick & simple!
                                            </p>
                                        </div>
                                    </li>
                                    <li class="col-12 col-lg-4 p-3">
                                        <img src="/assets/check.png" alt="Tick" width="50" height="50" />
                                        <div>
                                            <h6>Save Stress</h6>
                                            <p>
                                                Guarantee your parking spot by booking in advance. Can't make it?
                                                Cancellations are free.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </section>
                </us-page-home>
            </div>


           
        </div>
    </div>


</body>
       
        
 
    
  
      </div>
      
    );
  }
  
  export default Home;