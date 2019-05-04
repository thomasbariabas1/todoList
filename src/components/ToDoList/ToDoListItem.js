import React, {useState} from 'react'
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from "@material-ui/core/ListItem";
import {TextField} from "@material-ui/core";


const ToDoListItem = ({id, value, handleToggle, checked, completeItem, deleteItem, editItem}) => {
    const [isEditing, setEditing] = useState(false)
    const [newValue, setValue] = useState(value)


    const onClickEditButton = () => {
        if (isEditing) {
            editItem(id, newValue)
            setEditing(false)
        } else {
            setEditing(true)

        }
    };
    const onClickDeleteDiscardButton = () => {
        if(isEditing) {
            setValue(value)
            setEditing(false)
        } else
            deleteItem(id)
    };
    return <ListItem key={id} role={undefined} dense button onClick={() => !isEditing&&completeItem(id)}>
        <Checkbox
            checked={checked}
            tabIndex={-1}
            disableRipple
            disabled={isEditing}
        />
        {isEditing ?
            <TextField onClick={(e) => e.stopPropagation()}
                       defaultValue={newValue}
                       onBlur={({target: {value}}) => setValue(value)}/> :
            <ListItemText primary={value}
                          style={{textDecoration: checked ? 'line-through' : 'none'}}/>
        }
        <ListItemSecondaryAction>
            <IconButton onClick={onClickEditButton}
                        aria-label="Comments"
                        disabled={checked}>
                {isEditing ? <SaveIcon/> : <EditIcon/>}
            </IconButton>
            <IconButton onClick={onClickDeleteDiscardButton} aria-label="Comments">
                {isEditing ? <ClearIcon/> : <DeleteIcon/>}
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}

export default ToDoListItem