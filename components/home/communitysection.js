export default function CommunitySection() {
  const community_right = [
    {
      id: 1,
      icon: "/images/logo_connunity/Logo0.png",
    },
    {
      id: 2,
      icon: "/images/logo_connunity/Logo2.png",
    },
    {
      id: 3,
      icon: "/images/logo_connunity/Logo3.png",
    },
    {
      id: 4,
      icon: "/images/logo_connunity/Logo4.png",
    },
    {
      id: 5,
      icon: "/images/logo_connunity/Logo5.png",
    },
  ];

  return (
    <section className="community">
      <div className="community_left">
        <img src="/images/logo_connunity/Logo1.png" alt="" />
      </div>

      <div className="community_right">
        <p className="community_text">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim.
        </p>

        <h3 className="community_name">Tim Smith</h3>

        <p className="community_british">
          British Dragon Boat Racing Association
        </p>

        <div className="community_bottom">
          <div className="community_logos">
            {community_right.map((item) => (
              <img key={item.id} src={item.icon} alt="Icon" />
            ))}

            <h3 className="community_name">Meet all customers →</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
