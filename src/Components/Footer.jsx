import React from 'react'
import FooterStyles from "../Styles/Footer.module.css"
//console.log(FooterStyles);
const Footer = () => {
  return (
    <footer className={FooterStyles.footerContainer}>
        <p>Powered by</p>

        <div className={FooterStyles.footerSection}>
          <img src='../images/DH.png' alt='DH-logo' />
          <div>
            <img src="../images/ico-facebook.png" alt="facebook-icon" className={FooterStyles.icons}/>
            <img src="../images/ico-instagram.png" alt="instagram-icon" className={FooterStyles.icons}/>
            <img src="../images/ico-whatsapp.png" alt="whatss-icon" className={FooterStyles.icons}/>
            <img src="../images/ico-tiktok.png" alt="tiktok icon" className={FooterStyles.icons}/>
          </div>
        </div>
    </footer>
  )
}

export default Footer
