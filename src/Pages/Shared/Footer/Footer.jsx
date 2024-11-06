const Footer = () => {
  return (
    <div className="bg-slate-100">
      <div className="text-center space-y-5 pt-10">
        <h1 className="text-3xl font-bold text-black">Gadget Heaven</h1>
        <p className="text-base font-medium text-gray-500">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="border-2 mt-10 w-8/12 mx-auto"></div>
      <div className="flex justify-evenly items-center w-8/12 mx-auto py-10 text-center">
        <div>
          <h2 className="text-base font-bold text-black">Services</h2>
          <p className="text-base font-medium text-gray-500">Product Support</p>
          <p className="text-base font-medium text-gray-500">Order Tracking</p>
          <p className="text-base font-medium text-gray-500">
            Shipping & Delivery
          </p>
          <p className="text-base font-medium text-gray-500">Returns</p>
        </div>
        <div>
          <h2 className="text-base font-bold text-black">Company</h2>
          <p className="text-base font-medium text-gray-500">About Us</p>
          <p className="text-base font-medium text-gray-500">Future</p>
          <p className="text-base font-medium text-gray-500">Career</p>
        </div>
        <div>
          <h2 className="text-base font-bold text-black">Legal</h2>
          <p className="text-base font-medium text-gray-500">
            Terms & Condition
          </p>
          <p className="text-base font-medium text-gray-500">Privacy Policy</p>
          <p className="text-base font-medium text-gray-500">Cookies Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
