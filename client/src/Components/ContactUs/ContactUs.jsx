import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactUs = () => {
  return (
    <div className="pt-20 text-swift pb-20">
      <h1 className="text-4xl font-bold text-center my-8">Contact Us</h1>
      <ContactCard />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 justify-between gap-4">
        <ContactMap />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
