import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/joy';
import Add from '@mui/icons-material/Add';

import './nav.css';


const NavComponent = () => {
    
    const nav = useNavigate();

    return (
        <nav>
            <section style={{
                display: "flex",
                alignItems: "center"
            }}>
                {/* <div className="aloego"> */}
                    {/* <img src={logo} id="logo"/> */}
                {/* </div> */}
                {/* <div className="active" onClick={() => nav("/")}>
                    Home
                </div> */}
                <Button 
                    variant="outlined"
                    color="neutral" 
                    onClick={() => nav("/")}
                    size="md"
                    className="navbtn"
                >
                    <Typography variant="plain">
                        Home
                    </Typography>
                </Button>
                <Button 
                    variant="outlined"
                    color="neutral" 
                    onClick={() => nav("/plants")}
                    size="md"
                    className="navbtn"
                >
                    <Typography variant="plain">
                        Your Plants
                    </Typography>
                </Button>
                <div>
                    Tab 
                </div>
                <div>
                    Tab 
                </div>  
            </section>
            <section style={{
                display: "flex",
                alignItems: "center"
            }}>
                {/* <div className="addPlant" onClick={() => nav("/add")}>
                    New Plant +
                </div> */}
                <Button 
                    variant="solid" 
                    startDecorator={<Add />} 
                    onClick={() => nav("/add")}
                    size="md"
                >
                    Add Plant
                </Button>
                <div>
                    Profile
                </div>
            </section>
        </nav>
    )
}

export default NavComponent;