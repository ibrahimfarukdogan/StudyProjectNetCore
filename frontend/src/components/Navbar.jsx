import { useState, useEffect } from 'react'
import { fetchNavbarItems, fetchAlternativeModById } from '../services/api';
import styles from './Navbar.module.css';
import clock from "/clockicon.svg"
import location from "/locationicon.svg"
import instagram from "/instagram.svg"
import facebook from "/facebook.svg"
import twitter from "/twitter.svg"
import linkedin from "/linkedin.svg"
import footerlogo from "/logo.svg"
import phone from "/phoneicon.svg"
import { Link, NavLink, useNavigate } from 'react-router-dom'


function Navbar() {
  const [isModEnabled, setIsModEnabled] = useState(null);
  const [navbarItems, setNavbarItems] = useState([]);

  useEffect(() => {
    const getNavbarItems = async () => {
      const items = await fetchNavbarItems();
      setNavbarItems(items); // Set the filtered active items
    };
    const getMod = async () => {
      const mod = await fetchAlternativeModById(1);
      setIsModEnabled(mod.alternativeMod); // Set the filtered active items
    };
    getNavbarItems();
    getMod();
  }, []);

  if (navbarItems === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        {isModEnabled ? (
          // Alternative Navbar (6 buttons, white, column layout)
          <div className={`${styles.header2alt}`}>
            <div className={`${styles.header2content}`}>
              <div className={`${styles.header2itemsalt}`}>
                <img src={footerlogo} />
                <h2>AskExperts</h2>
              </div>
              <div className={`${styles.header2content2}`}>
                {navbarItems.map((item, index) => (
                  <ul key={index} className={`${styles.header2items2}`}>
                    <NavLink to={item.url} className={({ isActive }) =>
                      isActive ? `${styles.header2items2linkactivealt} ${styles.header2items2linkalt}` : styles.header2items2linkalt}>
                      <li>{item.name}</li>
                    </NavLink>
                  </ul>
                ))}
              </div>
              <div className={`${styles.header2itemsalt}`}>
                <Link to={`/contact`} ><button><img src={phone} /> + (888) 452 1505</button></Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={`${styles.header1}`}>
              <div className={`${styles.header1content}`}>
                <div className={`${styles.header1items}`}>
                  <img src={clock} />
                  <h5>Monday - Friday8AM - 9PM</h5>
                </div>
                <div className={`${styles.header1items}`}>
                  <img src={location} />
                  <h5>725 Park Ave, New York</h5>
                </div>
                <div className={`${styles.header1items2}`}>
                  <a href="https://www.instagram.com/"><img src={instagram} /></a>
                  <a href="https://www.facebook.com/"><img src={facebook} /></a>
                  <a href="https://x.com/"><img src={twitter} /></a>
                  <a href="https://www.linkedin.com/"><img src={linkedin} /></a>
                </div>
              </div>
            </div>
            <div className={`${styles.header2}`}>
              <div className={`${styles.header2content}`}>
                <div className={`${styles.header2items}`}>
                  <img src={footerlogo} />
                  <h2>AskExperts</h2>
                </div>
                <div className={`${styles.header2content2}`}>
                  {navbarItems.map((item, index) => (
                    <ul key={index} className={`${styles.header2items2}`}>
                      <NavLink to={item.url} className={({ isActive }) =>
                        isActive ? `${styles.header2items2linkactive} ${styles.header2items2link}` : styles.header2items2link}>
                        <li>{item.name}</li>
                      </NavLink>
                    </ul>
                  ))}
                </div>
                <div className={`${styles.header2items}`}>
                  <Link to={`/contact`} ><button><img src={phone} /> + (888) 452 1505</button></Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
