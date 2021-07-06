import React from "react";
import { IconButton } from "@material-ui/core";
import LabelIcon from '@material-ui/icons/Label';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
export default function TimestampList(props) {
    return (
        <React.Fragment>
        <List>
            {props.note_ids.map((note_id, list_id)=> (
            <ListItem>
                <ListItemIcon>
                    <LabelIcon />
                </ListItemIcon>
                
                <ListItemText
                    primary={props.timestampNotes[note_id].text}
                    secondary={new Date(1000*props.timestampNotes[note_id].time).toISOString().substr(14,7)}
                />
                <InputBase
                    inputProps={{ 'aria-label': 'naked' }}
                />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="seek">
                        <LocationSearchingIcon />
                    </IconButton>
                    <IconButton 
                        edge="end" 
                        aria-label="edit"
                        onClick={(e)=>props.openEditDialog(props.video_id, note_id)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete"
                        onClick={(e)=>props.deleteNote(props.video_id, note_id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            ))}
        </List>
        </React.Fragment>
    );

}
