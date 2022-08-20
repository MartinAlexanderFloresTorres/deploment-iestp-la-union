import Informate from "../components/Informate";

export default function Logros({ bg }) {
  return (
    <Informate bg={bg}>
      <h2 className="titulo">Nuestros Logros</h2>
      <p className="parrafo">
        La mente es como un paracaídas: sólo funciona si se abre. Te mostramos
        nuestros logros que ha tenido la institución durante estos años.
      </p>
      <div className="d-flex gap-5 flex-wrap align-items-center justify-content-center pt-5">
        <div>
          <svg
            className="w-6 h-6"
            fill="none"
            width={60}
            height={60}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h2 className="py-2 fw-bold fs-1">30+</h2>
          <p className="fw-semibold fs-5">Años de trabajo</p>
        </div>
        <div>
          <svg
            className="w-6 h-6"
            fill="none"
            width={60}
            height={60}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          <h2 className="py-2 fw-bold fs-1">10+</h2>
          <p className="fw-semibold fs-5">Convenios</p>
        </div>
        <div>
          <svg
            className="w-6 h-6"
            fill="none"
            width={60}
            height={60}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
          <h2 className="py-2 fw-bold fs-1">3500+</h2>
          <p className="fw-semibold fs-5">Egresados</p>
        </div>
        <div>
          <svg
            className="w-6 h-6"
            fill="none"
            width={60}
            height={60}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h2 className="py-2 fw-bold fs-1">6+</h2>
          <p className="fw-semibold fs-5">Carreras</p>
        </div>
      </div>
    </Informate>
  );
}
