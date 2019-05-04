import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ToDoListItem from './ToDoListItem';


const styles = theme => ({
    root: {
        width: '100%',
        overflowY:'auto',
        minWidth:'400px',
        maxHeight:'500px',
        backgroundColor: theme.palette.background.paper,
    },
});

class CheckboxList extends React.Component {



    render() {
        const { list, deleteItem, completeItem, editItem,  classes } = this.props;
        return (
            <List className={classes.root}>
                {list.map(item => (
                    <ToDoListItem key={item.id} id={item.id} value={item.value} checked={item.checked} completeItem={completeItem} deleteItem={deleteItem} editItem={editItem}/>
                ))}
            </List>
        );
    }
}

CheckboxList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);