import React from "react";



const AddTask = (props) => {

// * My state to add, delete, and set reminder 

const [text, setText] = React.useState('')
const [day, setDay] = React.useState('')
const [reminder, setReminder] = React.useState(false)

// * destructuring my props into variables

const {onAdd} = props;


// * onSubmit function 

const onSubmit = (e) => {
e.preventDefault();


    if (!text) {
        alert('please add a task')
        return
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
}

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}


export default AddTask;