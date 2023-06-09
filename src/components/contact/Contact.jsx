import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();
    const result = emailjs.sendForm('service_jllifzo', 'template_83k5ljk', form.current, 'Sw7WezvPAHodK_LY5');
    e.target.reset();
    result.then((data) => {
    console.log(data.text);
    }, (error) => {
    console.log(error.text);
    });
    };
return (
<section id="contact">
<h5>GET IN TOUCH WITH ME!!</h5>
<h2>CONTACT ME</h2>
<div className="container contact__container">
<div className="contact__options">
<article className='contact__option'>
<MdOutlineEmail className='contact__option__icon'/>
<h4>Email</h4>
<h5>myEmail@gmail.com</h5>
<a href='mailto:borisdinnyuy@gmail.com' target='_blank'>send a
message</a>
</article>
<article className='contact__option'>
<AiOutlineLinkedin className='contact__option__icon'/>
<h4>LinkedIn</h4>
<h5>Profile</h5>
<a href='https://www.linkedin.com/in/boris-dinnyuy-844b96164/'
target='_blank'>Tape me on LinkedIn</a>
</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option__icon'/>
<h4>Whatsapp</h4>
<h5>Direct message</h5>
<a href='https://web.whatsapp.com/send?phone=+237654176909'
target='_blank'>Whatsapp me</a>
</article>
</div>
<form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder='full name' required/>
<input type="email" name='email' placeholder='your email' required/>
<input type="text" placeholder='Subject' name='subject' required />
<textarea name="message" id="message" cols="30" rows="10"
placeholder='your message' required></textarea>
<button type="submit" className='btn btn-primary'>send message</button>
</form>
</div>
</section>
)
}
export default Contact