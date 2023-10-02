import { Card, CardContent, CircularProgress, Typography } from "@mui/joy"

type PlantNumberType = {
    total: number;
}

export const Interactions = () => {
    
}

export const PlantNumbers = (props: PlantNumberType) => {
    return (
        <Card variant="solid" color="primary" invertedColors>
            <CardContent orientation="horizontal">
                <CircularProgress size="lg" determinate value={20}>
                </CircularProgress>
                <CardContent>
                <Typography level="body-md">Number of Plants</Typography>
                <Typography level="h2">{props.total} {props.total === 1 ? "Plant" : "Plants"}</Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}

export const CriticalPlants = (props: { total: number, watering: number}) => {
    const value = props.watering / props.total * 100;

    return (
        <Card variant="solid" color="danger" invertedColors>
            <CardContent orientation="horizontal">
                <CircularProgress size="lg" determinate value={value}>
                </CircularProgress>
                <CardContent>
                <Typography level="body-md">Need Watering</Typography>
                <Typography level="h2">{props.watering} {props.watering === 1 ? "Plant" : "Plants"}</Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}