import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../fireConfig';


firebase.initializeApp(firebaseConfig)

const Form = () => {

  const [store, setStore] = useState(true)
  const [dbcollection , setDbcollection] = useState('none')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    collegeName: '',
    receiveEmails: false,
    isPaid: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    
    try {
      console.log("dbcollection is " ,dbcollection)

      if (!formData.firstName) {
        console.log("df failed ")
        let inp = document.getElementById("firstName")
        inp.style.border = "2px solid red";
        setTimeout(() => {
          inp.style.border = "2px solid black";
        }, 3000);
        setStore(false)
      }

      if (!formData.lastName) {
        console.log("da failed ")
        let inp = document.getElementById("lastName")
        inp.style.border = "2px solid red";
        setTimeout(() => {
          inp.style.border = "2px solid black";
        }, 3000);
        setStore(false)
      }

      // Validate email
      if (!isValidEmail(formData.email)) {
        console.log("email failed ")
        let inp = document.getElementById("email")
        inp.style.border = "2px solid red";
        setTimeout(() => {
          inp.style.border = "2px solid black";
        }, 3000);
        setStore(false)
      }

      if (dbcollection=='none') {
        console.log("select event name ")
        let inp = document.getElementById("eventName")
        inp.style.border = "2px solid red";
        setTimeout(() => {
          inp.style.border = "2px solid black";
        }, 3000);
        setStore(false)
      }

      if (!formData.collegeName) {
        console.log("college failed ")
        let inp = document.getElementById("collegeName")
        inp.style.border = "2px solid red";
        setTimeout(() => {
          inp.style.border = "2px solid black";
        }, 3000);
        setStore(false)
      }

      if (!formData.phone) {
        let inp = document.getElementById("phone")
        inp.style.border = "2px solid red";
        setTimeout(() => {
          inp.style.border = "2px solid black";
        }, 3000);
        console.log("phone failed")
        setStore(false)
      }

      console.log("store : " , store)
      if (store && dbcollection!='none') {
        const db = firebase.firestore();

        await db.collection(dbcollection).add(formData);

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          collegeName: '',
          receiveEmails: false,
          isPaid: false
        });

        console.log('Data successfully saved to Firestore!');
      }
      else{
        console.log("unexpected")
      }

      console.log('kya pata')

    } catch (error) {
      console.error('Error saving data to Firestore:', error);
    }
  };


  return (
    <div id="eventMain" className="flex">
      <div className="event">
        <div className="container">
          <p className="event-date">JAN 20, 2024</p>
          <h1 className="event-title">TALENZZIAA 16</h1>
          <p className="event-info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aliquam esse iure aperiam, hic deserunt.
            <br />
          </p>

          <form action="" className="reg-form" onSubmit={handleSubmit}>
            <h2 className="form-heading">Join the event</h2>
            <div className="row">
              <div className="col">
                <label htmlFor="firstName">First name</label>
                <input
                required
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="col">
                <label htmlFor="lastName">Last name</label>
                <input
                required
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="email">Email</label>
                <input
                required
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

<div className="col">
  <label htmlFor="eventName">Event</label>
  <select name="eventName" id="eventName" value={formData.eventName} onChange={(e)=>{setDbcollection(e.target.value)}}>
    <option  value="SELECT_EVENT">SELECT EVENT</option>
    <option value="FAST_TYPING">Fast Typing</option>
    <option value="CODE_DEBUG">Code Debug</option>
  </select>
</div>


            </div>

            <div className="row">
              <div className="col">
                <label htmlFor="phone">Phone No. </label>
                <input
                required
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 phone number"
                  maxLength="10"
                />
              </div>

              <div className="col">
                <label htmlFor="collegeName">College Name</label>
                <input
                required
                  type="collegeName"
                  name="collegeName"
                  id="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  placeholder="College name"
                />
              </div>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="receiveEmails"
                id="receiveEmails"
                checked={formData.receiveEmails}
                onChange={handleChange}
              />
              <label htmlFor="receiveEmails">I would like to receive emails about Event updates</label>
            </div>

            <input
              className="p-4 border mt-5 rounded-md bg-[#3a57fb] w-fit text-white shadow-2xl hover:scale-105"
              type="submit"
            />
          </form>
        </div>
      </div>

      <div className="sidebar ">
        <div className="share">
          <h4 className="heading">SHARE</h4>
          <div className="social">
            <a href="#">

            </a>
            <a href="#">

            </a>
            <a href="#">

            </a>
          </div>
        </div>

        <div className="guests">
          <h4 className="heading">GUESTS</h4>
          <div className="people">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="" className="people-image" />
            <div className="people-info">
              <h5 className="people-name">SOHAIL BHAI</h5>
              <p className="designation">Lorem, ipsum.</p>
            </div>
          </div>

          <div className="people">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="" className="guest-image" />
            <div className="people-info">
              <h5 className="people-name">SOHAIL BHAI</h5>
              <p className="designation">Lorem, ipsum.</p>
            </div>
          </div>

          <div className="people">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="" className="people-image" />
            <div className="people-info">
              <h5 className="people-name">SOHAIL BHAI</h5>
              <p className="designation">Lorem, ipsum.</p>
            </div>
          </div>
        </div>

        <div className="host">
          <h4 className="heading">HOSTED BY</h4>

          <div className="people">
            <p>TOLANI COLLEGE</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Form;




