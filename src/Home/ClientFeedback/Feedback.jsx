//css imports
import "./feedback.css";
import "./companyOverview.css";
import "./ClientFeedBack.css";

const FeedBack = () => {
  return <div className="feedbackWrapper">
    <ClientFeedBack />
    <CompanyOverview />
  </div>
}

const ClientFeedBack = () =>{
    return <div>
        <h1>client feedback</h1>
    </div>
}

const CompanyOverview = () =>{
    return <div>
        <h1>company overview</h1>
    </div>
}

export {FeedBack};