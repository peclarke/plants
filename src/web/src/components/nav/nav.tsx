import './nav.css';
// import logo from 'public/logo.png';
import logo from '../../assets/head.png';

const NavComponent = () => {
    return (
        <nav>
            <section>
                <div className="aloego">
                    <img src={logo} id="logo"/>
                </div>
                <div className="active">
                    Home
                </div>
                <div>
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
                <div className="addPlant">
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