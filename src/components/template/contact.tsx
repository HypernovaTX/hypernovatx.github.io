import { footer, navigation } from "./global";
import { contactSettings as CS, emailValidate, phoneValidate } from '../../lib/settings';
import { XY, contactForms, contactErr } from '../../lib/types';

enum f { name, email, phone, company, message };
type functionForm = (input: contactForms) => void;
type functionErr = (input: contactErr) => void;

export default class templateContact {
  scroll: XY;
  forms: contactForms;
  updateForms: functionForm;
  formErr: contactErr;
  updateErr: functionErr;
  
  constructor(
    scr: XY, 
    forms: contactForms, 
    dispatch: functionForm, 
    formErr: contactErr, 
    updateErr: functionErr
  ) {
    this.scroll = scr;
    this.forms = forms;
    this.updateForms = dispatch;
    this.formErr = formErr;
    this.updateErr = updateErr;
  }

  validateForm(form: number): void {
    this.updateForms(this.forms);
    switch (form) {
      case f.name: // Ensure 'name' is not left blank
        this.formErr.name = (this.forms.name) ? 0 : 1;
        break;
      case f.email: // Ensure 'email' is valid and not left blank
        this.formErr.email = (this.forms.email) ? (this.forms.email.match(emailValidate) ? 0 : 2) : 1;
        break;
      case f.phone: // Ensure 'phone' is valid and not left blank
        this.formErr.phone = (this.forms.phone) ? (this.forms.phone.match(phoneValidate) ? 0 : 2) : 1;
        break;
      case f.company: // Ensure 'company' is not left blank
        this.formErr.company = (this.forms.company) ? 0 : 1;
        break;
      case f.message: // Ensure 'message' is not left blank
        this.formErr.message = (this.forms.message) ? 0 : 1;
        break;
    }
  }

  updateInputs(input: string, form: number): void {
    switch (form) {
      case f.name:
        this.forms.name = input;
        if (this.formErr.name) { this.validateForm(form); }
        break;
      case f.email: 
        this.forms.email = input; 
        if (this.formErr.email) { this.validateForm(form); }
        break;
      case f.phone: 
        this.forms.phone = input; 
        if (this.formErr.phone) { this.validateForm(form); }
        break;
      case f.company: 
        this.forms.company = input; 
        if (this.formErr.company) { this.validateForm(form); }
        break;
      case f.message: 
        this.forms.message = input; 
        if (this.formErr.message) { this.validateForm(form); }
        break;
    }
    this.updateForms(this.forms);
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
    return (
      <section className = 'contact'>
        { this.contactForm() }
        <div className = 'sidebar'>
          <dd><b>Notice: </b>{ CS.notice }</dd>
          <dd><b>Availability: </b>{ CS.avaiable }</dd>
          <dd><a href = {CS.github} target = '_blank' rel = 'noreferrer' tabIndex = { -1 }>GitHub</a></dd>
          <dd><a href = {CS.linkedin} target = '_blank' rel = 'noreferrer' tabIndex = { -1 }>LinkedIn</a></dd>
        </div>
      </section>
    )
  }

  contactForm(): JSX.Element {
    const errorCite = (text: string, input: number) => 
      <span className = { `${ (input) ? 'error' : 'ok' }` }>{ text }</span> ;
    const err = this.formErr;

    return (
      <form>
        <div>
          <label>{ CS.formName.label }</label>
          <input
            type = 'text'
            tabIndex = { 1 }
            required = { true }
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
            required = { true }
            tabIndex = { 5 }
            value = { this.forms.message } 
            className = { (this.formErr.message) ? 'error' : ' ' }
            onChange = { (e) => { this.updateInputs(e.target.value, f.message) } } 
            onBlur = { () => { this.validateForm(f.message) } }
          />
          { errorCite(CS.errMessageEmpty, this.formErr.message) }
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

/**
 * FOOTNOTES
 * 
 * (1) - 
 * 
 * 
 * 
 */