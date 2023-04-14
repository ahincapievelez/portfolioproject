import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createContact } from "../services/contactService"

function Contact() {

  let [alert, setAlert] = useState(false)

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const detailsRef = useRef()
  const navigate = useNavigate()

  async function handleSubmit(evt){
    evt.preventDefault()
    let contact = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        details: detailsRef.current.value
    }
    await createContact(contact)
    setAlert(true)
    firstNameRef.current.value = ''
    lastNameRef.current.value = ''
    emailRef.current.value = ''
    detailsRef.current.value = ''
    navigate('/contact')
}
  
  return (
    <div className="container contact-box">

      <div className="row justify-content-center">
        <div className="col-4">
            {alert && 
                <div class="alert alert-success alert-dismissible" role="alert">
                    <div>Thank you! We will contact you shortly.</div>
                </div>
            }
            <div>
                <h1 className="middle-sect-title">CONTACT ME</h1>
                <form onSubmit={handleSubmit}>
                    <label className="labels form-label" htmlFor="fname">First Name</label>
                    <input className="form-control mb-3" type="text" id="fname" ref={firstNameRef}/>

                    <label className="labels form-label" htmlFor="lname">Last Name</label>
                    <input className="form-control mb-3" type="text" id="lname" ref={lastNameRef}/>

                    <label className="labels form-label" htmlFor="email">Email</label>
                    <input className="form-control mb-3" type="text" id="email"  ref={emailRef}/>

                    <label className="labels form-label" htmlFor="dtails">Details</label>
                    <textarea className="form-control mb-3" rows={4} type="textarea" id="dtails" ref={detailsRef}/>

                    <div className="btn-login">
                        <button className="form-btn btn btn-primary" type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;