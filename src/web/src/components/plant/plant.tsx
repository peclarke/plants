import './plant.css';

export type PlantCardProps = {
    name: string;
}

const PlantCard = (props: PlantCardProps) => {
    return (
        <div>
            {props.name}
        </div>
    )
}

export default PlantCard;