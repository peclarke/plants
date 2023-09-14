import PlantCard from '../../components/plant/plant';
import './dashboard.css';

const DashboardScreen = () => {
    return (
        <section className="dashboard">
            <h2>Dashboard</h2>
            <MyPlants />
        </section>
    )
}

const MyPlants = () => {
    return (
        <section className="featurePlants">
            {
                Array.from(Array(10)).map(i => {
                    return <PlantCard 
                    name={Math.random() < 0.5 ? "Harry" : "Jim"}
                    lastWatered={new Date()}
                    needsWatering={Math.random() < 0.5}
                    key={Math.round(Math.random() * 100000)}
                />
                })
            }
            
        </section>
    )
}

export default DashboardScreen;