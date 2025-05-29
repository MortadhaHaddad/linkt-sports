import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App8.css';
import planImage from './assets/images/plan100.png';

export default function App8() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_li1j8yj',
      'template_7y5agzf',
      form.current,
      'RNzbLTCqzzqa7u70a'
    ).then(
      (result) => {
        toast.success("Message envoyé avec succès !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(result.text);
      },
      (error) => {
        toast.error("Erreur lors de l'envoi du message.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.error(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <div>
      <ToastContainer /> {/* Ajoutez ce composant une seule fois dans votre application */}
      
      <div className="navbar" style={{ backgroundColor: "rgba(223, 22, 65, 0.9)" }}></div>

      <div
        className="contact-form-container"
        style={{ backgroundImage: `url(${planImage})` }}
      >
        <form ref={form} onSubmit={sendEmail} className="form-content">
          <div className="input-row">
            <input type="text" name="name" placeholder="Name" required />
            <input type="text" name="phone" placeholder="Phone Number" />
          </div>
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Your Request Here" />
          <textarea name="message" placeholder="Your Message Here" rows="6" required></textarea>
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
}