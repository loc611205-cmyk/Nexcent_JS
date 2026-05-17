import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "font-inter",
});

export const metadata = {
  title: "Nextcen",
  description: "Nexcent Web",
};

export default function RootLayout({ children }) {
  const header_a = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Services",
      link: "/services",
    },
    {
      id: 3,
      title: "Feature",
      link: "/feature",
    },
    {
      id: 4,
      title: "Product",
      link: "/product",
    },
    {
      id: 5,
      title: "Testimonial",
      link: "/testimonial",
    },
    {
      id: 6,
      title: "FAQ",
      link: "/faq",
    },
  ];

  const footer_logo = [
    {
      id: 1,
      icon: "./images/logo_footer/intas.png",
    },
    {
      id: 2,
      icon: "./images/logo_footer/banh.png",
    },
    {
      id: 3,
      icon: "./images/logo_footer/chim.png",
    },
    {
      id: 4,
      icon: "./images/logo_footer/yt.png",
    },
  ];

  const footer_list1 = [
    {
      id: 1,
      text: "About us",
    },
    {
      id: 2,
      text: "Blog",
    },
    {
      id: 3,
      text: "Contact us",
    },
  ];

  const footer_list2 = [
    {
      id: 1,
      text: "Help center",
    },
    {
      id: 2,
      text: "Terms of service",
    },
    {
      id: 3,
      text: "Legal",
    },
  ];

  return (
    <html lang="en" className={inter.className}>
      <body>
        <header>
          <div className="header-inter">
            <Link href="/" className="logo">
              <img src="/images/logo.png" alt="Nexcent logo" />
            </Link>

            <nav>
              {header_a.map(function (item) {
                return (
                  <Link href={item.link} key={item.id}>
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            <div className="action-group">
              <a href="" className="logo-link">
                Login
              </a>

              <a href="" className="signup-btn">
                Signup
              </a>
            </div>
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="footer_container">
            <div className="footer_left">
              <div className="footer_left_logo">
                <img src="/images/logo_footer/Logo.png" alt="Nexcent logo" />
              </div>

              <p className="footer_left_text1">Copyright © 2020 Nexcent ltd.</p>

              <p>All rights reserved</p>

              <div className="footer_logos">
                {footer_logo.map(function (item) {
                  return <img key={item.id} src={item.icon} alt="Icon" />;
                })}
              </div>
            </div>

            <div className="footer_list">
              <h3>Company</h3>

              {footer_list1.map(function (item) {
                return <p key={item.id}>{item.text}</p>;
              })}
            </div>

            <div className="footer_list">
              <h3>Support</h3>

              {footer_list2.map(function (item) {
                return <p key={item.id}>{item.text}</p>;
              })}
            </div>

            <div className="footer_list">
              <h3>Stay up to date</h3>

              <div className="email_box">
                <input type="text" placeholder="Your email address" />

                <div className="send_icon">
                  <img src="/images/logo_footer/send.png" alt="send logo" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
