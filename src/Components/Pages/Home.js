import "../../Css/bootstrap.min.css";
import PageMaster from './PageMaster';
import Spinner from '../Reusable/Spinner';
import InputManipulation from "../Reusable/InputManipulation";
import ItemExsists from "../Reusable/ItemExsists";

export default function Home() {
    
  return (
    <PageMaster>
      <div className="col-12 mt-2 row border">
        <div className="col-4 py-2 d-none d-lg-block">
          <img className="rounded-circle col-8" src="https://media-exp1.licdn.com/dms/image/C5603AQFarFYEvl3RNw/profile-displayphoto-shrink_200_200/0/1559159511281?e=1634774400&v=beta&t=j7zZ03s9UiEMjTsTupqdx3a8SgtjPlRYxUGz4VCyDvE" 
          alt="Lucas Bova" />
        </div>
        <div className="col-lg-8 py-2 col-sm-12">
          <h3>Welcome to the portfolio website for Lucas Bova!</h3>
          <h5>A quick introduction to this site</h5>
          <p>This portfolio was designed to showcase the skills and abilities I have gained through years of education and expireience. Skills are demonstrated through practical 
            examples and discussions. Current skills include HTML/CSS, JavaScript/React, and C#/.NET. Please head over to the skills section for more details on each of these technologies. </p>
          <p>Please use the <a href="/contact">"Contact"</a> page to reach out with any questions or requests.</p>
        </div>
      </div>
      <div className="pt-3 row">
        <div className="col-12 text-center pt-5 pb-3">
        <h1>Here are some of the things you will see on this site</h1>
        </div>
        <div className="col-12 text-center pt-5 pb-3">
          <h2>A spinning box</h2>
        </div>
        <div className="col-12">
          <Spinner />
        </div>
        <div className="col-12 text-center pt-5 pb-3">
          <h2>A dive into inputs</h2>
        </div>
        <div className="col-12">
          <InputManipulation />
        </div>
        <div className="col-12 text-center pt-5 pb-3">
          <h2>A look at search algorithms</h2>
        </div>
        <div className="col-12">
          <ItemExsists size="col-12"/>
        </div>
      </div>
    </PageMaster>
  );
}