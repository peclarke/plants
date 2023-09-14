import { useNavigate } from 'react-router-dom';
import './nav.css';



const NavComponent = () => {
    
    const nav = useNavigate();

    return (
        <nav>
            <section>
                {/* <div className="aloego"> */}
                    {/* <img src={logo} id="logo"/> */}
                {/* </div> */}
                <div className="active" onClick={() => nav("/")}>
                    Home
                </div>
                <div onClick={() => nav("/plants")}>
                    Your Plants 
                </div>
                <div>
                    Tab 
                </div>
                <div>
                    Tab 
                </div>  
            </section>
            <section>
                <div className="addPlant" onClick={() => nav("/add")}>
                    New Plant +
                </div>
                <div>
                    Profile
                </div>
            </section>
        </nav>
    )
}

export default NavComponent;