import React, {useState} from 'react'
import firebase from 'firebase/app'
import 'firebase/firebase-database'

const ContactScreen = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        sentOn: '',
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
        // Send data via redux function here

        // Current Date for form submission
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
        "Saturday"];
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDay()
        var time = date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});

        let dateString = `${time}, ${dayNames[day]}, ${monthNames[month]} ${day}, ${year}`

        // Save message
        saveMessage({...formData, sentOn: dateString})
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
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 m-auto py-5 text-center">
                                <h1 className="h2-title text-center">Let Us Show You How Good Your Place Can Look!</h1>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
            {/* CONTACT SECTION */}
            <section className="py-3">
                <div className="container">
                    <div className="row p-text">
                        <div className="col-md-4">
                            <div className="card p-4">
                                <div className="card-body">
                                    <h4>Get In Touch</h4>
                                    <p>If you require additional information please contact us and our staff of qualified professionals will be happy to assist you. If using the form to reach us, please expect a response within 24 hours. Thank you.</p>
                                    <h4>Address</h4>
                                    <p>67 Hospital Ave, Ste B St, Danbury CT, 06810</p>
                                    <h4>Email</h4>
                                    <a className="contact-link" href="mailto:connecticutcleaningservices@gmail.com">connecticutcleaningservices@gmail.com</a>
                                    <h4>Phone</h4>
                                    <a className="contact-link" href="tel:475-439-6043">(475) 439 6043</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card p-4">
                                <div className="card-body">
                                    <h3 className="text-center">Please fill out this form to contact us</h3>
                                    {showAlert ? 
                                    <div className="alert bg-success text-white text-center d-block">Your message has been sent!</div>
                                    :
                                    <div className="alert bg-success text-white text-center d-none">Your message has been sent!</div>
                                    }
                                    <div className="alert text-center text-white bg-primary d-none">Your message has been sent!</div>
                                    <hr />
                                    <form className="form" onSubmit={(e) => onSubmit(e)}>
                                        <div className="row">
                                            <div className="col-md-6 p-2">
                                                <div className="form-group">
                                                    <input type="text" name="firstName" className="form-control" placeholder="First Name" value={firstName} onChange={(e) => onChange(e)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 p-2">
                                                <div className="form-group">
                                                    <input type="text" name="lastName" className="form-control" placeholder="Last Name" value={lastName} onChange={(e) => onChange(e)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 p-2">
                                                <div className="form-group">
                                                    <input type="text" name="email" className="form-control" placeholder="Email" value={email} onChange={(e) => onChange(e)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 p-2">
                                                <div className="form-group">
                                                    <input type="text" name="phone" className="form-control" placeholder="Phone Number" value={phone} onChange={(e) => onChange(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 p-2">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message"  placeholder="Message / Service Needed" value={message} onChange={(e) => onChange(e)}/>
                                                </div>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <input className="btn btn-blue" type="submit"/>
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
