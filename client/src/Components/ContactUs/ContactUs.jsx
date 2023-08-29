import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center my-8">Contact Us</h1>
      <ContactCard />
      <div className="mt-12 md:flex justify-between gap-4">
        <ContactForm/>
    
      </div>
    </>
  );
};

export default ContactUs;
