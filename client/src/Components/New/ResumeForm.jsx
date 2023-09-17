// // import React, { useState } from 'react';
// // import { Document, Page, pdfjs } from 'react-pdf';
// // import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// // function ResumeForm() {
// //   const [pdfText, setPdfText] = useState('');
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [skills, setSkills] = useState('');

// //   const handleFileChange = async (e) => {
// //     const file = e.target.files[0];

// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = async (e) => {
// //         const pdfData = new Uint8Array(e.target.result);
// //         const pdfText = await extractPdfText(pdfData);
// //         setPdfText(pdfText);
// //         parsePdfText(pdfText);
// //       };
// //       reader.readAsArrayBuffer(file);
// //     }
// //   };

// //   const extractPdfText = async (pdfData) => {
// //     const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
// //     let text = '';
// //     for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
// //       const page = await pdf.getPage(pageNum);
// //       const pageText = await page.getTextContent();
// //       text += pageText.items.map(item => item.str).join(' ');
// //     }
// //     return text;
// //   };

// //   const parsePdfText = (text) => {
// //     const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
// //     const phoneRegex = /(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
// //     const addressRegex = /Address:([\s\S]*?)(?=Skills:|$)/g;
// //     const skillsRegex = /Skills:([\s\S]*?)(?=Projects:|$)/g;
  
// //     const extractedEmails = text.match(emailRegex);
// //     const extractedPhones = text.match(phoneRegex);
// //     const extractedAddresses = text.match(addressRegex);
// //     const extractedSkills = text.match(skillsRegex);
  
// //     const parsedEmail = extractedEmails ? extractedEmails[0] : '';
// //     const parsedPhone = extractedPhones ? extractedPhones[0] : '';
// //     const parsedAddress = extractedAddresses
// //       ? extractedAddresses[0].replace('Address:', '').trim()
// //       : '';
// //     const parsedSkills = extractedSkills
// //       ? extractedSkills[0].replace('Skills:', '').trim()
// //       : '';
  
// //     setEmail(parsedEmail);
// //     setPhone(parsedPhone);
// //     setAddress(parsedAddress);
// //     setSkills(parsedSkills);
// //   };
  

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Perform form submission logic here
// //   };

// //   return (
// //     <div className="resume-form-container">
// //       <h2>Upload Your Resume</h2>
// //       <input type="file" accept=".pdf" onChange={handleFileChange} />
// //       <Document file={pdfText}>
// //         <Page pageNumber={1} />
// //       </Document>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <input
// //           type="tel"
// //           placeholder="Phone"
// //           value={phone}
// //           onChange={(e) => setPhone(e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Address"
// //           value={address}
// //           onChange={(e) => setAddress(e.target.value)}
// //         />
// //         <textarea
// //           placeholder="Skills"
// //           value={skills}
// //           onChange={(e) => setSkills(e.target.value)}
// //         />
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default ResumeForm;

// // import React, { useState } from 'react';
// // import { useForm } from 'react-hook-form';
// // import { Document, Page, pdfjs } from 'react-pdf';
// // import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// // function ResumeForm() {
// //   const { register, handleSubmit, setValue, formState: { errors } } = useForm();
// //   const [pdfText, setPdfText] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [parsed, setParsed] = useState(false);
  
// //   const handleFileChange = async (e) => {
// //     const file = e.target.files[0];

// //     if (file) {
// //       setLoading(true);
// //       const reader = new FileReader();
// //       reader.onload = async (e) => {
// //         const pdfData = new Uint8Array(e.target.result);
// //         const pdfText = await extractPdfText(pdfData);
// //         setPdfText(pdfText);
// //         parsePdfText(pdfText);
// //         setLoading(false);
// //         setParsed(true);
// //       };
// //       reader.readAsArrayBuffer(file);
// //     }
// //   };

// //   const extractPdfText = async (pdfData) => {
// //     const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
// //     let text = '';
// //     for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
// //       const page = await pdf.getPage(pageNum);
// //       const pageText = await page.getTextContent();
// //       text += pageText.items.map(item => item.str).join(' ');
// //     }
// //     return text;
// //   };

// //   const parsePdfText = (text) => {
// //     const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
// //     const phoneRegex = /(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;

// //     const extractedEmails = text.match(emailRegex);
// //     const extractedPhones = text.match(phoneRegex);

// //     const parsedEmail = extractedEmails ? extractedEmails[0] : '';
// //     const parsedPhone = extractedPhones ? extractedPhones[0] : '';

// //     setValue('email', parsedEmail);
// //     setValue('phone', parsedPhone);
// //   };

// //   const nameRegex = /^[A-Za-z\s]+$/;
// //   const coverLetterRegex = /^.{50,1000}$/;

// //   const onSubmit = (data) => {
// //     // Perform form submission logic here
// //     console.log(data);
// //   };

// //   return (
// //     <div className="resume-form-container">
// //       <h2>Upload Your Resume</h2>
// //       <input type="file" accept=".pdf" onChange={handleFileChange} />
// //       {loading && <p>Loading PDF...</p>}
// //       {parsed && (
// //         <Document file={{ data: pdfText }}>
// //           <Page pageNumber={1} />
// //         </Document>
// //       )}
// //       <form onSubmit={handleSubmit(onSubmit)}>
// //         <input
// //           type="text"
// //           placeholder="Name"
// //           {...register('name', { required: 'Name is required', pattern: nameRegex })}
// //         />
// //         {errors.name && <p className="error">{errors.name.message}</p>}
        
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           {...register('email', { pattern: /^\S+@\S+$/i })}
// //         />
// //         {errors.email && <p className="error">Invalid email format</p>}
        
// //         <input
// //           type="tel"
// //           placeholder="Phone"
// //           {...register('phone', { pattern: /^[\d\s\(\)+-]+$/ })}
// //         />
// //         {errors.phone && <p className="error">Invalid phone format</p>}
        
// //         <input
// //           type="text"
// //           placeholder="Address"
// //           {...register('address')}
// //         />
        
// //         <textarea
// //           placeholder="Skills"
// //           {...register('skills')}
// //         />
        
// //         <textarea
// //           placeholder="Cover Letter (50-1000 characters)"
// //           {...register('coverLetter', { pattern: coverLetterRegex })}
// //         />
// //         {errors.coverLetter && <p className="error">Cover letter must be 50-1000 characters</p>}
        
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default ResumeForm;

// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// function ResumeForm() {
//   const [pdfText, setPdfText] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [skills, setSkills] = useState('');

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = async (e) => {
//         const pdfData = new Uint8Array(e.target.result);
//         const pdfText = await extractPdfText(pdfData);
//         setPdfText(pdfText);
//         parsePdfText(pdfText);
//       };
//       reader.readAsArrayBuffer(file);
//     }
//   };

//   const extractPdfText = async (pdfData) => {
//     const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
//     let text = '';
//     for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
//       const page = await pdf.getPage(pageNum);
//       const pageText = await page.getTextContent();
//       text += pageText.items.map(item => item.str).join(' ');
//     }
//     return text;
//   };

//   const parsePdfText = (text) => {
//     const nameRegex = /Name:(.*?)\s*(Email|Phone|Address|Skills|$)/gs;
//     const extractedName = nameRegex.exec(text);
//     const parsedName = extractedName ? extractedName[1].trim() : '';
  
//     setName(parsedName);
  
//     const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
//     const phoneRegex = /(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
//     const addressRegex = /Address:([\s\S]*?)(?=Skills:|$)/g;
//     const skillsRegex = /Skills:([\s\S]*?)(?=Projects:|$)/g;
  
//     const extractedEmails = text.match(emailRegex);
//     const extractedPhones = text.match(phoneRegex);
//     const extractedAddresses = text.match(addressRegex);
//     const extractedSkills = text.match(skillsRegex);
  
//     const parsedEmail = extractedEmails ? extractedEmails[0] : '';
//     const parsedPhone = extractedPhones ? extractedPhones[0] : '';
//     const parsedAddress = extractedAddresses
//       ? extractedAddresses[0].replace('Address:', '').trim()
//       : '';
//     const parsedSkills = extractedSkills
//       ? extractedSkills[0].replace('Skills:', '').trim()
//       : '';
  
//     setEmail(parsedEmail);
//     setPhone(parsedPhone);
//     setAddress(parsedAddress);
//     setSkills(parsedSkills);
//   };
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//   };

//   return (
//     <div className="resume-form-container">
//       <h2>Upload Your Resume</h2>
//       <input type="file" accept=".pdf" onChange={handleFileChange} />
//       <Document file={pdfText}>
//         <Page pageNumber={1} />
//       </Document>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)} // Ensure setName is used correctly
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="tel"
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//         <textarea
//           placeholder="Skills"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ResumeForm;



// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// function ResumeForm() {
//   const [pdfText, setPdfText] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [skills, setSkills] = useState('');

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = async (e) => {
//         const pdfData = new Uint8Array(e.target.result);
//         const pdfText = await extractPdfText(pdfData);
//         setPdfText(pdfText);
//       };
//       reader.readAsArrayBuffer(file);
//     }
//   };

//   const extractPdfText = async (pdfData) => {
//     const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
//     let text = '';
//     for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
//       const page = await pdf.getPage(pageNum);
//       const pageText = await page.getTextContent();
//       text += pageText.items.map(item => item.str).join(' ');
//     }
//     return text;
//   };

//   const parsePdfText = () => {
//     // Define regular expressions for extracting information
//     const nameRegex = /Name:(.*?)\s*(Email|Phone|Address|Skills|$)/gs;
//     const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
//     const phoneRegex = /(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
//     const addressRegex = /Address:([\s\S]*?)(?=Skills:|$)/g;
//     const skillsRegex = /Skills:([\s\S]*?)(?=Projects:|$)/g;
  
//     // Extract name
//     const extractedName = nameRegex.exec(pdfText);
//     const parsedName = extractedName ? extractedName[1].trim() : '';
  
//     // Extract email
//     const extractedEmails = pdfText.match(emailRegex);
//     const parsedEmail = extractedEmails ? extractedEmails[0] : '';
  
//     // Extract phone
//     const extractedPhones = pdfText.match(phoneRegex);
//     const parsedPhone = extractedPhones ? extractedPhones[0] : '';
  
//     // Extract address
//     const extractedAddresses = addressRegex.exec(pdfText);
//     const parsedAddress = extractedAddresses
//       ? extractedAddresses[1].replace('Address:', '').trim()
//       : '';
  
//     // Extract skills
//     const extractedSkills = skillsRegex.exec(pdfText);
//     const parsedSkills = extractedSkills
//       ? extractedSkills[1].replace('Skills:', '').trim()
//       : '';
  
//     // Set the state for each field
//     setName(parsedName);
//     setEmail(parsedEmail);
//     setPhone(parsedPhone);
//     setAddress(parsedAddress);
//     setSkills(parsedSkills);
//   };
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//   };

//   return (
//     <div className="resume-form-container">
//       <h2>Upload Your Resume</h2>
//       <input type="file" accept=".pdf" onChange={handleFileChange} />
//       <Document file={pdfText}>
//         <Page pageNumber={1} />
//       </Document>
//       <button onClick={parsePdfText}>Parse Resume</button>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="tel"
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//         <textarea
//           placeholder="Skills"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ResumeForm;





import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeForm() {
  const [pdfText, setPdfText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [skills, setSkills] = useState('');
  const [parsing, setParsing] = useState(false); // To track parsing state

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const pdfData = new Uint8Array(e.target.result);
        const pdfText = await extractPdfText(pdfData);
        setPdfText(pdfText);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const extractPdfText = async (pdfData) => {
    const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
    let text = '';
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const pageText = await page.getTextContent();
      text += pageText.items.map(item => item.str).join(' ');
    }
    return text;
  };

  const parsePdfText = () => {
    // Define regular expressions for extracting information
    const nameRegex = /Name:(.*?)\s*(Email|Phone|Address|Skills|$)/gs;
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
    const phoneRegex = /(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
    const addressRegex = /Address:([\s\S]*?)(?=Skills:|$)/g;
    const skillsRegex = /Skills:([\s\S]*?)(?=Projects:|$)/g;
  
    // Extract name
    const extractedName = nameRegex.exec(pdfText);
    const parsedName = extractedName ? extractedName[1].trim() : '';
  
    // Extract email
    const extractedEmails = pdfText.match(emailRegex);
    const parsedEmail = extractedEmails ? extractedEmails[0] : '';
  
    // Extract phone
    const extractedPhones = pdfText.match(phoneRegex);
    const parsedPhone = extractedPhones ? extractedPhones[0] : '';
  
    // Extract address
    const extractedAddresses = addressRegex.exec(pdfText);
    const parsedAddress = extractedAddresses
      ? extractedAddresses[1].replace('Address:', '').trim()
      : '';
  
    // Extract skills
    const extractedSkills = skillsRegex.exec(pdfText);
    const parsedSkills = extractedSkills
      ? extractedSkills[1].replace('Skills:', '').trim()
      : '';
  
    // Set the state for each field
    setName(parsedName);
    setEmail(parsedEmail);
    setPhone(parsedPhone);
    setAddress(parsedAddress);
    setSkills(parsedSkills);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here

    console.log(phone);
  };

  return (
    <div className="resume-form-container">
      <h2>Upload Your Resume</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <Document file={pdfText}>
        <Page pageNumber={1} />
      </Document>
      <button
        onClick={parsePdfText}
        disabled={parsing} // Disable the button while parsing
      >
        {parsing ? 'Parsing...' : 'Parse Resume'}
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <textarea
          placeholder="Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ResumeForm;




 