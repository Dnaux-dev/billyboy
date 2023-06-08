import React from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';
import Google from '../assets/Social_Iconsgoogle.png'
import Facebook from '../assets/fb_logofacebook.png'

import './signupmodal.css'
import SignInModal from './SignInModal';


const SignUpModal = ({isShow, closeModal, modalTitle}) => {
   const close = () => {
    closeModal()
   }

    return (
      <>
        <Modal
          className='modal'
          show={isShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className='d-flex justify-content-between align-item-center '>
            <Modal.Title id="contained-modal-title-vcenter" className="mx-auto get-started">
              {modalTitle}
            </Modal.Title>
            <i onClick={close} class='bx bx-x'></i>
          </div>
          <Modal.Body className='mx-auto body'>
            <h4>Already have an account?<button className='another' >Login</button></h4>
            <button>
                <a className='targeted' href='#'>Sign up with Google <img src={Google} /></a>
            </button>
            <button className='second_btn'>
                <a className="targeted" href='#'>Sign up with Facebook <img src={Facebook} /></a>
            </button>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='label'>Email address</Form.Label>
                <Form.Control className='control' type="email" placeholder="Enter your email address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='label'>Phone Number</Form.Label>
                <Form.Control className='control' type="number" placeholder="Enter your phone number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='label'>Password</Form.Label>
                <Form.Control className='control' type="password" placeholder="Enter password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='label'> Confirm Password</Form.Label>
                <Form.Control className='control' type="password" placeholder="Enter password" />
              </Form.Group>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                  Save password
                </label>
              </div>
            </Form>
            <button className='sign-up' style={{background:'#BFDC36'}}><a href="#">Sign up</a></button>
          </Modal.Body>
        </Modal>
        
      </>
      );
}

export default SignUpModal