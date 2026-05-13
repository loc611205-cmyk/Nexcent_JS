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
    </main>
  );
}
