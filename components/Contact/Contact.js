import { Button } from "@mui/material";




function Contact() {
  return (
    <section id="Contact">
      <div className="main-Container">
        <div className="section-Content About-Section">
          <div className="flex-center">
            <h4>Get in Touch</h4>
            <div className="spacer-medium"></div>
            <p>
              my inbox is always open. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </p>
<div className="spacer-large"></div>
            <Button>
                    Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;