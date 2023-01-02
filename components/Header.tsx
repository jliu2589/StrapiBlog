import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="data:image/jpeg;base64,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"
            alt="London"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-600">
          Get Started
        </h3>
      </div>
    </header>
  );
}
export default Header;