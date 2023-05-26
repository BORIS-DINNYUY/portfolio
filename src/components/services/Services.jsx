import React from 'react'
import './services.css'
import ListServices from './listServices'


export const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <h5>
      <ol>
    <li>Software Development</li>
    <li>Software Maintenance</li>
    <li>Software Testing</li>
    <li>Software Consulting</li>
    <li>Project Management</li>
    <li>Technical Support</li>
    <li>Research and Development</li>
  </ol>
  </h5>
      <div className="container services__container">
        <ListServices />
      </div>
    </section>
  );
}
export default Services;