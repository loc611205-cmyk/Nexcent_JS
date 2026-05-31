export default function CustomersSection() {
  return (
    <section className="customers">
      <div className="logo_customers">
        <img src="/images/logo_custom/logo1.png" alt="Customer" />
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
          <span className="brand_text"> Vivamus vehicula </span>
          leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
          ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
          commodo faucibus efficitur quis massa. Praesent felis est, finibus et
          nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum
          id gravida.
        </p>

        <button className="register">Learn More</button>
      </div>
    </section>
  );
}
