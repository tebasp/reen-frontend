import Link from "next/link";

export default function Hero() {
  return (
    <main className="lg:relative">
      <div className="mx-auto max-w-7xl w-full pt-10 pb-20 text-center lg:py-28 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            <span className="block xl:inline">
              Las personas exitosas tienen la responsabilidad
            </span>{" "}
            <span className="block text-primary-500 xl:inline">
              social de hacer del mundo un lugar mejor
            </span>
          </h1>

          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 font-light sm:text-xl md:mt-5 md:max-w-3xl">
            En la UCACUE queremos conocer el estado de concienca de los
            estudiantes y profesores sobre la{" "}
            <span className="text-primary-500">Responsabilidad Social,</span>{" "}
            por lo que hemos preparado una{" "}
            <span className="text-primary-500">encuesta,</span> la cual nos
            permitirá saber si somo socialmente responsables o debemos mejorar
            en este aspecto.
          </p>

          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 font-light md:mt-5 md:max-w-3xl">
            Ayúdanos llenando esta encuesta y mejoremos juntos como Universidad
          </p>

          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link href="/survey">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary-600 hover:bg-secondary-700 md:py-4 md:text-lg md:px-10">
                  LLenar encuesta
                </a>
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link href="/results">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-secondary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Resultados
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          className="absolute inset-0 w-full h-full object-contain"
          src="/student.svg"
          alt="Student"
        />
      </div>
    </main>
  );
}
