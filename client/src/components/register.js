// import { useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import * as React from "react";
import GeoSearch from "../mapBoxGeocode";
import * as React from "react";
import Button from "@mui/material/Button";
import SavePicture from "./save-picture";
import Box from "@mui/material/Box";

import { receveidNewNeedies } from "../redux/needies-list/slice.js";
import Modal from "@mui/material/Modal";
import {
    TextField,
    Typography,
    InputLabel,
    Select,
    FormControl,
    MenuItem,
} from "@material-ui/core";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export function Register() {
    const dispatch = useDispatch();

    const [newNeedy, setNewNeedy] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState();
    const [geoSearch, setGeoSearch] = useState([]);
    const [placeName, setPlaceName] = useState();
    const [long, setLong] = useState("");
    const [lat, setLat] = useState("");
    const [type, setType] = useState("");
    const [typeGeometry, setTypeGeometry] = useState("");
    const [img, setImg] = useState({});
    const [id, setId] = useState();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeGeo = (place) => {
        setCategory(place.place_name);
        setLong(place.geometry.coordinates[0]);
        setLat(place.geometry.coordinates[1]);
        setType(place.type);
        setTypeGeometry(place.geometry.type);
        setName(place.place_name);
    };

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const handleChangeImg = (e) => {
        setImg(e);
    };

    const handleClick = () => {
        fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                needy: placeName,
                category: category,
                description: description,
                geoJSON: {
                    type: type,
                    geometry: {
                        type: typeGeometry,
                        coordinates: [long, lat],
                    },
                },
            }),
        })
            .then((res) => res.json())

            .then((newRegister) => {
                dispatch(receveidNewNeedies(newRegister));
                setId(newRegister.id);
                console.log("newRegisters", newRegister.id);
                setOpen(true);
            });
    };
    const handleSelectItem = (place) => {
        // console.log('### register place', place);
        handleChangeGeo(place);
    };

    // const imageSet = (image) => {
    //     setImg(image);
    // };

    return (
        <>
            <section className="new-needy-container">
                <Typography variant="h5">Register to receive help</Typography>

                <TextField
                    style={{ width: "300px" }}
                    id="adreess-input"
                    label="Name"
                    variant="standard"
                    onChange={(event) => {
                        setPlaceName(event.target.value);
                    }}
                />
                <TextField
                    style={{ width: "300px" }}
                    id="adreess-input"
                    label="How to Help"
                    variant="standard"
                    onChange={(event) => {
                        setNewNeedy(event.target.value);
                    }}
                />
                <TextField
                    style={{ width: "300px" }}
                    id="adreess-input"
                    label="Description"
                    variant="standard"
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                />
                <GeoSearch onItemSelected={handleSelectItem} />

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Category
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={handleChange}
                        >
                            <MenuItem value={"Donation"}>Donation</MenuItem>
                            <MenuItem value={"Volunteer work"}>
                                Volunteer work
                            </MenuItem>
                        </Select>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Box sx={{ ...style, width: 420 }}>
                                <h2 id="parent-modal-title">
                                    Choose a Photo to represent your NGO
                                </h2>
                                <SavePicture
                                    onProfilePictureChange={handleChangeImg}
                                    userId={id}
                                />
                            </Box>
                        </Modal>
                    </FormControl>
                </Box>

                <Button
                    onClick={handleClick}
                    variant="contained"
                    href="#contained-buttons"
                    style={{ margin: "20px 0", background: "#00A3BC"}}
                >
                    Submit
                </Button>
            </section>
        </>
    );
}
