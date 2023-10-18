import { Box, Stack, Typography, Divider, FormControl, FormLabel, Input, Button, Link } from "@mui/joy";
import { baseUrl } from "../../utils";
import { useContext, useState } from "react";
import { StateContext } from "../../state/context";


const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const { state, setState } = useContext(StateContext);
  
  return (
    <Box sx={{
      width: "20%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "10%",
      backgroundColor: "white",
      padding: "5%",
      borderRadius: "5%"
    }}>
    <Stack gap={4} sx={{ mb: 2 }}>
    <Stack gap={1}>
      <Typography level="h3">Sign in</Typography>
      <Typography level="body-sm">
        New to my app?{' '}
        <Link href="/signup" level="title-sm">
          Sign up!
        </Link>
      </Typography>
    </Stack>
  </Stack>
  <Divider>
    or
  </Divider>
  <Stack gap={4} sx={{ mt: 2 }}>
    <form
      onSubmit={(event: any) => {
        event.preventDefault();
        setLoading(true);

        let formData = new FormData();
        formData.append("username", email);
        formData.append("password", pass);

        fetch(baseUrl+"auth", {
          method: "POST",
          body: formData
        }).then(((res: any) => res.json().then((data: any) => {
          // new user details
          setState({
            ...state,
            username: data.username,
            userId: data.id,
            plants: [],
            loggedIn: true,
            expiryTime: data.tokenTime // ideally plus something but uh
          })
          localStorage.setItem("username", data.username);
          localStorage.setItem("userId", data.id);
          localStorage.setItem("expiryTime", data.tokenTime);

        }).finally(() => {
          setLoading(false);
        })))
      }}
    >
      <FormControl required>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" value={email} onChange={(event: any) => setEmail(event.target.value)}/>
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" value={pass} onChange={(event: any) => setPass(event.target.value)} />
      </FormControl>
      <Stack gap={4} sx={{ mt: 2 }}>
        <Button type="submit" fullWidth loading={loading}>
          Sign in
        </Button>
      </Stack>
    </form>
  </Stack>
  </Box>
  )
}

export default Login;