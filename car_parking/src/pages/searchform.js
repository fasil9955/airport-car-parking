const form = () =>{
    return(
        <div>
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
    )
}

export default form;