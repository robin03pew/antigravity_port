import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { portraitImage } from '../data/projects';
import './About.css';

const About = () => {
  const equipment = [
    { category: 'Cameras', items: ['Sony A1', 'Sony A7IV', 'Sony FX3'] },
    { category: 'Lenses', items: ['Sony 16-35mm f/2.8 GM', 'Sony 24-70mm f/2.8 GM II', 'Sony 70-200mm f/2.8 GM II', 'Sony 50mm f/1.2 GM'] },
    { category: 'Lighting & Audio', items: ['Profoto B10X Plus', 'Rode Wireless GO II', 'DJI Mic'] },
    { category: 'Other', items: ['DJI Mavic 3 Pro', 'DJI RS 3 Pro Gimbal'] }
  ];

  const clients = ['Red Bull', 'Nike', 'VOID Festival', 'Austria Basketball', 'Vienna City Marathon', 'Erste Bank', 'Audi', 'Red Bull Records'];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <AnimatedPage>
      <div className="about-page section-padding">
        <div className="container">
          
          {/* Bio Section */}
          <section className="bio-section">
            <motion.div 
              className="bio-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h1>About</h1>
              <h2>Robin Adamek</h2>
              <p className="lead-text">
                Vienna based photographer and filmmaker specializing in sports, events, festivals and commercial content.
              </p>
              <p>
                My approach to photography and filmmaking is centered around capturing the raw energy and authentic emotion of the moment. Whether it's the peak action in a sports competition, the atmosphere of a music festival, or the intimate moments of a wedding, my goal is to deliver cinematic and premium visuals that tell a compelling story.
              </p>
              <p>
                With years of experience shooting dynamic environments, I thrive in fast-paced situations where anticipating the next moment is key. I work closely with brands, agencies, and individuals to create high-impact visual content.
              </p>
            </motion.div>
            
            <motion.div 
              className="bio-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img src={portraitImage} alt="Robin Adamek" />
            </motion.div>
          </section>

          {/* Equipment Section */}
          <section className="equipment-section">
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Equipment
            </motion.h3>
            <div className="equipment-grid">
              {equipment.map((group, index) => (
                <motion.div 
                  key={group.category} 
                  className="equipment-group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4>{group.category}</h4>
                  <ul>
                    {group.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Clients Section */}
          <section className="about-clients-section text-center">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Selected Clients
            </motion.h3>
            <motion.div 
              className="clients-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {clients.map(client => (
                <span key={client} className="client-name">{client}</span>
              ))}
            </motion.div>
          </section>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
