export default function CaringSection() {
  const caring_bottom = [
    {
      id: 1,
      icon: "/images/logo_caring/logo1.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      id: 2,
      icon: "/images/logo_caring/logo2.png",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      id: 3,
      icon: "/images/logo_caring/logo3.png",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section className="caring">
      <div className="caring_header">
        <h2>Caring is the new marketing</h2>

        <p>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>

      <div className="caring_list">
        {caring_bottom.map((item) => (
          <div key={item.id} className="caring_card">
            <img src={item.icon} alt={item.title} />

            <div className="caring_content">
              <h3>{item.title}</h3>

              <h4 className="caring_link">Readmore →</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
