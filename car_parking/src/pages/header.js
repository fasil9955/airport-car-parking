

function header ( ) {
return(
    <div>
        <app-header>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a class="navbar-brand" href="/"><img src="/assets/navigation_logo.png"
                                alt="AIRPORT PARKING - RESERVATIONS.COM" itemprop="logo" height="40" /></a>


                        <div class="col"></div>



                        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                            <ul class="navbar-nav">

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        My Account
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="navbarDropdownMenuLink">

                                        <a class="dropdown-item sign-in" href="/">Sign In</a>
                                        <a class="dropdown-item sign-up" href="/">Register</a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </header>
            </app-header>

    </div>
)
}

export default header;