import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div style={Styles.bodyStyle}>
        <div style={Styles.componentStyle}>
          <span style={Styles.spanText}>1. Your Name</span>
          <div style={Styles.inputDiv}>
            <input
              style={Styles.inputText}
              type="text"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div style={Styles.componentStyle}>
          <span style={Styles.spanText}>2. Name of Organisation</span>
          <div style={Styles.inputDiv}>
            <input
              style={Styles.inputText}
              type="text"
              placeholder="Enter Your answer"
            />
          </div>
        </div>
        <div style={Styles.componentStyle}>
          <span style={Styles.spanText}>3. Your role in the organisation</span>
          <div style={Styles.inputDiv}>
            <input
              style={Styles.inputText}
              type="text"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div style={Styles.componentStyle}>
          <span style={Styles.spanText}>4. Email address</span>
          <div style={Styles.inputDiv}>
            <input
              style={Styles.inputText}
              type="text"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div style={Styles.componentStyle}>
          <span style={Styles.spanText}>5. Contact Number</span>
          <div style={Styles.inputDiv}>
            <input
              style={Styles.inputText}
              type="text"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div style={Styles.componentStyle}>
          <span style={Styles.spanText}>
            6. Which of the following best defines your organisation
          </span>
          <div style={Styles.radioStyle}>
            <input
              aria-checked="false"
              type="checkbox"
              value="Digital Marketing Agency"
            />
            Digital Marketing Agency
          </div>
          <div style={Styles.radioStyle}>
            <input
              aria-checked="false"
              type="checkbox"
              value="Creative Agency"
            />
            Creative Agency
          </div>
          <div style={Styles.radioStyle}>
            <input
              aria-checked="false"
              type="checkbox"
              value="Media Buying Agency"
            />
            Media Buying Agency
          </div>
          <div style={Styles.radioStyle}>
            <input
              aria-checked="false"
              type="checkbox"
              value="Print Media Agency"
            />
            Print Media Agency
          </div>
          <div style={Styles.radioStyle}>
            <input aria-checked="false" type="checkbox" value="PR Agency" />
            PR Agency
          </div>
          <div style={Styles.radioStyle}>
            <input
              aria-checked="false"
              type="checkbox"
              value="HR consultants"
            />
            HR consultants
          </div>
          <div style={Styles.radioStyle}>
            <input
              aria-checked="false"
              type="checkbox"
              value="Other Services like CA, Management, Law, Manpower, etc"
            />
            Other Services like CA, Management, Law, Manpower, etc
          </div>
        </div>
        <div style={Styles.componentStyle}>
          <span style={Styles.spanText}>
            7. Your Address (you may also share the link to business listing)
          </span>
          <div style={Styles.inputDiv}>
            <input
              style={Styles.inputText}
              type="text"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div style={Styles.componentStyle}>
          <span style={Styles.spanText}>8. GST Number</span>
          <div style={Styles.inputDiv}>
            <input
              style={Styles.inputText}
              type="text"
              placeholder="Enter your answer"
            />
          </div>
        </div>
        <div style={Styles.componentStyle}>
          <span style={Styles.spanText}>
            9. Bank Details (Only share your current account details)
          </span>
          <div style={Styles.inputDiv}>
            <textarea
              style={Styles.textAreaStyle}
              placeholder="Enter your answer"
              spellcheck="true"
              maxlength="4000"
              aria-label="Multi Line Text"
            ></textarea>
          </div>
        </div>
        <div>
          <button style={Styles.buttonStyle}>Submit</button>
        </div>
        <p>
          Never give your password.{" "}
          <a style={Styles.paraStyle} href="#">
            Report abuse
          </a>
        </p>
        <div style={Styles.footerStyle}>
          <p>
            This content is created by the owner of the form. The data you
            submit will be sent to the form owner. Microsoft is not responsible
            for the privacy or security practices of its customers, including
            those of this form owner. Never give out your password.
          </p>
          <div>
            <p>
              Powered by Microsoft Forms |{" "}
              <a
                style={Styles.paraStyle}
                href="https://privacy.microsoft.com/en-us/privacystatement"
              >
                Privacy and cookies
              </a>{" "}
              |{" "}
              <a
                style={Styles.paraStyle}
                href="https://www.microsoft.com/en-us/servicesagreement/default.aspx"
              >
                Terms of use
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const Styles = {
  bodyStyle: {
    fontSize: "16px",
    marginTop: "100px",
    background: "rgb(0,0,0,0.05)",
    padding: "50px 30px"
  },
  inputText: {
    fontFamily: "Segoe UI,Segoe WP,Tahoma,Arial,sans-serif",
    borderRadius: "0",
    display: "block",
    width: "95%",
    height: "40px",
    padding: "6px 12px",
    fontSize: "14px",
    lineHeight: "1.42857143",
    color: "#333",
    backgroundColor: "#fff",
    backgroundImage: "none",
    border: "1px solid #a6a6a6",
    boxShadow: "none",
    transition: "border-color .15s ease-in-out"
  },
  paraStyle: {
    textDecoration: "none"
  },
  textAreaStyle: {
    height: "80px",
    minHeight: "80px",
    color: "#FFF",
    backgroundColor: "#fff",
    backgroundImage: "none",
    border: "1px solid #a6a6a6",
    boxShadow: "none",
    transition: "border-color .15s ease-in-out",
    padding: "6px 12px",
    fontSize: "14px",
    lineHeight: "1.42857143",
    fontFamily: "Segoe UI,Segoe WP,Tahoma,Arial,sans-serif",
    borderRadius: "0",
    display: "block",
    width: "100%"
  },
  buttonStyle: {
    background: "#3b6075",
    color: "#FFFFFF",
    border: "1px solid transparent",
    outline: "1px solid transparent",
    width: "180px",
    height: "40px",
    textAlign: "center",
    fontSize: "15px",
    margin: "0 45% 0 45%"
  },
  spanText: {
    fontFamily: "Segoe UI,Segoe WP,Tahoma,Arial,sans-serif",
    fontSize: "17px",
    display: "inline-block",
    position: "relative",
    lineHeight: "1.3",
    color: "#333",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    marginLeft: "0px",
    maxWidth: "100%"
  },
  inputDiv: {
    margin: "18px 0 0"
  },
  radioStyle: {
    backgroundColor: "rgb(163, 214, 227,0.2)",
    margin: "8px 0 0"
  },
  componentStyle: {
    paddingLeft: "15px",
    paddingRight: "15px",
    marginBottom: "40px"
  },
  footerStyle: {
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "15px",
    paddingRight: "15px",
    marginBottom: "10px",
    overflow: "hidden",
    margin: "15px auto",
    lineHeight: "1.3",
    fontSize: "14px",
    color: "#333",
    backgroundColor: "rgb(163, 214, 227,0.3)"
  }
};

export default App;
