import "./Certificates.css";



import webCert from "../assets/web-development-certificate.pdf";
import msmeCert from "../assets/MSME.pdf";
import fullstackCert from "../assets/ACP-certificate.pdf";
import internshipCert from "../assets/internship.pdf";
import personalityCert from "../assets/personality-development-certificate.pdf";
import advanceCert from "../assets/ADCA.pdf";
import HarvardCert from "../assets/Harvard-certificate.pdf";


// CERTIFICATES ARRAY
const certificates = [
  {
    title: "Java Full Stack Web Development",
    issuer: "Apple Tree Infotech",
    file: webCert,
  },
  {
    title: "Full Stack Development",
    issuer: "Chandigarh University",
    file: fullstackCert,
  },
  {
    title: "Web Designing",
    issuer: "MSME & Apple Tree Infotech",
   file: msmeCert, 
  },
  {
    title: "Industral Traning Certificate",
    issuer: "Apple Tree Infotech",
   file: internshipCert,
  },
  {
    title: "Business Plan Development Certificate",
    issuer: "Harvard Business Impact (via Chandigarh University)",
   file: HarvardCert,
  },
  
  {
    title: "Advance Diploma in Computer Application",
    issuer: "Institute of Computer Studies",
   file: advanceCert,
  },
  {
    title: "Personalty Development",
    issuer: "Institute of Computer Studies",
    file: personalityCert,
  },
];


const Certificates = () => {
  return (
    <section className="certificates-section" id="certificate">
      <div className="certificates-header">
        <h2>Certificates</h2>
        <p>My professional certifications</p>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>

            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
