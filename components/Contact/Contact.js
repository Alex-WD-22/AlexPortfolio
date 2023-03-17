import {
  Button,
  useDisclosure,
  FormControl,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer, Box } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input, FormLabel, Textarea, CSSReset, Stack } from "@chakra-ui/react";

function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data, e) => {
    e.preventDefault();
    sendEmail(data);
  };

  const notify = () => {
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const sendEmail = (formData) => {
    toast
      .promise(
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formData,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ),
        {
          pending: "Sending...",
          success: "Message sent successfully!",
          error: "Something went wrong. Please try again later",
        }
      )
      .then((result) => {
        setName("");
        setEmail("");
        setMessage("");
        onClose();
      });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="Contact" className="Contact-bg">
      <ToastContainer position="top-center" />

      <div className="main-Container">
        <div className="section-Content About-Section">
          <div className="flex-center">
            <h4>Get in Touch</h4>
            <div className="spacer-small"></div>
            <span className="design-heading"></span>
            <div className="spacer-medium"></div>
            <p>
              My inbox is always open. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </p>
            <div className="spacer-large"></div>
            <Button
              size="md"
              height="62px"
              width="290px"
              border="2px"
              fontSize="20px"
              borderColor="rgba(31, 31, 206, 0.836)"
              onClick={onOpen}
            >
              Contact
            </Button>
            <Drawer onClose={onClose} isOpen={isOpen} size="xs" color="black">
              <DrawerOverlay />
              <DrawerContent className={styles.drawerContent}>
                <DrawerCloseButton
                  className={styles.CloseButton}
                  backgroundColor="initial"
                  color="#ccc"
                  zIndex={2}
                />
                <DrawerHeader className="flex-center">
                  <h4>Say Hello!</h4>
                  <div className="spacer-small"></div>
                </DrawerHeader>
                <DrawerBody className={styles.drawerBody}>
                  {isOpen && (
                    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex-contact">
                        <div>
                          <Stack direction="row" spacing={15}>
                            <FormControl isRequired>
                              <FormLabel>Name</FormLabel>
                              <Input
                                placeholder="Name"
                                size="lg"
                                label="Name"
                                required
                                name="name"
                                type="text"
                                fontSize="19px"
                                onChange={(e) => setName(e.target.value)}
                                {...register("name")}
                                defaultValue={name}
                              />
                            </FormControl>
                            <FormControl isRequired>
                              <FormLabel>E-Mail</FormLabel>
                              <Input
                                fontSize="19px"
                                size="lg"
                                variant="outline"
                                placeholder="Email"
                                label="Email"
                                required
                                name="email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                {...register("email")}
                                defaultValue={email}
                              />
                            </FormControl>
                          </Stack>
                          <div className="spacer-small"></div>
                          <div className="flex-center ">
                            <FormControl isRequired>
                              <FormLabel>Message</FormLabel>
                              <Textarea
                                fontSize="19px"
                                size="xs"
                                variant="outline"
                                placeholder="Message"
                                label="Message"
                                type="text"
                                name="message"
                                required
                                maxLength="325"
                                rows={6}
                                resize="none"
                                onChange={(e) => setMessage(e.target.value)}
                                {...register("message")}
                                defaultValue={message}
                              />
                            </FormControl>
                          </div>
                          <div className="spacer-small"></div>
                          <div className="flex-center">
                            <Button
                              type="submit"
                              variant="contained"
                              color="primary"
                              form="contact-form"
                              size="md"
                              height="62px"
                              width="290px"
                              border="2px"
                              fontSize="20px"
                              borderColor="rgba(31, 31, 206, 0.836)"
                            >
                              Send
                            </Button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </DrawerBody>
                <DrawerFooter className={styles.drawerFooter}></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
