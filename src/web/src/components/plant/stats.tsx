import { Card, CardContent, CircularProgress, SvgIcon, Typography, CardActions, Button } from "@mui/joy"

type PlantNumberType = {
    number: number
}

export const PlantNumbers = (props: PlantNumberType) => {
    return (
        <Card variant="solid" color="primary" invertedColors>
            <CardContent orientation="horizontal">
                <CircularProgress size="lg" determinate value={20}>
                </CircularProgress>
                <CardContent>
                <Typography level="body-md">Number of Plants</Typography>
                <Typography level="h2">{props.number} Plants</Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}

export const CriticalPlants = () => {
    return (
        <Card variant="solid" color="danger" invertedColors>
            <CardContent orientation="horizontal">
                <CircularProgress size="lg" determinate value={20}>
                </CircularProgress>
                <CardContent>
                <Typography level="body-md">Need Watering</Typography>
                <Typography level="h2">0 Plants</Typography>
                </CardContent>
            </CardContent>
        </Card>
    )
}