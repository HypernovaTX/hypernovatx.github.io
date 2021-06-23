import React from 'react';
import templateContact from './template/contact';
import '../resources/contact.scss';
import { XY, contactForms, contactErr } from '../lib/types';
import emailjs, { init as initEmailJS } from 'emailjs-com';
import { emailJsKey, emailJsService, emailJsTemplate, contactSettings as CS } from '../lib/settings';

type Props = {};
type State = {
  forms: contactForms;
  err: contactErr;
  sending: boolean;
  scroll: XY;
  recaptcha: boolean;
}

export default class Contact extends React.Component<Props, State> {
  constructor(p: Props) {
    super(p);
    this.state = {
      forms: { name: '', email: '',  phone: '', company: '', message: '' },
      err: { name: 0, email: 0,  phone: 0, company: 0, message: 0, recaptcha: 0 },
      sending: false,
      scroll: { x: 0, y: 0 },
      recaptcha: false,
    }
  }

  public componentDidMount() { 
    window.addEventListener('scroll', this.handleScroll); 
    this.setState({ scroll: { x: window.pageXOffset, y: window.pageYOffset } });
    initEmailJS(emailJsKey);
  }

  public componentWillUnmount() { window.removeEventListener('scroll', this.handleScroll); }

  private handleScroll = () => {
    this.setState({ scroll: { x: window.pageXOffset, y: window.pageYOffset } });
  }

  sendEmail = (): void => {
    const { forms } = this.state;
    const payload = { ...forms }
    const send = () => { emailjs.send(emailJsService, emailJsTemplate, payload, '')
      .then((result) => {
        if (result.text === 'OK') { alert(CS.successMsg); this.resetForm(); }
        else { alert(CS.failMsg); }
        this.setState({ sending: false });
      }, (error) => {
        alert(CS.failMsg);
        console.log(error.text);
      });
    }

    this.setState({ sending: true });
    setTimeout(send, 2000);
  };

  resetForm = (): void => {
    this.setState({
      forms: { name: '', email: '',  phone: '', company: '', message: '' },
      err: { name: 0, email: 0,  phone: 0, company: 0, message: 0, recaptcha: 0 }
    })
  }

  render() {
    const { forms, err, scroll, sending, recaptcha } = this.state;
    const updateForm = (input: contactForms) => { this.setState({ forms: input }) };
    const updateErr = (input: contactErr) => { this.setState({ err: input }) };
    const updateRC = (input: boolean) => { this.setState({ recaptcha: input }) }

    const template = new templateContact(
      scroll, 
      forms, 
      updateForm, 
      err, 
      updateErr, 
      this.sendEmail, 
      sending,
      this.resetForm,
      recaptcha,
      updateRC
    );
    return(template.output());
  }
}