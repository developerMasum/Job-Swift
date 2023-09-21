import React, { useState } from "react";
import pdfjs from "pdfjs-dist";

const YourForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    summary: "",
  });

  const [resumeText, setResumeText] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (e) => {
        const data = e.target.result;
        const loadingTask = pdfjs.getDocument({ data });

        loadingTask.promise
          .then((pdf) => {
            let text = "";

            const numPages = pdf.numPages;
            for (let i = 1; i <= numPages; i++) {
              pdf.getPage(i).then((page) => {
                page.getTextContent().then((textContent) => {
                  const pageText = textContent.items
                    .map((item) => item.str)
                    .join(" ");
                  text += pageText + " ";
                });
              });
            }

            setResumeText(text);
          })
          .catch((error) => {
            console.error("Error parsing PDF:", error);
          });
      };

      reader.readAsArrayBuffer(file);
      setResumeFile(file);
    }
  };

  const handleResumeParse = () => {
    const nameRegex = /([A-Z][a-z]+ [A-Z][a-z]+)/g;
    const names = resumeText.match(nameRegex);

    if (names) {
      const [firstName, lastName] = names[0].split(" ");
      setFormData({
        ...formData,
        firstName,
        lastName,
      });
    }

    // Extract Emails
    const emailRegex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/g;
    const emails = resumeText.match(emailRegex);

    if (emails) {
      setFormData({
        ...formData,
        email: emails[0],
      });
    }

    // Extract Summary (Assuming it's after a "Summary:" keyword)
    const summaryKeyword = "Summary:";
    const summaryIndex = resumeText.indexOf(summaryKeyword);

    if (summaryIndex !== -1) {
      const summary = resumeText
        .substring(summaryIndex + summaryKeyword.length)
        .trim();
      setFormData({
        ...formData,
        summary,
      });
    }

    // You can add more parsing logic for phone numbers, addresses, etc. here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with the updated formData
    // (e.g., send it to the server)
    console.log("Form data:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <div>
          <input type="file" accept=".pdf" onChange={handleFileChange} />
        </div>
        <textarea
          placeholder="Summary"
          value={formData.summary}
          onChange={(e) =>
            setFormData({ ...formData, summary: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <button onClick={handleResumeParse}>Parse Resume</button>
      </div>

      {resumeFile && (
        <div>
          <h3>Uploaded Resume:</h3>
          <p>{resumeFile.name}</p>
        </div>
      )}

      <div>
        <h3>Resume Text:</h3>
        <pre>{resumeText}</pre>
      </div>
    </div>
  );
};

export default YourForm;
