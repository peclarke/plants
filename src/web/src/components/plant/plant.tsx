import { AspectRatio, Button, Card, CardContent, CardOverflow, Divider, Typography } from '@mui/joy';
import './plant.css';

export type PlantCardProps = {
    name: string;
    type: string;
    lastWatered: string | boolean;
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
                    {props.lastWatered === false ? "Never" : format_last_watered(props.lastWatered as string)}
                </Typography>
            </div>
          </CardContent>
        </CardOverflow>
      </Card>
    )
}

const format_last_watered = (time: string) => {
  // console.log(time)
  const old: any = new Date(time);
  const current: any = new Date();

  const hours = Math.abs(current - old) / 36e5;
  const days  = Math.round((current - old) / (1000 * 60 * 60 * 24));
  const months = (current.getFullYear() - old.getFullYear()) * 12;

  if (months === 1) {
    return "1 month ago";
  } else if (months > 1) {
    return months + " months ago";
  } else if (hours === 24) {
    return "1 day ago";
  } else if (hours > 24) {
    return days + " days ago";
  } else if (hours === 1) {
    return "1 hour ago";
  } else {
    return hours + " hours ago";
  }
}

export default PlantCard;