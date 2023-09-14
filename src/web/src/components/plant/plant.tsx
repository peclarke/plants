import './plant.css';

export type PlantCardProps = {
    name: string;
    lastWatered: Date;
    needsWatering: boolean;
}

const PlantCard = (props: PlantCardProps) => {
    return (
        <div className="plantCard">
            <span id="plantName">{props.name}</span>
            <span id="lastWatered">{props.lastWatered.toString()}</span>
            <span id="needsWatering">{props.needsWatering ? "Needs Watering" : ""}</span>
        </div>
    )
}

export default PlantCard;