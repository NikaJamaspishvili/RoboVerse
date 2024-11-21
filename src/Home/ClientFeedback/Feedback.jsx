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
    return <div className="clientFeedbackWrapper">
       <h1>What our clients say</h1>
       <p>See what our customer say about us. It really matter for us. How good or bad
       we will make ir for evaluation to make EhyalLive better.</p>
<section className="feedbackCards">
       <div className="firstFeedbackCard">
        <h3><span>starstar</span>star</h3>
        <p>“These robots are a game-changer. Superior quality, flawless performance, and the price is shockingly affordable. Worth every penny!”</p>
        <div>
          <img src="/images/firstgirl.jpg"/>
          <section>
            <h1>Denny Hilguston</h1>
            <p>@denny.hill</p>
          </section>
        </div>
       </div>

       <div className="secondFeedbackCard">
        <h3><span>starstar</span>star</h3>
        <p>“The robots are top-notch. They offer amazing performance, are incredibly precise, and yet cost much less than expected. A great deal!”</p>
        <div>
          <img src="/images/secondgirl.jpg" />
          <section>
            <h1>Vani Pandey</h1>
            <p>@vani.pandey</p>
          </section>
        </div>
       </div>

       <div className="thirdFeedbackCard">
        <h3><span>starstar</span>star</h3>
        <p>“Impressed by these robots! The quality is unbeatable, and they work flawlessly. The price is incredibly low for such advanced technology.”</p>
        <div>
          <img src="/images/thirdgirl.jpg" />
          <section>
            <h1>milly Singh</h1>
            <p>@milly.singh</p>
          </section>
        </div>
       </div>
</section>
    </div>
}

const CompanyOverview = () =>{
    return <div className="companyOverviewWrapper">
        <section className="leftSection">
          <h1>Our company values culture 💕</h1>
           <p>We specialize in creating best robots on the market for the cheapest prizes.</p>
        </section>

        <section className="rightSection">
          <div>
          <img src="/images/hand.png" alt="fingers icon" /> 
          <p>Be Sincere</p>
          </div>

          <div>
          <img src="/images/handshake.svg" alt="handshake icon" /> 
          <p>Stronger together</p>
          </div>

          <div>
          <img src="/images/checkmark.svg" alt="checkmark icon" /> 
          <p>Keep it simple</p>
          </div>

          <div>
          <img src="/images/bulb.svg" alt="bulb icon" /> 
          <p>Take intelligent risks</p>
          </div>

        </section>
    </div>
}

export {FeedBack};