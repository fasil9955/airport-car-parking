import React,{useState,useEffect} from "react";
import moment from "moment";
import axios from "axios";
import AirportSuggestions from "./AirportSuggestions";
const SearchForm = () => {

    const [airports, setAirports] = useState([]);
    const [filteredAirports, setFilteredAirports] = useState('');
    
    const getAirport = async () => {
        
        try {
            const { data, status } = await axios.get('http://43.205.1.85:9009/v1/airports');
            if (status === 200 && data) {
                setAirports(data?.results ?? [])
            } else {
                setAirports([])
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.message)
        }
    }

    useEffect(() => {
        
        getAirport()
    }, [])

    const [loading, setLoading] = useState(true);
    
    const selectAirport =(value)=>{
        setDepartureAirport(value)
        setFilteredAirports([])
    }

    const today = moment().format('YYYY-MM-DD').toString()
    const tomorrow = moment().add(1,'days').format('YYYY-MM-DD').toString()
    const[departureAirport,setDepartureAirport ]= useState('');
    const[parkingCheckIn,setParkingCheckIn ]= useState(today);
    const[parkingCheckOut,setParkingCheckOut ]= useState(tomorrow);
    const[errors,SetErrors]=useState({
        departureAirport:false,
        parkingCheckIn:false,
        parkingCheckOut:false
    })
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        //i'm printing all the data fetched in console just to verify everything works fine
        console.log(departureAirport);
        console.log(parkingCheckIn);
        console.log(parkingCheckOut);

        if(moment(parkingCheckIn) > moment(parkingCheckOut))
        {
            alert("Check In Date can't be greater than Check Out Date")
            SetErrors((err) => ({ ...err, parkingCheckOut: true }))

        }

       else if(departureAirport && parkingCheckIn && parkingCheckOut)
        {
            alert("Form Submitted")
            window.location.href = `/results?departureAirport=${departureAirport}&checkin=${parkingCheckIn}&checkout=${parkingCheckOut}`

        }
        else{
            SetErrors({
                departureAirport:!departureAirport,
                parkingCheckIn:!parkingCheckIn,
                parkingCheckOut:!parkingCheckOut
            })
        }
    }

    const parkingCheckOutHandler =(e) => {
        const {value}=e.target;
            setParkingCheckOut(value);
            if(moment(parkingCheckIn) > moment(parkingCheckOut))
            {
                SetErrors((err) => ({ ...err, parkingCheckOut: true }))
    
            }
            if (e.target.value) {
                SetErrors((err) => ({ ...err, parkingCheckOut: false }))
                } 
            else {
                SetErrors((err) => ({ ...err, parkingCheckOut: true }))
                }
                
    }
    const parkingCheckInHandler =(e) => {
        const {value}=e.target;
            setParkingCheckIn(value);
           
            if (e.target.value) {
                SetErrors((err) => ({ ...err, parkingCheckIn: false }))
                } else {
                SetErrors((err) => ({ ...err, parkingCheckIn: true }))
                }
    }
    const departureAirportHandler =(e) => {
        const {value}=e.target;
        if(value.length<15){
            setDepartureAirport(value);
        }
        
        if (e.target.value) {
            SetErrors((err) => ({ ...err, departureAirport: false }))
            } else {
            SetErrors((err) => ({ ...err, departureAirport: true }))
            }
            const filteredAirportsData = airports.filter((airport) => 
            airport.name.toLowerCase().includes(e.target.value.toLowerCase()));
            setFilteredAirports(filteredAirportsData?? [])
            console.log(filteredAirports)
    }
    
    return (
        <section id="hero"
        style={{backgroundImage: 'url("assets/generic_landing.jpg")', minHeight: '500px'}}>
        <div className="hero-backdrop"></div>
        <div className="container position-relative">
            <div className="hero-heading mb-4">
                <h1>SAVE BIG ON AIRPORT PARKING</h1>
                <h2>We have the best deals for airport parking lots!</h2>
            </div>
            <div className="searchbox landing">
                <div className="row tabs">
                    <div className="tab">
                        <div className="heading">Most Convenient</div>
                        <div className="button">
                            <div className="icon"><i className="fas fa-car"></i></div>
                            Airport Parking Only
                        </div>
                    </div>
                    <div className="tab">
                        <div className="heading">Best Value</div>
                        <div className="button">
                            <div className="icon"><i className="fas fa-bed"></i> + <i
                                    className="fas fa-car"></i></div>
                            Hotel &amp; Parking Package
                        </div>
                    </div> 
                </div>
                {loading && <h3>loading..</h3>}
                <form action="/results.html" method="post" >
                    <div className="options row m-0"><label className="col-12 col-xl-3 p-0 mr-xl-3 mb-2">
                            <div className="heading mb-1">Departure Airport</div>
                            <div className="placeholder placeholder-airport">
                                <input type="text" placeholder="Departure Airport" 
                                onChange={departureAirportHandler} 
                                value={departureAirport} className="placeholder placeholder-airport"/>
                                
                            </div> <i
                                className="fas fa-map-marker-alt input-icon"></i>
                            
                            {loading ?<h1>Loading</h1>:null}
                            {(errors && errors.departureAirport)? <h4 style={{color:"white",backgroundColor:"Highlight"}}>Invaild Departure Airport</h4>:null}
                            <AirportSuggestions airports={filteredAirports} selectAirport={selectAirport} />

                        </label>
                        <div className="col p-0 row m-0 mb-2 dates"><label
                                className="col-sm-6 p-0 pr-sm-3 date_input">
                                <div className="heading mb-1">Parking Check-In</div>
                                <div className="placeholder">
                                    <input name="checkin" type="date" placeholder="Parking Check-Out" onChange={parkingCheckInHandler} value={parkingCheckIn} className="placeholder placeholder-airport" style={{width:"100%"}}/>
                                {(errors && errors.parkingCheckIn)? <h2 style={{color: "white",backgroundColor:"Highlight"}}>Invaild Parking Check-In</h2>:null}
                                </div> 
                            </label> <label className="col-sm-6 p-0 pl-sm-0 date_input">
                                <div className="heading mb-1">Parking Check-Out</div>
                                    <input name="Check-Out" type="date" placeholder="Parking Check-Out" onChange={parkingCheckOutHandler} value={parkingCheckOut} className="placeholder placeholder-airport" style={{width:"100%"}}/>
                                {(errors && errors.parkingCheckOut)? <h2 style={{color: "white",backgroundColor:"Highlight"}}>Invaild Parking Check-Out</h2>:null}
                            </label></div>
                        <div className="col-12 col-xl-2 p-0 pl-xl-3 my-3 my-xl-0">
                            <div className="d-none d-xl-block heading mb-1 invisible">Submit</div>
                            <button type="submit" onClick={onSubmitHandler} className="btn btn-secondary btn-big btn-block p-2"><span>SEARCH</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
}
export default SearchForm;
