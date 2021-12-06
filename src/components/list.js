import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { HeroData } from "../data/data";
import Slide from "react-reveal/Slide";

export default function FolderList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {HeroData?.map((val, key) => (
        <Slide bottom>
          <ListItem key={key}>
            <ListItemAvatar>
              <Avatar>{val.Img}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={val.name} secondary={val.office} />
          </ListItem>
        </Slide>
      ))}
    </List>
  );
}
