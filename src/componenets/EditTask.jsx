import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/action';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


  Modal.setAppElement('#root');


const EditTask = ({task}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch()

  function openModal() {
    setIsOpen(true);
  }

 

  function closeModal() {
    setIsOpen(false);
  }


  const [editing, setEditing] = useState(task.action)

  const handleSubmit = (e)=> {

        e.preventDefault()

        const newEdit = {

            id:task.id,
            action:editing,
            isDone:task.isDone
        }

        dispatch(editTask(newEdit))
        closeModal()
  }

    return (
        <div>
            <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form onSubmit={handleSubmit}>
              <input type="text" value={editing} onChange={(e)=>setEditing(e.target.value)}/>
              <button>confirm</button>
              <button onclick={()=>closeModal()}>cancel</button>
          </form>
      </Modal>
        </div>
    )
}

export default EditTask
