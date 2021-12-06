import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { HeroData } from "../data/data";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import Slide from "react-reveal/Slide";

export default function ImgMediaCard() {
  return (
    <div className="flex">
      <Grid container spacing={2}>
        {HeroData?.map((val, key) => (
          <Grid key={key} item lg={3} md={6} sm={12}>
            <Slide bottom>
              {" "}
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={val.Img}
                />
                <CardContent>
                  <div className="flex flex-row">
                    <div className="w-2/4">
                      <Typography className="text-xl font-bold">
                        {val.name}
                      </Typography>
                      <Typography className="text-xl font-bold">
                        Office: {val.office}
                      </Typography>
                    </div>
                    <div className="px-4 w-2/4 flex justify-between items-center">
                      <ImLinkedin className="text-2xl" />
                      <BsGithub className="text-2xl" />
                      <AiFillTwitterCircle className="text-3xl" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Slide>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
