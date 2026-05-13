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
    </main>
  );
}
