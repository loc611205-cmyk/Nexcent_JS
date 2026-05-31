import Link from "next/link";

export default function Header() {
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

  return (
    <header>
      <div className="header-inter">
        <Link href="/" className="logo">
          <img src="/images/logo.png" alt="Nexcent logo" />
        </Link>

        <nav>
          {header_a.map((item) => (
            <Link href={item.link} key={item.id}>
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="action-group">
          <a href="#" className="logo-link">
            Login
          </a>

          <a href="#" className="signup-btn">
            Signup
          </a>
        </div>
      </div>
    </header>
  );
}
