import PlantCard from '../../components/plant/plant';
import Grid from '@mui/joy/Grid';

import './dashboard.css';
import { Sheet, Typography } from '@mui/joy';
import { PlantNumbers, CriticalPlants } from '../../components/plant/stats';
import { useEffect, useState } from 'react';

const DashboardScreen = () => {
    // get plants
    const [plants, setPlants] = useState<any[]>([]);
    useEffect(() => {
        get_plant_information().then(ps => setPlants(ps));
    }, [])

    return (
        <section className="dashboard">
            <Sheet sx={{ padding: "2vw" }}>
                <Typography color="neutral" variant="plain" level="h1">
                    Dashboard
                </Typography>
                <Grid container spacing={3} sx={{ flexGrow: 1, paddingTop: "2vh" }}>
                    <Grid xs={3} spacing={3}>
                        <PlantNumbers number={plants.length}/>
                    </Grid>
                    <Grid xs={3} spacing={3}>
                        <CriticalPlants />
                    </Grid>
                </Grid>
            </Sheet>
            <MyPlants plants={plants}/>
        </section>
    )
}

const MyPlants = (props: { plants: any[]}) => {
    return (
        <Grid container spacing={3} sx={{ flexGrow: 1, margin: "1vw" }}>
            {
                props.plants.map(plant => {
                    return <Grid xs={3} key={"dsbitem-"+plant.id}>
                        <PlantCard 
                            name={plant.name} 
                            type={plant.common_name} 
                            lastWatered={plant.lastWatered ? plant.lastWatered.time : false} 
                            needsWatering={plant.needsWatering} 
                        />
                    </Grid>
                })
            }
        </Grid>
    )
}

const get_plant_information: () => Promise<any[]> = async () => {
    const result = await fetch("http://127.0.0.1:3000/users/ldoog0/plants");
    if (result.ok) {
        const ids = await result.json();
        // get individual plant information
        const plantInfos = await Promise.all(ids.map(async (id : any) => {
            const req = await fetch("http://127.0.0.1:3000/plant/" + id);
            return await req.json();
        }));
        console.log(plantInfos)
        return plantInfos;
    } else {
        return [];
    }
}

export default DashboardScreen;