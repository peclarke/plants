import { Button, Stack, Typography } from "@mui/joy"
import { useNavigate } from "react-router-dom";

export const ErrorEl = () => {
    const nav = useNavigate();

    return (
        <Stack sx={{margin: "5vw"}} spacing={2}>
            <Typography level="h1">
                Code 404.
            </Typography>
            <Typography level="body-lg">
                It seems you've navigated to a page that doesn't exist.
            </Typography>
            <Button type="button" sx={{width: "20vw" }} variant="solid" color="primary" onClick={() => nav("/")}>
                Take Me Home
            </Button>
        </Stack>
    )
}