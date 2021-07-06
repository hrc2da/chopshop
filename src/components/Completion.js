import Modal from "@material-ui/core/Modal";
import React from "react";
import Paper from "@material-ui/core/Paper";

const Completion = (props)=>{
    return <Modal
    open={props.display}
    onClose={props.handleClose}>
        <Paper
        style={{position: "fixed",
        left: "50%",
        top: "50%",
        width: "60%",
        padding: "30px",
        transform: "translate(-50%, -50%)",}}>
        Thanks for submitting your design! Please go to <a href={props.url}>{props.url}</a> to complete the debrief survey and receive your completion code.
        </Paper>
    
</Modal>
}
 
export default Completion;