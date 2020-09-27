import React, { useState}  from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";
import { addTodo } from "../redux/actions";
import { useDispatch } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import SortIcon from '@material-ui/icons/Sort';

const MAX_VALUE = 50; //For random id
const MAX_CHAR_VALUE = 20; // To check character length

const useStyles = makeStyles((theme) => ({
    inputContainer : {
        textAlign:"left",
        display:"flex"
    },
    inputField : {
        width:"60%",
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'gray',
            },
          },
    },
    addButton : {
        marginLeft:"20px",
        background: "#0082D4",
        textTransform:"initial",
        maxHeight:"55px",
        color:"#FFF",
        '&:hover': {
            backgroundColor: '#0082D4',
            borderColor: '#0062cc',
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0082D4',
          },
          '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
          },
    },
    sortButton : {
        marginLeft:"20px",
        textTransform:"initial",
        maxHeight:"33px",
        color: "gray"
    }
}))

function TodoInput(props) {
    const classes = useStyles();
    let [task, setTask] = useState("");
    let [checkErrMax, setCheckErrMax] = useState(false);
    let [checkErrMin, setCheckErrMin] = useState(false);
    let dispatch = useDispatch();
    return (
        <div className={classes.inputContainer}>
            <TextField
             error = {checkErrMax || checkErrMin}
             helperText={checkErrMax ? "Must be 20 characters or less." : checkErrMin ? "Please provide valid Task." : ""}
             className={classes.inputField}
             value = {task}
             onChange = {(e) => {
                setCheckErrMax(false)
                setCheckErrMin(false)
                setTask(e.target.value)
             }}
             variant="outlined"
             placeholder ="Add a task"
             InputProps={{
                startAdornment:
                 <InputAdornment position="start" id="addIcon">
                    {task.length > 0 ? <AddIcon style={{color:"#8B9DA7"}}/> : <AddIcon style={{color:"#0082D4"}}/>}
                </InputAdornment>,
            }}
            />
            <Button
             className={classes.addButton}
             onClick={() => {
                if(task.length > MAX_CHAR_VALUE && task.length > 0) {
                    setCheckErrMax(true)
                }
                else if(task.length === 0) {
                    setCheckErrMin(true)
                }
                else {
                    dispatch(addTodo(
                        {
                            id: Math.random() * Math.floor(MAX_VALUE),
                            comment : task,
                            completed : false
                        }
                    ));
                    setCheckErrMax(false)
                    setCheckErrMin(false)
                    setTask("");
                }
             }}
            >
            Add
            </Button>
            <IconButton 
                component="span"
                className={classes.sortButton} 
                onClick = {() => props.setSort()}
                >
                <SortIcon />
            </IconButton>
             
        </div>
    )
}

export default TodoInput;
