import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GeoSearch from "../mapBoxGeocode";
// import { receveidNeedies } from "../redux/needies-list/slice";
import useFetchNeedies from "../hooks/useFetchNeedies";

export default function ContentHome() {
    const { handleSelectItem, handleSubmitClick } = useFetchNeedies();

    return (
        <>
            <div className="container-geo">
                <GeoSearch onItemSelected={handleSelectItem} />
                <Button onClick={handleSubmitClick}>Search</Button>
            </div>
            <section className="content-home">
                <Card sx={{ width: 250, height: 370 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://blog.govolunteer.com/wp-content/uploads/2020/01/Copy-of-02_BLOG_Featured-Image-6-1-500x383.jpg"
                        alt="volunteer work"
                    />
                    <Typography gutterBottom variant="h4" component="div">
                        Causes
                    </Typography>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Volunteer Work
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Long story short: endless possibilities! There's no
                            excuse in Berlin for not finding the matching
                            volunteer work for you.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ width: 250, height: 370 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://www.hamburg.com/image/11823838/16x9/990/557/fc2ee6d9dadaacf91ccafca2587404b7/mQ/km1-clothing-donation-centre.jpg
                    "
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Donation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This year, on top of everything else, there’s a
                            pandemic to contend with. Staying home isn’t an
                            option if you don’t have one. .
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ width: 250, height: 370 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://scd.infomigrants.net/media/resize/my_image_big/63a05c8955c1c843762a95120d2f57f2881af868.jpeg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Social Advice
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            There are a number of agencies that provide support
                            and advice to people from other countries
                            (immigrants, migrants, refugees and asylum seekers).
                            .
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </section>
        </>
    );
}
