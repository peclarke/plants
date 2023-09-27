import PlantCard from '../../components/plant/plant';
import Grid from '@mui/joy/Grid';

import './dashboard.css';
import { Sheet, Typography } from '@mui/joy';
import { PlantNumbers, CriticalPlants } from '../../components/plant/stats';

const DashboardScreen = () => {
    return (
        <section className="dashboard">
            <Sheet sx={{ padding: "2vw" }}>
                <Typography color="neutral" variant="plain" level="h1">
                    Dashboard
                </Typography>
                <Grid container spacing={3} sx={{ flexGrow: 1, paddingTop: "2vh" }}>
                    <Grid xs={3} spacing={3}>
                        <PlantNumbers number={10}/>
                    </Grid>
                    <Grid xs={3} spacing={3}>
                        <CriticalPlants />
                    </Grid>
                </Grid>
            </Sheet>
            <MyPlants />
        </section>
    )
}

const MyPlants = () => {
    return (
        <Grid container spacing={3} sx={{ flexGrow: 1, margin: "1vw" }}>
            {
                Array.from(Array(10)).map(_i => {
                    return <Grid xs={3}>
                        <PlantCard 
                            name={Math.random() < 0.5 ? "Harry" : "Jim"}
                            type={"Monstera Deliciosa"}
                            lastWatered={new Date()}
                            needsWatering={Math.random() < 0.5}
                            key={Math.round(Math.random() * 100000)} 
                        />
                    </Grid>
                })
            }
        </Grid>
    )
}

export default DashboardScreen;