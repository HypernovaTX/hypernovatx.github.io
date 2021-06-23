import templateContact from './template/contact';
import '../resources/contact.scss';
import useScrollPosition from '../hooks/scroll';
import { useState } from "react";

export default function Projects() {
  const defaultForms = { name: '', email: '',  phone: '', company: '', message: '' };
  const defaultErr = { name: 0, email: 0,  phone: 0, company: 0, message: 0 };
  let [forms, updateForm] = useState(defaultForms);
  let [formErr, updateErr] = useState(defaultErr);

  const sendEmail = () => {};

  const scrollPos = useScrollPosition();
  const template = new templateContact(scrollPos, forms, updateForm, formErr, updateErr);
  return(template.output());
}