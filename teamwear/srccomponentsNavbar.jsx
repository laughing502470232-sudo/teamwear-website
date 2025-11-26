export default function Navbar() {
  return (
    <header className="p-5 bg-black text-white flex justify-between">
      <h1 className="font-bold text-xl">TEAMWEAR</h1>
      <nav className="flex gap-6">
        <a href="#">Products</a>
        <a href="#">Teams</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
