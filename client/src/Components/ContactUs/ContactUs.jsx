import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactUs = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center my-8">Contact Us</h1>
      <ContactCard />
      <div className="mt-12 grid md:grid-cols-2 justify-between gap-4">
        <ContactMap />
        <ContactForm />
      </div>
    </>
  );
};

export default ContactUs;
