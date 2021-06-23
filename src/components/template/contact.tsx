import { footer, navigation } from "./global";
import { contactSettings as CS, emailValidate, phoneValidate, recaptcha } from '../../lib/settings';
import { XY, contactForms, contactErr } from '../../lib/types';
import { formatPhoneText } from '../../lib/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";


enum f { name, email, phone, company, message, recaptcha };
type functionForm = (input: contactForms) => void;
type functionErr = (input: contactErr) => void;
type functionRC = (input: boolean) => void;

export default class templateContact {
  scroll: XY;
  forms: contactForms;
  updateForms: functionForm;
  formErr: contactErr;
  updateErr: functionErr;
  sendEmail: () => void;
  sendStat: boolean;
  reset: () => void;
  recaptcha: boolean;
  updateRC: functionRC
  recaptchaRef: React.RefObject<ReCAPTCHA>;
  
  constructor(
    scr: XY, 
    forms: contactForms, 
    dispatch: functionForm, 
    formErr: contactErr, 
    updateErr: functionErr,
    sendEmail: () => void,
    sendStat: boolean,
    reset: () => void,
    rc: boolean,
    updateRC: functionRC
  ) {
    this.scroll = scr;
    this.forms = forms;
    this.updateForms = dispatch;
    this.formErr = formErr;
    this.updateErr = updateErr;
    this.sendEmail = sendEmail;
    this.sendStat = sendStat;
    this.reset = reset;
    this.recaptcha = rc;
    this.updateRC = updateRC;
    this.recaptchaRef = React.createRef();
  }

  validateForm(form?: number): void {
    this.updateForms(this.forms);
    const validateName = () => { this.formErr.name = (this.forms.name) ? 0 : 1; };
    const validateEmail = () => { this.formErr.email = (this.forms.email) ? (this.forms.email.match(emailValidate) ? 0 : 2) : 1; };
    const validatePhone = () => { this.formErr.phone = (this.forms.phone) ? (this.forms.phone.match(phoneValidate) ? 0 : 2) : 1; };
    const validateCompany = () => { this.formErr.company = (this.forms.company) ? 0 : 1; };
    const validateMessage = () => { this.formErr.message = (this.forms.message) ? 0 : 1; };
    const validateRecaptcha = () => { this.formErr.recaptcha = (this.recaptcha) ? 0 : 1; };

    // If nothing is inserted, validate all of them;
    if (typeof form === 'undefined') {
      validateName(); validateEmail(); validatePhone(); validateCompany(); validateMessage(); validateRecaptcha(); return;
    }

    switch (form) {
      case f.name: validateName(); break; // Ensure 'name' is not left blank
      case f.email: validateEmail(); break; // Ensure 'email' is valid and not left blank        
      case f.phone: validatePhone(); break; // Ensure 'phone' is valid and not left blank
      case f.company: validateCompany(); break; // Ensure 'company' is not left blank
      case f.message: validateMessage(); break; // Ensure 'message' is not left blank
      case f.recaptcha: this.formErr.recaptcha = 0; break; // Ensure 'recaptcha' is verified
    }
  }

  updateInputs(input: string, form: number): void {
    switch (form) {
      case f.name:
        this.forms.name = input;
        if (this.formErr.name > 0) { this.validateForm(form); }
        break;
      case f.email: 
        this.forms.email = input; 
        if (this.formErr.email > 0) { this.validateForm(form); }
        break;
      case f.phone: 
        this.forms.phone = formatPhoneText(input); 
        if (this.formErr.phone > 0) { this.validateForm(form); }
        break;
      case f.company: 
        this.forms.company = input; 
        if (this.formErr.company > 0) { this.validateForm(form); }
        break;
      case f.message: 
        this.forms.message = input; 
        if (this.formErr.message > 0) { this.validateForm(form); }
        break;
    }
    this.updateForms(this.forms);
  }

  sendData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this.recaptcha) { this.sendEmail(); }
    if (this.recaptchaRef && this.recaptchaRef.current) {
      this.recaptchaRef.current.reset();
      this.updateRC(false);
    }
  }

  landing(): JSX.Element {
    // Used for parallx background scroll
    const landerBGStyle = {
      backgroundPositionY: `calc(70% + ${Math.round(this.scroll.y / 2)}px)`
    };

    return (
      <header className = 'contact'>
        <div className = 'bg' style = { landerBGStyle }></div> {/* Lander background */}
        <h1>{ CS.title }</h1>
        <p>{ CS.summary }</p>
      </header>
    );
  }

  mainContact(): JSX.Element {
    const infoSVG = (
      <svg width = '160px' height = '160px' viewBox = '0 0 416.979 416.979'>
	      <path d = { CS.infoSVG }/>
      </svg>
    );
    return (
      <section className = 'contact'>
        { this.contactForm() }
        <div className = 'sidebar'>
          <div className = 'svg'>{ infoSVG }</div>
          <div className = 'no-svg'>
            <dd><b>Notice: </b>{ CS.notice }</dd>
            <dd><b>Availability: </b>{ CS.avaiable }</dd>
            <dd>
              <a href = {CS.github} target = '_blank' rel = 'noreferrer' tabIndex = { -1 }>
                <FontAwesomeIcon icon = { faGithub }/>
              </a>
              <a href = {CS.linkedin} target = '_blank' rel = 'noreferrer' tabIndex = { -1 }>
                <FontAwesomeIcon icon = { faLinkedin }/>
              </a>
            </dd>
          </div>
        </div>
      </section>
    )
  }

  contactForm(): JSX.Element {
    const errorCite = (text: string, input: number) => 
      <span className = { `${ (input) ? 'error' : 'ok' }` }>{ text }</span> ;
    const err = this.formErr;

    return (
      <form onSubmit = {(e) => { this.sendData(e) }} noValidate = { true }>
        <div className = { `form-load ${ (this.sendStat) ? 'active' : '' }` }>
          <div className = 'throbber'></div>
        </div>
        <div>
          <label>{ CS.formName.label }</label>
          <input
            type = 'text'
            tabIndex = { 1 }
            required = { true }
            disabled = { this.sendStat }
            value = { this.forms.name }
            className = { (this.formErr.name) ? 'error' : ' ' }
            onChange = { (e) => { this.updateInputs(e.target.value, f.name) } } 
            onBlur = { () => { this.validateForm(f.name) } }
          />
          { errorCite(CS.errNameEmpty, this.formErr.name) }
        </div>
        <div>
          <label>{ CS.formEmail.label }</label>
          <input 
            type = 'email'
            tabIndex = { 2 }
            required = { true }
            disabled = { this.sendStat }
            value = { this.forms.email } 
            className = { (this.formErr.email) ? 'error' : ' ' }
            onChange = { (e) => { this.updateInputs(e.target.value, f.email) } } 
            onBlur = { () => { this.validateForm(f.email) } }
          />
          {
            // Determine the "email" error message based on the error number
            errorCite((err.email === 1) ? CS.errEmailEmpty: CS.errEmailInvalid, this.formErr.email)
          }
        </div>
        <div>
          <label>{ CS.formPhone.label }</label>
          <input 
            type = 'phone'
            tabIndex = { 3 }
            required = { true }
            disabled = { this.sendStat }
            value = { this.forms.phone } 
            className = { (this.formErr.phone) ? 'error' : ' ' }
            onChange = { (e) => { this.updateInputs(e.target.value, f.phone) } } 
            onBlur = { () => { this.validateForm(f.phone) } }
          />
          {
            // Determine the "phone" error message based on the error number
            errorCite((err.phone === 1) ? CS.errPhoneEmpty: CS.errPhoneInvalid, this.formErr.phone)
          }
        </div>
        <div>
          <label>{ CS.formCompany.label }</label>
          <input 
            type = 'text'
            tabIndex = { 4 }
            required = { true }
            disabled = { this.sendStat }
            value = { this.forms.company } 
            className = { (this.formErr.company) ? 'error' : ' ' }
            onChange = { (e) => { this.updateInputs(e.target.value, f.company) } } 
            onBlur = { () => { this.validateForm(f.company) } }
          />
          { errorCite(CS.errCompanyEmpty, this.formErr.company) }
        </div>
        <div>
          <label>{ CS.formMessage.label }</label>
          <textarea 
            rows = { 5 }
            tabIndex = { 5 }
            required = { true }
            disabled = { this.sendStat }
            value = { this.forms.message } 
            className = { (this.formErr.message) ? 'error' : ' ' }
            onChange = { (e) => { this.updateInputs(e.target.value, f.message) } } 
            onBlur = { () => { this.validateForm(f.message) } }
          />
          { errorCite(CS.errMessageEmpty, this.formErr.message) }
        </div>
        <div className = 'recaptcha'>
          <ReCAPTCHA
            sitekey = { recaptcha }
            ref = { this.recaptchaRef }
            onChange = { () => { 
              this.validateForm(f.recaptcha);
              this.updateRC(true); 
            } }
            onExpired = { () => { this.updateRC(false) } }
          />
          { errorCite(CS.errRecaptcha, this.formErr.recaptcha) }
        </div>
        <div>
          <input type = 'submit' disabled = { this.sendStat } required = { true } onClick = { () => { this.validateForm() } }/>
          <input type = 'reset' disabled = { this.sendStat } onClick = { () => { 
            if (window.confirm(CS.resetDialogue)) { 
              if (this.recaptchaRef && this.recaptchaRef.current) {
                this.recaptchaRef.current.reset();
                this.updateRC(false);
              }
              this.reset()
            }
          } }/>
        </div>
      </form>
    )
  }



  // Will be manually called via "Projects" component
  output(): JSX.Element {
    return (<>
      { navigation(this.scroll) }
      { this.landing() }
      { this.mainContact() }
      { footer() }
    </>)
  }
}