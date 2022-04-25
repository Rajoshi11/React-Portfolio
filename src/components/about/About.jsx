import React from 'react'
import './about.css'
import ME from '../../assets/1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Lorem, ipsum dolor.</small>
            </article>
            <article className="about__card">
            <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>Lorem, ipsum dolor.</small>
            </article>
            <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>Lorem, ipsum dolor.</small>
            </article>

        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat pretium urna. Mauris odio est, pretium nec fermentum nec, pulvinar ut nulla. Proin suscipit faucibus ullamcorper. Donec sed ante sit amet sem tincidunt interdum a a leo. In sagittis tempor condimentum. Donec in mauris sit amet enim gravida vehicula viverra nec purus.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About