// import ReactShare from "react-share-simplified";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
} from "react-share";
import kllLogo from "./kll_logo.png";
import "./App.css";

function App() {
  const shareUrl =
    "https://ee.humanitarianresponse.info/single/soEOHSVf?returnUrl=https://c2m2-asia.github.io/share-survey-businesses/";
  const title = "Survey of Industry's Preparedness for Tourism Recovery";

  return (
    <div className="App">
      <a href="http://www.kathmandulivinglabs.org/">
        <img src={kllLogo} width="120" height="120" />
      </a>
      <h1 className="thank-you">सर्वेक्षणमा भाग लिनुभएकोमा धन्यबाद !</h1>
      <h3 style={{ marginLeft: "10vw", marginRight: "10vw" }}>
        तपाईँको यस सहयोगले नेपाली पर्यटन क्षेत्रको पुन:उत्थानलाई टेवा
        पुर्याउनेछ। यो सर्वेक्षण पर्यटन क्षेत्रमा कार्यरत अरूलाई पनि भर्न
        लगाउनुहोस्।
      </h3>
      <p className="share-this" style={{ marginLeft: "10vw", marginRight: "10vw" }}>
        यो फारम फेसबुक, भाइबर, व्हाट्स एप जस्ता सामाजिक संजालमा शेर (share) गर्न
        उपयुक्त चिन्हमा क्लिक (click) गर्नुहोस्।
      </p>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          marginLeft: '10vw',
          marginRight: '10vw',
        }}
      >
        <div className="share-title">
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://ee.humanitarianresponse.info/single/soEOHSVf?returnUrl=https://c2m2-asia.github.io/share-survey-businesses/">
            <FacebookIcon size={50} round={true} />
          </a>
          <p>Facebook</p>
        </div>
        <div className="share-title">
          <a href="fb-messenger://share?link=https%3A%2F%2Fee.humanitarianresponse.info%2Fsingle%2FsoEOHSVf%3FreturnUrl%3Dhttps%3A%2F%2Fc2m2-asia.github.io%2Fshare-survey-businesses%2F&app_id=123123123">
            <FacebookMessengerIcon size={50} round={true} />
          </a>
          <p>Messenger</p>
        </div>
        <div className="share-title">
          <TwitterShareButton
            url={shareUrl}
            quote={title}
            className="emailShareClassname"
          >
            <TwitterIcon size={50} round={true} />
          </TwitterShareButton>
          <p>Twitter</p>
        </div>
        <div className="share-title">
          <ViberShareButton
            url={shareUrl}
            quote={title}
            className="emailShareClassname"
          >
            <ViberIcon size={50} round={true} />
          </ViberShareButton>
          <p>Viber</p>
        </div>
        <div className="share-title">
          <WhatsappShareButton
            url={shareUrl}
            quote={title}
            className="emailShareClassname"
          >
            <WhatsappIcon size={50} round={true} />
          </WhatsappShareButton>
          <p>WhatsApp</p>
        </div>
        <div className="share-title">
          <EmailShareButton
            url={shareUrl}
            quote={title}
            className="emailShareClassname"
          >
            <EmailIcon size={50} round={true} />
          </EmailShareButton>
          <p>Email</p>
        </div>
      </div>
    </div>
  );
}

export default App;
