import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

import styles from "./Contact.module.css";
function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section id="Contact" className="border-bottom">
      <div className="main-Container">
        <div className="section-Content About-Section">
          <div className="flex-center">
            <h4>Get in Touch</h4>
            <div className="spacer-small"></div>
            <span className="design-heading"></span>
            <div className="spacer-medium"></div>
            <p>
              my inbox is always open. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </p>
            <div className="spacer-large"></div>
            <Button onClick={onOpen}>Contact</Button>

            <Drawer onClose={onClose} isOpen={isOpen} size="xs">
              <DrawerOverlay />
              <DrawerContent className={styles.drawerContent}>
                <DrawerCloseButton
                  backgroundColor="initial"
                  color="#ccc"
                  zIndex={2}
                />
                <DrawerHeader className="flex-center">
                  <h1>Contact Form</h1>
                </DrawerHeader>
                <DrawerBody className={styles.drawerBody}>
                  <div className="flex-center">
                    <div className="flex-row">
                      <form onSubmit={handleSubmit(onSubmit)} id='contact-form'
                      >
                        <TextField
                          label="Name"
                          name="name"
                          margin="normal"
                          fullWidth
                        />
                        <TextField
                          label="Email"
                          name="email"
                          margin="normal"
                          fullWidth
                        />
                      </form>
                    </div>
                    <div className="spacer-small"></div>
                    <form onSubmit={handleSubmit(onSubmit)} id='contact-form'>
                      <TextField
                        label="Message"
                        name="message"
                        margin="normal"
                        fullWidth
                        multiline
                        rows={4}
                      />
                    </form>
                  </div>
                </DrawerBody>
                <DrawerFooter className={styles.drawerFooter}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    form='contact-form'
                    // endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
