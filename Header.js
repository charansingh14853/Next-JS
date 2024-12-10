export default function Header() {
    return (
      <header className="bg-primary text-white p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">WeFrameTech</h1>
          <input
            type="text"
            placeholder="Rechercher un produit"
            className="rounded-lg px-4 py-2 bg-gray-200 text-gray-900"
          />
        </nav>
      </header>
    );
  }
  