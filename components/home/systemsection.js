export default function SystemSection() {
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
    <section className="system">
      <div className="Manage">
        <h2 className="title-manage">
          Manage your entire community
          <br />
          in a single system
        </h2>

        <p className="text">Who is Nexcent suitable for?</p>
      </div>

      <div className="system-list">
        {systems.map((item) => (
          <div key={item.id} className="list-one">
            <img src={item.icon} alt={item.title} />

            <h3>{item.title}</h3>

            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
