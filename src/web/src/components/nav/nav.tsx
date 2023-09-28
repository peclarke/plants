import { useNavigate } from 'react-router-dom';
import { Button, Dropdown, Menu, MenuButton, MenuItem, Typography } from '@mui/joy';
import Add from '@mui/icons-material/Add';
import { MoreVert } from '@mui/icons-material';
import IconButton from '@mui/joy/IconButton';
import './nav.css';

const NavComponent = () => {
    
    const nav = useNavigate();

    // check if authenticated TODO


    // return (<></>)
    return (
        <nav>
            <section style={{
                display: "flex",
                alignItems: "center"
            }}>
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
            </section>
            <section style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "2em"
            }}>
                <Button 
                    variant="solid" 
                    startDecorator={<Add />} 
                    onClick={() => nav("/add")}
                    size="md"
                >
                    Add Plant
                </Button>
                <Dropdown>
                    <MenuButton
                        slots={{ root: IconButton }}
                        slotProps={{ root: { variant: 'solid', color: 'neutral' } }}
                    >
                        <MoreVert />
                    </MenuButton>
                    <Menu>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </Dropdown>
            </section>
        </nav>
    )
}

export default NavComponent;