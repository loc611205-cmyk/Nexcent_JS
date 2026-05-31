export default function AchievementSection() {
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
    <section className="achievement">
      <div className="achievement_list">
        <h2>
          Helping a local <br />
          <span className="brand_text">
            business reinvent itself
          </span>
        </h2>

        <p>
          We reached here with our hard work and
          dedication
        </p>
      </div>

      <div className="achievement_right">
        {achievement_right.map((item) => (
          <div
            key={item.id}
            className="logo_achievement"
          >
            <img
              src={item.icon}
              alt=""
            />

            <div className="logo_text">
              <h3>{item.number}</h3>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}