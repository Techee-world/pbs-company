import Link from "next/link";


export default function Services() {
  return (

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Services</h1>
        <p className="text-lg text-center mb-8">
          Learn more about our services on this page.
        </p>
        <Link href="/" className="text-blue-600 underline">
          Back to Main
        </Link>
      </div>

  );
}
