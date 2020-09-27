import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {deleteTodo} from "../redux/actions";

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop:"40px"
    },
    formControl: {
      margin: "0px",
      textAlign:"left"
    },
    formTextComplete : {
        textDecorationLine:"line-through"
    }
}));


function TodoList(props) {
    const classes = useStyles();
    let dispatch = useDispatch();
    let todos = useSelector(state => state)
   return (
        <div className={classes.root}>
            <Grid container direction="row" justify="space-between" alignItems="flex-start">
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{textAlign:"left"}}>
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" className="formLegend">To-do</FormLabel>
                    {/* To display to-do list if sort applied */}
                        <FormGroup>
                            {todos ? props.sort ? todos.sort((a, b) => a.comment.localeCompare(b.comment)).map(val => {
                                if(!val.completed)
                                return (
                                    <FormControlLabel
                                        key= {val.id}
                                        control={<Checkbox 
                                                    color="primary" 
                                                    checked={val.completed} 
                                                    onChange={() => {dispatch(deleteTodo(val.id))}} 
                                                    name={val.comment} 
                                                />}
                                        label={val.comment}
                                    />
                                )
                                else
                                return null
                            }) : 
                            todos.map(val => {
                                if(!val.completed)
                                return (
                                    <FormControlLabel
                                        key= {val.id}
                                        control={<Checkbox 
                                                    color="primary" 
                                                    checked={val.completed} 
                                                    onChange={() => {dispatch(deleteTodo(val.id))}} 
                                                    name={val.comment} 
                                                />}
                                        label={val.comment}
                                    />
                                )
                                else
                                return null
                            })
                            :null}
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{textAlign:"left"}}>
                <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className="formLegend">Completed</FormLabel>
                {/* To display only completed tasks */}
                    <FormGroup>
                        {todos ? props.sort ? todos.sort((a, b) => a.comment.localeCompare(b.comment)).map(val => {
                                if(val.completed)
                                return (
                                    <FormControlLabel
                                        key= {val.id}
                                        control={<Checkbox 
                                                    color="primary" 
                                                    checked={val.completed} 
                                                    onChange={() => {dispatch(deleteTodo(val.id))}} 
                                                    name={val.comment} 
                                                />}
                                        label={val.comment}
                                    />
                                )
                                else
                                return null
                            }) : 
                            todos.map(val => {
                                if(val.completed)
                                return (
                                    <FormControlLabel
                                        key= {val.id}
                                        control={<Checkbox 
                                                    color="primary" 
                                                    checked={val.completed} 
                                                    onChange={() => {dispatch(deleteTodo(val.id))}} 
                                                    name={val.comment} 
                                                />}
                                        label={val.comment}
                                    />
                                )
                                else
                                return null
                            })
                        :null}
                    </FormGroup>
                </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}

export default TodoList
