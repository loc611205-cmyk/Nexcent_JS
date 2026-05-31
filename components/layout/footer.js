export default function Footer() {
  const footer_logo = [
    {
      id: 1,
      icon: "/images/logo_footer/intas.png",
    },
    {
      id: 2,
      icon: "/images/logo_footer/banh.png",
    },
    {
      id: 3,
      icon: "/images/logo_footer/chim.png",
    },
    {
      id: 4,
      icon: "/images/logo_footer/yt.png",
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
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_left">
          <div className="footer_left_logo">
            <img src="/images/logo_footer/Logo.png" alt="Nexcent logo" />
          </div>

          <p className="footer_left_text1">Copyright © 2020 Nexcent ltd.</p>

          <p>All rights reserved</p>

          <div className="footer_logos">
            {footer_logo.map((item) => (
              <img key={item.id} src={item.icon} alt="Icon" />
            ))}
          </div>
        </div>

        <div className="footer_list">
          <h3>Company</h3>

          {footer_list1.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>

        <div className="footer_list">
          <h3>Support</h3>

          {footer_list2.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
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
  );
}
