import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js Product Page</title>
      </Head>

      <Header />

      <main className="container mx-auto my-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left product visual */}
        <div className="rounded-lg shadow-lg overflow-hidden">
          <img
            src="/product-image.jpg"
            alt="Product Image"
            className="h-auto max-w-full rounded-lg"
          />
        </div>

        {/* Product Information Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">
            Cheese, Appareil à Raclette 1/2 Roue
          </h2>

          <p className="text-xl font-bold text-yellow-500 mb-4">39.50€</p>

          <p>
            Appareil à raclette traditionnel idéal pour une utilisation professionnelle.
          </p>

          {/* Product Features */}
          <ul className="list-disc mt-4 pl-6">
            <li>Position ajustable horizontalement</li>
            <li>Puissance 200 Watts</li>
            <li>Utilisation fiable pour équipements commerciaux</li>
          </ul>

          {/* Buttons */}
          <div className="mt-6">
            <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-lg">
              Ajouter au Panier
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
