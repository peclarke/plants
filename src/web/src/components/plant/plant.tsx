import { AspectRatio, Button, Card, CardContent, CardOverflow, Divider, Typography } from '@mui/joy';
import './plant.css';

export type PlantCardProps = {
    name: string;
    type: string;
    lastWatered: Date;
    needsWatering: boolean;
}

const PlantCard = (props: PlantCardProps) => {
    return (
        <Card variant="outlined" sx={{ width: "85%" }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
              srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">{props.name}</Typography>
          <Typography level="body-sm">{props.type}</Typography>
        </CardContent>
        <CardOverflow variant="soft" color={props.needsWatering ? "danger" : "neutral"}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                <Button 
                    color={props.needsWatering ? "danger" : "primary"}
                    onClick={function(){}}
                    size="sm"
                    variant={props.needsWatering ? "solid" : "outlined"}
                >
                        Water
                </Button>
            </Typography>
            <Divider orientation="vertical" />
            <div>
                <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                    Last watered:
                </Typography>
                <Typography level="body-xs" fontWeight="lg" textColor="text.secondary">
                    1 hour ago
                </Typography>
            </div>
          </CardContent>
        </CardOverflow>
      </Card>
    )
}

export default PlantCard;