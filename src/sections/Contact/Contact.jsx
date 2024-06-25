import styles from './ContactStyles.module.css';
function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Reach out!</h1>
        <form action="https://formspree.io/f/xwpeeakn" method="post">
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder="Name" required/>
            </div>

            <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="text" name="email" id="email" placeholder="Email" required/>
            </div>

            <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea type="text" name="message" id="message" placeholder="Write your message here..." required>
                </textarea>
            </div>
            <input className="hover btn" type="submit" value="Submit" />
        </form>
    </section>
  )
}

export default Contact;