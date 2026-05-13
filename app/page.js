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
    </main>
  );
}
