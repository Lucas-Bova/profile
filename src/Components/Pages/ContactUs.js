import "../../Css/bootstrap.min.css"
import PageMaster from "./PageMaster";

export default function ContactUs() {
    
  return (
    <PageMaster>
      <h1>Contact</h1>
      <h3>Please reach out with any questions, opportunities, or other inquiries.</h3>
      <ul className="list-group">
        <li className="list-group-item"><h4>Email: </h4> <a href="mailto:lbova.35@gmail.com">lbova.35@gmail.com</a></li>
        <li className="list-group-item"><h4>Linkedin: </h4> <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/lucas-bova">linkedin.com/in/lucas-bova</a></li>
        <li className="list-group-item"><h4>Github: </h4> <a target="_blank" rel="noreferrer" href="https://github.com/Lucas-Bova">github.com/Lucas-Bova</a></li>
      </ul>
      <br />
      <h3 className="pt-2">I look forward to hearing from you!</h3>
    </PageMaster>
  );
}