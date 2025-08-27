function Footer() {
  return (
    <div className="fixed bottom-0 bg-[#1E3E62] w-full py-3 flex flex-col md:flex-row justify-between items-center px-6 shadow-md">
      <h4 className="text-gray-200 text-xs md:text-sm text-center md:text-left">
        © 2025 Vansh Yadav | Comprehensive Quiz
      </h4>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="#" className="text-gray-300 hover:text-white text-xs">Privacy</a>
        <a href="#" className="text-gray-300 hover:text-white text-xs">Terms</a>
      </div>
    </div>
  );
}

export default Footer;
