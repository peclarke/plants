import { AspectRatio, Button, Card, CardContent, CardOverflow, Divider, Typography } from '@mui/joy';
import './plant.css';

export type PlantCardProps = {
    id: number;
    name: string;
    type: string;
    lastWatered: string | boolean;
    needsWatering: boolean;
}

const example_pics = [
  "https://www.bhg.com/thmb/oDnjlrHprd67aYvinrMfQgVUPtQ=/5332x0/filters:no_upscale():strip_icc()/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg",
  "https://www.thespruce.com/thmb/_dCLkHrjuNsbz6EtA5b6OcC1s6c=/4185x0/filters:no_upscale():max_bytes(150000):strip_icc()/grow-bromeliads-indoors-1902667-06-f38c8f2549fb4685ba711653eae30fff.jpg",
  "https://www.australiangeographic.com.au/wp-content/uploads/2018/06/Mimosa_pudica_004.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/outdoor-hanging-plants-petunia-flowers-1655825453.jpeg?crop=1xw:0.84375xh;center,top&resize=1200:*",
  "https://www.bhg.com/thmb/gUkKHk-MHgzAk1_t7YzLYiwaoZw=/1500x0/filters:no_upscale():strip_icc()/celosia-annual-01-new-look-red-celosia-hero-177413004e7e42ae8a2ce7d7d84cd4a8.jpg",
  "https://today.oregonstate.edu/sites/today.oregonstate.edu/files/styles/1200x564/public/49652415157_224ff8dda5_c_0.jpg?itok=FOnh-Bee"
]

const PlantCard = (props: PlantCardProps) => {
    return (
        <Card variant="outlined" sx={{ width: "85%" }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={example_pics[Math.floor(Math.random() * example_pics.length)]}
              srcSet={example_pics[Math.floor(Math.random() * example_pics.length)]}
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
                    onClick={() => water_plant(props.id)}
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

export const water_plant = (id: number) => {
  // add a watering activity to that plant
  let formData = new FormData();
  formData.append('plantId', id.toString());
  formData.append('activityTypeId', "0");

  const d = new Date();
  d.setTime(d.getTime() - (d.getTimezoneOffset() * 60000));
  formData.append('time', d.toISOString().substr(0, 19).replace("T"," "));

  fetch("http://127.0.0.1:3000/activity", {
    method: 'POST',
    body: formData
  }).then(res => res.json().then(oo => console.log(oo)))
}

const format_last_watered = (time: string) => {
  const old: any = new Date(time);
  const current: any = new Date();

  const minutes = Math.round(Math.abs(current - old) / (1000 * 60));
  const hours = Math.round(Math.abs(current - old) / (1000 * 3600));
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
  } else if (minutes === 60) {
    return "1 hour ago";
  } else if (minutes > 60) {
    return hours + " hours ago";
  } else if (minutes > 1) {
    return minutes + " minutes ago";
  } else if (minutes <= 1) {
    return "Just now"
  }
}

export default PlantCard;