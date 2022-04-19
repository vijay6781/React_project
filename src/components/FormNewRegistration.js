import React, { useState } from "react";
import "./FormNewRegistration.css";
import IconEdit from "../icons/Edit.svg";
import IconMyProfile from "../icons/My Profile.svg";
import OrgCategoryHeader from "./OrgCategoryHeader";

const FormNewRegistration = () => {
  const [orgName, setOrgName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPhoneNumber, setAdminPhoneNumber] = useState("");

  const [adminAsPrimary, setAdminAsPrimary] = useState(false);

  const [billingName, setBillingName] = useState("");
  const [billingEmail, setBillingEmail] = useState("");
  const [billingPhoneNumber, setBillingPhoneNumber] = useState("");

  const [contactAddress, setContactAddress] = useState("");
  const [contactCity, setContactCity] = useState("");
  const [contactState, setContactState] = useState("");
  const [contactCountry, setContactCountry] = useState("");
  const [contactZip, setContactZip] = useState("");

  const orgNameChangeHandler = (event) => {
    setOrgName(event.target.value);
  };

  const websiteUrlChangeHandler = (event) => {
    setWebsiteUrl(event.target.value);
  };

  const adminNameChangeHandler = (event) => {
    setAdminName(event.target.value);
  };

  const adminEmailChangeHandler = (event) => {
    setAdminEmail(event.target.value);
  };

  const adminPhoneNumberChangeHandler = (event) => {
    setAdminPhoneNumber(event.target.value);
  };

  const adminAsPrimaryChangeHandler = () => {
    setAdminAsPrimary(!adminAsPrimary);
  };
  const billingNameChangeHandler = (event) => {
    setBillingName(event.target.value);
  };

  const billingEmailChangeHandler = (event) => {
    setBillingEmail(event.target.value);
  };

  const billingPhoneNumberChangeHandler = (event) => {
    setBillingPhoneNumber(event.target.value);
  };

  const contactAddressChangeHandler = (event) => {
    setContactAddress(event.target.value);
  };

  const contactCityChangeHandler = (event) => {
    setContactCity(event.target.value);
  };

  const contactStateChangeHandler = (event) => {
    setContactState(event.target.value);
  };

  const contactCountryChangeHandler = (event) => {
    setContactCountry(event.target.value);
  };

  const contactZipChangeHandler = (event) => {
    setContactZip(event.target.value);
  };

  const handleFormSubmit = (event) => {
    let message = `New Organisation Added Successfully! \n\n`;
    message += `Organisation Name: ${orgName}\n`;
    message += `Website URL: ${websiteUrl}\n`;
    message += `Admin Name: ${adminName}\n`;
    message += `Admin Email ID: ${adminEmail}\n`;
    message += `Admin Phone Number: ${adminPhoneNumber}\n`;
    message += `Admin as Primary Contact: ${adminAsPrimary}\n`;
    message += `Billing Name: ${billingName}\n`;
    message += `Billing Email ID: ${billingEmail}\n`;
    message += `Billing Phone Number: ${billingPhoneNumber}\n`;
    message += `Contact Address: ${contactAddress}\n`;
    message += `Contact City: ${contactCity}\n`;
    message += `Contact State: ${contactState}\n`;
    message += `Contact Country: ${contactCountry}\n`;
    message += `Contact Zip Code: ${contactZip}\n`;

    alert(message);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="organization-container">
        <div className="upload-photo-box">
          <div className="image-upload">
            <label htmlFor="file-input">
              <img src={IconMyProfile} className="profile-image" alt="" />
            </label>

            <input id="file-input" type="file" />
          </div>
          <img src={IconEdit} className="btn-edit" alt="Profile edit btn" />
        </div>

        <div className="input-box-container">
          <label>Organisation Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={orgNameChangeHandler}
            value={orgName}
          />
        </div>

        <div className="input-box-container">
          <label>Website</label>
          <input
            type="text"
            placeholder="Enter URL"
            onChange={websiteUrlChangeHandler}
            value={websiteUrl}
          />
        </div>

        <OrgCategoryHeader title="Admin&nbsp;Details" />

        <div className="input-box-container">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={adminNameChangeHandler}
            value={adminName}
          />
        </div>

        <div className="input-box-container">
          <label>Email ID</label>
          <input
            type="email"
            placeholder="Enter Mail ID"
            onChange={adminEmailChangeHandler}
            value={adminEmail}
          />
        </div>

        <div className="input-box-container">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            onChange={adminPhoneNumberChangeHandler}
            value={adminPhoneNumber}
          />
        </div>

        <div className="check-set-admin">
          <label htmlFor="setAdminAsPrimary" className="checkbox">
            <input
              type="checkbox"
              id="setAdminAsPrimary"
              className="checkbox__input"
              onChange={adminAsPrimaryChangeHandler}
              checked={adminAsPrimary}
            />
            <div className="checkbox__box"></div>
            Set Admin as a primary contact
          </label>
        </div>

        <OrgCategoryHeader title="Billing&nbsp;Details" />

        <div className="input-box-container">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={billingNameChangeHandler}
            value={billingName}
          />
        </div>

        <div className="input-box-container">
          <label>Email ID</label>
          <input
            type="email"
            placeholder="Enter Mail ID"
            onChange={billingEmailChangeHandler}
            value={billingEmail}
          />
        </div>

        <div className="input-box-container">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            onChange={billingPhoneNumberChangeHandler}
            value={billingPhoneNumber}
          />
        </div>

        <OrgCategoryHeader title="Contact&nbsp;Details" />

        <div className="input-box-container">
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            onChange={contactAddressChangeHandler}
            value={contactAddress}
          />
        </div>

        <div className="input-box-container">
          <label>City</label>
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={contactCityChangeHandler}
            value={contactCity}
          />
        </div>

        <div className="input-box-container">
          <label>State</label>
          <input
            type="text"
            placeholder="Enter State Name"
            onChange={contactStateChangeHandler}
            value={contactState}
          />
        </div>

        <div className="input-box-container">
          <label>Country</label>
          <input
            type="text"
            placeholder="Enter Country Name"
            onChange={contactCountryChangeHandler}
            value={contactCountry}
          />
        </div>

        <div className="input-box-container">
          <label>Zip</label>
          <input
            type="text"
            placeholder="Enter Zip Code"
            onChange={contactZipChangeHandler}
            value={contactZip}
          />
        </div>

        <div className="btn-group">
          <button className="btn btn-cancel">Cancel</button>
          <button type="submit" className="btn btn-submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormNewRegistration;
