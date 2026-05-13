import Image from "next/image";
import "./page.css";

export default function Home() {
  const header_a = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Services",
    },
    {
      id: 3,
      title: "Feature",
    },
    {
      id: 4,
      title: "Product",
    },
    {
      id: 5,
      title: "Testimonial",
    },
    {
      id: 6,
      title: "FAQ",
    },
  ];

  const ourclient_img = [
    {
      id: 1,
      icon: "/images/logo_client/logo1.png",
    },
    {
      id: 2,
      icon: "/images/logo_client/logo2.png",
    },
    {
      id: 3,
      icon: "/images/logo_client/logo3.png",
    },
    {
      id: 4,
      icon: "/images/logo_client/logo4.png",
    },
    {
      id: 5,
      icon: "/images/logo_client/logo5.png",
    },
    {
      id: 6,
      icon: "/images/logo_client/logo6.png",
    },
    {
      id: 7,
      icon: "/images/logo_client/log7.png",
    },
  ];

  const systems = [
    {
      id: 1,
      icon: "/images/logo_system/Icon.png",
      title: "Membership Organisations",
      subtitle:
        "Our membership management software provides full automation of membership renewals and payments",
    },

    {
      id: 2,
      icon: "/images/logo_system/Icon2.png",
      title: "National Associations",
      subtitle:
        "Our membership management software provides full automation of membership renewals and payments",
    },

    {
      id: 3,
      icon: "/images/logo_system/Icon3.png",
      title: "Clubs And Groups",
      subtitle:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  const achievement_right = [
    {
      id: 1,
      icon: "/images/logo_achievement/Icon_1.png",
      number: "2,245,341",
      title: "Members",
    },

    {
      id: 2,
      icon: "/images/logo_achievement/logo_2.png",
      number: "46,328",
      title: "Clubs",
    },

    {
      id: 3,
      icon: "/images/logo_achievement/Icon_3.png",
      number: "828,867",
      title: "Events Bookings",
    },

    {
      id: 4,
      icon: "/images/logo_achievement/Icon_4.png",
      number: "1,926,436",
      title: "Payments",
    },
  ];

  //  <div class="community_logos">
  //           <img src="./images/logo_connunity/Logo0.png" alt="" />
  //           <img src="./images/logo_connunity/Logo2.png" alt="" />
  //           <img src="./images/logo_connunity/Logo3.png" alt="" />
  //           <img src="./images/logo_connunity/Logo4.png" alt="" />
  //           <img src="./images/logo_connunity/Logo5.png" alt="" />
  //           <h3 class="community_name">Meet all customers →</h3>
  //         </div>

  const community_right = [
    {
      id: 1,
      icon: "./images/logo_connunity/Logo0.png",
    },
    {
      id: 2,
      icon: "./images/logo_connunity/Logo2.png",
    },
    {
      id: 3,
      icon: "./images/logo_connunity/Logo3.png",
    },
    {
      id: 4,
      icon: "./images/logo_connunity/Logo4.png",
    },
    {
      id: 5,
      icon: "./images/logo_connunity/Logo5.png",
    },
  ];

  const caring_bottom = [
    {
      id: 1,
      icon: "./images/logo_caring/logo1.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },

    {
      id: 2,
      icon: "./images/logo_caring/logo2.png",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },

    {
      id: 3,
      icon: "./images/logo_caring/logo3.png",
      title: "Revamping the Membership Model with Triathlon Australia",
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
    {
      id: 4,
      text: "Pricing",
    },
    {
      id: 5,
      text: "Testimonials",
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
    {
      id: 4,
      text: "Privacy policy",
    },
    {
      id: 5,
      text: "Status",
    },
  ];

  return (
    <main>
      <header>
        <div className="header-inter">
          <a href="" className="logo">
            <img src="./images/logo.png" alt="Nexcent logo" />
          </a>

          <nav>
            {header_a.map(function (item) {
              return (
                <a key={item.id} href="#">
                  {item.title}
                </a>
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
      {/* <!-- Banner Section --> */}
      <section className="Banner">
        <div className="hero-frameone">
          <h1 className="lessons">Lessons and insights</h1>

          <h1 className="years">from 8 years</h1>

          <p className="text">
            Where to grow your business as a photographer: site or social media?
          </p>

          <button className="register">Register</button>
        </div>

        <div className="hero-img">
          <img src="./images/Illustration.png" alt="Illustration Logo" />
        </div>
      </section>
      {/* <!-- Banner Section --> */}

      {/* <!-- Our Client Section --> */}
      <section className="client">
        <div className="our-client">
          <h2 className="from">Our Client</h2>
          <p className="text">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="logo-our">
          {ourclient_img.map(function (item) {
            return <img key={item.id} src={item.icon} alt="client logo" />;
          })}
        </div>
      </section>
      {/* <!-- Our Client Section --> */}

      {/* <!-- System Section --> */}

      <section className="system">
        <div className="Manage">
          <h2 className="title-manage">
            Manage your entire community <br />
            in a single system
          </h2>

          <p className="text">Who is Nexcent suitable for?</p>
        </div>

        <div className="system-list">
          {systems.map(function (item) {
            return (
              <div key={item.id} className="list-one">
                <img src={item.icon} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* <!-- System Section --> */}

      {/* <!-- Unlock Section --> */}
      <section className="unlock">
        <div className="logo_unlock">
          <img
            src="./images/logo_unlock/logo_2people.png"
            alt="logo điện thoại"
          />
        </div>
        <div className="title_text_unlock">
          <h2 className="title-manage">
            The unseen of spending three
            <br />
            years at Pixelgrade
          </h2>
          <p className="text_unlock">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="register">Learn More</button>
        </div>
      </section>
      {/* <!-- Unlock Section --> */}

      {/* <!-- Achievement Section --> */}
      <section className="achievement">
        <div className="achievement_list">
          <h2>
            Helping a local <br />
            <span className="brand_text">business reinvent itself</span>
          </h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="achievement_right">
          {achievement_right.map(function (item) {
            return (
              <div key={item.id} className="logo_achievement">
                <img src={item.icon} alt="Icon" />
                <div className="logo_text">
                  <h3>{item.number}</h3>
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* <!-- Achievement Section --> */}

      {/* <!-- Customers Section --> */}
      <section className="customers">
        <div className="logo_customers">
          <img src="./images/logo_custom/logo1.png" alt="" />
        </div>
        <div className="customers_right">
          <h2 className="title-manage">
            How to design your site footer like we did
          </h2>
          <p className="text_customers">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst.
            <span className="brand_text">Vivamus vehicula</span> leo dui, at
            porta nisi facilisis finibus. In euismod augue vitae nisi ultricies,
            non aliquet urna tincidunt. Integer in nisi eget nulla commodo
            faucibus efficitur quis massa. Praesent felis est, finibus et nisi
            ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="register">Learn More</button>
        </div>
      </section>
      {/* <!-- Customers Section --> */}

      {/* 
      <!-- Community Section --> */}
      <section className="community">
        <div className="community_left">
          <img src="./images/logo_connunity/Logo1.png" alt="" />
        </div>

        <div className="community_right">
          <p className="community_text">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h3 className="community_name">Tim Smith</h3>
          <p className="community_british">
            British Dragon Boat Racing Association
          </p>
          <div className="community_bottom">
            <div className="community_logos">
              {community_right.map(function (item) {
                return <img key={item.id} src={item.icon} alt="Icon" />;
              })}
              <h3 className="community_name">Meet all customers →</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Community Section --> */}

      {/* <!--Caring Section --> */}
      <section className="caring">
        <div className="caring_header">
          <h2>Caring is the new marketing</h2>
          <p>
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.
          </p>
        </div>
        <div className="caring_list">
          {caring_bottom.map(function (item) {
            return (
              <div key={item.id} className="caring_card">
                <img src={item.icon} alt="Icon" />
                <div className="caring_content">
                  <h3>{item.title}</h3>
                  <h4 className="caring_link">Readmore →</h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* <!--Caring Section --> */}

      {/* <!-- Footer Section --> */}
      <section className="footer_section">
        <h2>Pellentesque suscipit fringilla libero eu.</h2>
        <button className="register">Get a Demo →</button>
      </section>

      <footer className="footer">
        <div className="footer_container">
          <div className="footer_left">
            <div className="footer_left_logo">
              <img src="./images/logo_footer/Logo.png" alt="Nexcent logo" />
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
                <img src="./images/logo_footer/send.png" alt="send logo" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
