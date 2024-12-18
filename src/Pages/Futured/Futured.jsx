import { Helmet } from "react-helmet-async";

const Futured = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">
          About Gadget Heaven
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Gadget Heaven is your ultimate destination for the latest and most
          innovative gadgets. We bring you the top tech products from around the
          world to ensure you stay ahead of the curve. Whether you are a tech
          enthusiast, a gadget lover, or just looking for the latest in
          technology, Gadget Heaven has something for everyone.
        </p>
        <h3 className="text-2xl font-semibold text-blue-400 mt-6 mb-2">
          Our Mission
        </h3>
        <p className="text-gray-700 mb-4">
          Our mission is to provide our customers with high-quality,
          cutting-edge technology at competitive prices. We strive to keep our
          inventory updated with the newest releases and the most sought-after
          gadgets on the market.
        </p>
        <h3 className="text-2xl font-semibold text-blue-400 mt-6 mb-2">
          Why Choose Us?
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Wide range of top-quality gadgets.</li>
          <li>Affordable prices and exclusive deals.</li>
          <li>Fast and reliable customer service.</li>
          <li>Hassle-free returns and exchanges.</li>
          <li>Trusted by tech enthusiasts worldwide.</li>
        </ul>
        <h3 className="text-2xl font-semibold text-blue-400 mt-6 mb-2">
          Contact Us
        </h3>
        <p className="text-gray-700">
          Have questions or need assistance? Feel free to reach out to our
          support team at
          <span className="text-blue-600 font-semibold">
            {" "}
            support@gadgetheaven.com
          </span>{" "}
          or call us at{" "}
          <span className="text-blue-600 font-semibold">+1 (555) 123-4567</span>
          .
        </p>
      </div>
    </div>
  );
};

export default Futured;
