import React, { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../../styles/Footer.module.css";

const Footer = (props) => {
    const [isAppleDevice, setIsAppleDevice] = useState(false);
    useEffect(() => {
        setIsAppleDevice(/Firefox|iPhone|iPad|iPod/i.test(navigator.userAgent));
    }, []);

    return (
      <footer
        className={
          props.theme ? styles.footerContainer_light : styles.footerContainer
        }
      >
        <div className={styles.footer}>
          <div
            className={
              isAppleDevice ? styles.appleFooterText : styles.footerText
            }
          >
            <h1>Join our Community!</h1>
            <h2>Try! Catch! Show!</h2>
          </div>
          <div className={styles.social_media}>
            <a
              href="https://www.linkedin.com/company/thecodebreakers-rcoem/"
              className={styles.linkedin}
              target="_blank"
            >
              <FaLinkedin
                className={
                  props.theme ? styles.social_icon_light : styles.social_icon
                }
              />
            </a>
           
            {props.about ? (
              <a
                href="https://instagram.com/thecodebreakers?igshid=YmMyMTA2M2Y=/"
                target="_blank"
                rel="noreferrer"
                className={`fab fa-instagram ${
                  props.theme
                    ? styles.insta + " " + styles.insta_light
                    : styles.social_icon + " " + styles.insta
                }`}
              ></a>
            ) : (
              <a
                href="https://www.instagram.com/ssn_coding_club/"
                target="_blank"
                rel="noreferrer"
                className={`fa fa-instagram ${
                  props.theme
                    ? styles.insta + " " + styles.insta_light
                    : styles.social_icon + " " + styles.insta
                }`}
              ></a>
            )}
           
             
         
          </div>
          <p
            style={{
              color: "grey",
              position: "absolute",
              bottom: "0",
              textAlign: "center",
            }}
          >
            {/* We use Google Analytics to monitor site analytics */}
          </p>
        </div>
      </footer>
    );
};

export default Footer;
