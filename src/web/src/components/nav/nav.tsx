import { useNavigate } from 'react-router-dom';
import { Autocomplete, Button, DialogContent, DialogTitle, Dropdown, FormControl, FormLabel, Input, Menu, MenuButton, MenuItem, Modal, ModalDialog, Stack, Textarea, Typography } from '@mui/joy';
import Add from '@mui/icons-material/Add';
import { MoreVert } from '@mui/icons-material';
import IconButton from '@mui/joy/IconButton';
import './nav.css';
import { useContext, useEffect, useState } from 'react';
import InputFileUpload from '../file_input';
import { StateContext } from '../../state/context';

const NewPlantModal = (props: {open: boolean, setOpen: (val: boolean) => void}) => {
    const { state, setState } = useContext(StateContext);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:3000/planttypes")
            .then(res => res.json()
            .then(content => {
                // console.log(content);
                const commonNames = content.plantTypes.map((pt: any) => {
                    return {
                        "label": pt.commonName,
                        "id": pt.id
                    }
                });
                // console.log(commonNames);
                setTypes(commonNames);
            }));
    }, [])

    const [form, setForm] = useState<{
        personal: any;
        desc: any;
        typeName: any;
        type: any;
    }>({
        personal: "",
        desc: "",
        typeName: "",
        type: ""
    });

    return (
        <Modal open={props.open} onClose={() => props.setOpen(false)}>
        <ModalDialog>
            <DialogTitle>Add new plant</DialogTitle>
            <DialogContent>Fill in the information of your plant.</DialogContent>
            <form
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                props.setOpen(false);

                let formData = new FormData();
                formData.append('personalName', form.personal);
                formData.append('desc', form.desc);
                formData.append('userId', "1"); // TODO TAKE FROM STATE
                formData.append('plantTypeId', form.type.id)
                
                fetch("http://127.0.0.1:3000/plant", {
                    method: "POST",
                    body: formData
                }).then(_ => {
                    // get plant information
                    fetch("http://127.0.0.1:3000/users/"+state.username+"/plants")
                        .then((info: any) => info.json()
                        .then((out: number[]) => {
                            const mostRecent = out[out.length - 1];
                            fetch("http://127.0.0.1:3000/plant/"+mostRecent)
                                .then((info: any) => info.json()
                                .then((newInfo: any) => {
                                    // update plants state
                                    setState({
                                        ...state,
                                        plants: [...state.plants, newInfo]
                                    })
                                })
                            )
                        })
                    )
                })

                }}
            >
                <Stack spacing={2}>
                <FormControl>
                    <FormLabel>Personal name</FormLabel>
                    <Input 
                        autoFocus 
                        required 
                        placeholder="What's your plant's name?"
                        value={form.personal}
                        onChange={(e: any) => setForm({
                            ...form,
                            personal: e.target.value
                        })}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea 
                        required 
                        minRows={2}
                        placeholder="Tell us about your plant..."
                        value={form.desc}
                        onChange={(e: any) => setForm({
                            ...form,
                            desc: e.target.value
                        })}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Plant Type</FormLabel>
                    <Autocomplete
                        placeholder="e.g. Monstera Deliciosa..."
                        options={types}
                        sx={{ width: 300 }}
                        required
                        value={form.type}
                        onChange={(_e, newValue) => {
                            setForm({...form, type: newValue as string});
                        }}
                        inputValue={form.typeName}
                        onInputChange={(_e, newInputValue) => {
                          setForm({...form, typeName: newInputValue});
                        }}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Plant Photo</FormLabel>
                    <InputFileUpload />
                </FormControl>
                <Button type="submit">Submit</Button>
                </Stack>
            </form>
            </ModalDialog>
        </Modal>
    )
}

const NavComponent = () => {
    const [open, setOpen] = useState<boolean>(false);
    const nav = useNavigate();

    // check if authenticated TODO


    // return (<></>)
    return (
        <>
        <NewPlantModal open={open} setOpen={setOpen} />
        <nav>
            <section style={{
                display: "flex",
                alignItems: "center"
            }}>
                <Button 
                    variant="outlined"
                    color="neutral" 
                    onClick={() => nav("/")}
                    size="md"
                    className="navbtn"
                >
                    <Typography variant="plain">
                        Home
                    </Typography>
                </Button>
                <Button 
                    variant="outlined"
                    color="neutral" 
                    onClick={() => nav("/plants")}
                    size="md"
                    className="navbtn"
                >
                    <Typography variant="plain">
                        Your Plants
                    </Typography>
                </Button>
            </section>
            <section style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "2em"
            }}>
                <Button 
                    variant="solid" 
                    startDecorator={<Add />} 
                    onClick={() => setOpen(true)}
                    size="md"
                >
                    Add Plant
                </Button>
                <Dropdown>
                    <MenuButton
                        slots={{ root: IconButton }}
                        slotProps={{ root: { variant: 'solid', color: 'neutral' } }}
                    >
                        <MoreVert />
                    </MenuButton>
                    <Menu>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </Dropdown>
            </section>
        </nav>
        </>
    )
}

export default NavComponent;