export default function ClientSection() {
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

  return (
    <section className="client">
      <div className="our-client">
        <h2 className="from">Our Client</h2>

        <p className="text">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="logo-our">
        {ourclient_img.map((item) => (
          <img key={item.id} src={item.icon} alt="client logo" />
        ))}
      </div>
    </section>
  );
}
