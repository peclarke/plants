import PlantCard from '../../components/plant/plant';
import Grid from '@mui/joy/Grid';

import './dashboard.css';
import { Divider, Sheet, Typography } from '@mui/joy';
import { PlantNumbers, CriticalPlants } from '../../components/plant/stats';
import { useContext, useEffect, useState } from 'react';
import { StateContext } from '../../state/context';
import { baseUrl } from '../../utils';

const DashboardScreen = () => {
    const { state, setState } = useContext(StateContext);

    // get plants
    const [needWatering, setNeedWatering] = useState<number>(0);
    useEffect(() => {
        get_plant_information(state.username).then(ps => {
            setState({
                ...state,
                plants: ps
            })
            const needwatering = ps.filter(p => p.needsWatering).length
            setNeedWatering(needwatering);
    }); 
    }, [])

    return (
        <section className="dashboard">
            <Sheet sx={{ padding: "2vw" }}>
                <Typography color="neutral" variant="plain" level="h1">
                    Dashboard
                </Typography>
                <Divider sx={{mb: 2, mt: 2}}/>
                <Grid container spacing={3} sx={{ flexGrow: 1, paddingTop: "2vh" }}>
                    <Grid xs={3} spacing={3}>
                        <PlantNumbers total={state.plants.length}/>
                    </Grid>
                    <Grid xs={3} spacing={3}>
                        <CriticalPlants total={state.plants.length} watering={needWatering}/>
                    </Grid>
                </Grid>
            </Sheet>
            <MyPlants plants={state.plants}/>
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
                            id={plant.id}
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

const get_plant_information: (usr: string) => Promise<any[]> = async (usr: string) => {

    const result = await fetch(baseUrl+"users/"+usr+"/plants");
    if (result.ok) {
        const ids = await result.json();
        // get individual plant information
        const plantInfos = await Promise.all(ids.map(async (id : any) => {
            const req = await fetch(baseUrl+"plant/" + id);
            return await req.json();
        }));
        return plantInfos;
    } else {
        return [];
    }
}

export default DashboardScreen;