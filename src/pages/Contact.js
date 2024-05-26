import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../sass/pages/contact.scss'
export const Contact = () => {
    const form = useRef()

    const onSubmit = () => {
    alert(
    'Merci pour votre message, il sera traité au plus vite'
    );
};

    const sendEmail = (e) => {
    e.preventDefault()

        emailjs
            .sendForm('service_5f7bi23', 'template_r1x36cj', form.current, {
                publicKey: '9Jfdxvh1RFPR-s1Er',
            })
            .then(
                () => {
                    console.log('SUCCESS!')
                },
                (error) => {
                    console.log('FAILED...', error.text)
                }
            )
    }

    return (
        <section id='contact'>
            <h2>Contact</h2>
            <p>Vous avez un projet ? Discutons-en !</p>
            <form ref={form} onSubmit={onSubmit}>
                <label htmlFor='name'>Nom</label>
                <input type='text' name='user_name' id='name' />
                <label htmlFor='email'>Email</label>
                <input type='email' name='user_email' id='email' />
                <label htmlFor='message'>Message</label>
                <textarea name='message' id='message' cols='30' rows='10' />
                <input
                    className='send-form'
                    onClick={sendEmail}
                    type='submit'
                    value='Send'
                ></input>
            </form>
        </section>
    )
}

