import Link from "next/link";

/* This example requires Tailwind CSS v2.0+ */
export default function CallToAction() {
  return (
    <div className="bg-primary-600">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">La Responsabilidad Social</span>
          <span className="block">es un deber de todos</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Ayúdanos llenando esta encuesta y mejoremos juntos como Universidad
        </p>
        <Link href="/survey">
          <a className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
            LLenar encuesta
          </a>
        </Link>
      </div>
    </div>
  );
}
