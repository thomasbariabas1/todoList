import React, {Component} from 'react'
import {actions} from '../../redux/reducers/HomeReducer'
import {connect} from "react-redux";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CheckboxList from '../../components/ToDoList'
import Paper from "../../components/Paper";
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography";
import Tooltip from "@material-ui/core/Tooltip";


const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class Home extends Component {

    render() {

        const {addToDo, toDos, deleteToDo, completeToDo, editToDo, searchCriteria, classes} = this.props
        const todosList = [...toDos].filter(item=>(searchCriteria===''?true:item.value.toLowerCase().indexOf(searchCriteria.toLowerCase())>-1))

        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'}}>
                <Paper>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <Typography variant={'h5'} align={'center'}>
                        ToDos
                    </Typography>
                        <Tooltip title="Add New ToDo" aria-label="Add">
                            <Fab size="medium" color="primary" onClick={addToDo} aria-label="Add"
                                 className={classes.margin}>
                                <AddIcon/>
                            </Fab>
                        </Tooltip>
                    </div>
                    <CheckboxList list={todosList} deleteItem={deleteToDo} completeItem={completeToDo} editItem={editToDo}/>


                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.HomeReducer,
        searchCriteria:state.SearchReducer.searchCriteria
    }
}
const mapActionsToProps = {
    ...actions
}
export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Home))