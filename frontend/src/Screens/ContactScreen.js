import React, {useState} from 'react'
import firebase from 'firebase/app'
import 'firebase/firebase-database'

const ContactScreen = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    const [showAlert, setShowAlert] = useState(false)

    const {firstName, lastName, email, phone, message} = formData

        // Reference for messages table
        let messagesRef = firebase.database().ref('messages')

        // Save message to firebase
        let saveMessage = (formData) => {
            let newMessageRef = messagesRef.push();
            newMessageRef.set(formData)
        }

    // OnChange
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    // onSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("name", formData)
        // Send data via redux function here

        // Save message
        saveMessage(formData)
        setShowAlert(true)
    }

    setTimeout(() => {
        if(setShowAlert) {
            setShowAlert(false)
        }
    }, 5000)








    return (
        <div id="section-contact">
            {/* PAGE HEADER */}
            <section id="contact">
                <header id="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 m-auto py-5 text-center">
                                <h1 class="h2-title text-center">Let Us Show You How Good Your Place Can Look!</h1>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
            {/* CONTACT SECTION */}
            <section class="py-3">
                <div class="container">
                    <div class="row p-text">
                        <div class="col-md-4">
                            <div class="card p-4">
                                <div class="card-body">
                                    <h4>Get In Touch</h4>
                                    <p>If you require additional information please contact us and our staff of qualified professionals will be happy to assist you. If using the form to reach us, please expect a response within 24 hours. Thank you.</p>
                                    <h4>Address</h4>
                                    <p>67 Hospital Ave, Ste B St, Danbury CT, 06810</p>
                                    <h4>Email</h4>
                                    <a class="contact-link" href="mailto:connecticutcleaningservices@gmail.com">connecticutcleaningservices@gmail.com</a>
                                    <h4>Phone</h4>
                                    <a class="contact-link" href="tel:475-439-6043">(475) 439 6043</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card p-4">
                                <div class="card-body">
                                    <h3 class="text-center">Please fill out this form to contact us</h3>
                                    {showAlert ? 
                                    <div class="alert bg-success text-white text-center d-block">Your message has been sent!</div>
                                    :
                                    <div class="alert bg-success text-white text-center d-none">Your message has been sent!</div>
                                    }
                                    <div class="alert text-center text-white bg-primary d-none">Your message has been sent!</div>
                                    <hr />
                                    <form className="form" onSubmit={(e) => onSubmit(e)}>
                                        <div class="row">
                                            <div class="col-md-6 p-2">
                                                <div class="form-group">
                                                    <input type="text" name="firstName" class="form-control" placeholder="First Name" value={firstName} onChange={(e) => onChange(e)}/>
                                                </div>
                                            </div>
                                            <div class="col-md-6 p-2">
                                                <div class="form-group">
                                                    <input type="text" name="lastName" class="form-control" placeholder="Last Name" value={lastName} onChange={(e) => onChange(e)}/>
                                                </div>
                                            </div>
                                            <div class="col-md-6 p-2">
                                                <div class="form-group">
                                                    <input type="text" name="email" class="form-control" placeholder="Email" value={email} onChange={(e) => onChange(e)}/>
                                                </div>
                                            </div>
                                            <div class="col-md-6 p-2">
                                                <div class="form-group">
                                                    <input type="text" name="phone" class="form-control" placeholder="Phone Number" value={phone} onChange={(e) => onChange(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 p-2">
                                                <div class="form-group">
                                                    <textarea class="form-control" name="message"  placeholder="Message / Service Needed" value={message} onChange={(e) => onChange(e)}/>
                                                </div>
                                            </div>
                                            <div class="d-grid gap-2">
                                                <input class="btn btn-blue" type="submit"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </div>
    )
}

export default ContactScreen
