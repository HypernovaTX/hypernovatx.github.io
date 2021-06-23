import { footer, navigation } from "./global";
import { contactSettings, emailValidate, phoneValidate } from '../../lib/settings';
import { XY, contactForms, contactErr } from '../../lib/types';

type dispatchForm = React.Dispatch<any>;
type inputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
enum f { name, email, phone, company, message };

export default class templateContact {
  scroll: XY;
  forms: contactForms;
  updateForms: dispatchForm;
  formErr: contactErr;
  updateErr: dispatchForm;
  
  constructor(scr: XY, forms: contactForms, dispatch: dispatchForm, formErr: contactErr, updateErr: dispatchForm) {
    this.scroll = scr;
    this.forms = forms;
    this.updateForms = dispatch;
    this.formErr = formErr;
    this.updateErr = updateErr;
  }

  logics = {
    validateForm: (form: number) => {
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

    },
    updateForm: (e: inputEvent, form: number) => {
      switch (form) {
        case f.name: this.forms.name = e.target.value; break;
        case f.email: this.forms.email = e.target.value; break;
        case f.phone: this.forms.phone = e.target.value; break;
        case f.company: this.forms.company = e.target.value; break;
        case f.message: this.forms.message = e.target.value; break;
      }
      this.updateForms(this.forms);
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
        <h1>{ contactSettings.title }</h1>
        <p>{ contactSettings.summary }</p>
      </header>
    );
  }

  mainContact(): JSX.Element {
    return (
      <section className = 'contact'>
        { this.contactForm() }
        <div className = 'sidebar'>
          <dd><b>Notice: </b>{ contactSettings.notice }</dd>
          <dd><b>Availability: </b>{ contactSettings.avaiable }</dd>
          <dd><a href = {contactSettings.github} target = '_blank' rel = 'noreferrer'>GitHub</a></dd>
          <dd><a href = {contactSettings.linkedin} target = '_blank' rel = 'noreferrer'>LinkedIn</a></dd>
        </div>
      </section>
    )
  }

  contactForm(): JSX.Element {
    const errorCite = <span className = { '' }>{  }</span>;

    return (
      <form>
        <div>
          <label>{ contactSettings.formName.label }</label>
          <input
            type = 'text'
            required = { true }
            value = { this.forms.name }
            className = { (this.formErr.name) ? 'error' : '' }
            onChange = { (e) => { this.logics.updateForm(e, f.name) } } 
            onBlur = { () => { this.logics.validateForm(f.name) } }
          />
          
        </div>
        <div>
          <label>{ contactSettings.formEmail.label }</label>
          <input 
            type = 'email'
            required = { true }
            value = { this.forms.email } 
            className = { (this.formErr.email) ? 'error' : '' }
            onChange = { (e) => { this.logics.updateForm(e, f.email) } } 
            onBlur = { () => { this.logics.validateForm(f.email) } }
          />
        </div>
        <div>
          <label>{ contactSettings.formPhone.label }</label>
          <input 
            type = 'phone'
            required = { true }
            value = { this.forms.phone } 
            className = { (this.formErr.phone) ? 'error' : '' }
            onChange = { (e) => { this.logics.updateForm(e, f.phone) } } 
            onBlur = { () => { this.logics.validateForm(f.phone) } }
          />
        </div>
        <div>
          <label>{ contactSettings.formCompany.label }</label>
          <input 
            type = 'text'
            required = { true }
            value = { this.forms.company } 
            className = { (this.formErr.company) ? 'error' : '' }
            onChange = { (e) => { this.logics.updateForm(e, f.company) } } 
            onBlur = { () => { this.logics.validateForm(f.company) } }
          />
        </div>
        <div>
          <label>{ contactSettings.formMessage.label }</label>
          <textarea 
            required = { true }
            value = { this.forms.message } 
            className = { (this.formErr.message) ? 'error' : '' }
            onChange = { (e) => { this.logics.updateForm(e, f.message) } } 
            onBlur = { () => { this.logics.validateForm(f.message) } }
          />
        </div>
      </form>
    )
  }



  // Will be manually called via "Projects" component
  output(): JSX.Element {
    return (<>
      { navigation() }
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