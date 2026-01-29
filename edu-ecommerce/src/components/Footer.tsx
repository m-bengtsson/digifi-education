import imageUrls from "../data/imageUrls";

export default function Footer() {
  return (
    <footer
      className={`flex px-36 py-12 bg-[url(${imageUrls.backgroundBlue})] bg-cover bg-center items-center min-h-50 text-white`}
    >
      <div className="flex *:w-full *:px-4 *:justify-between container">
        <div>
          <h4 className="text-l font-extrabold uppercase mb-2">Om oss</h4>
          <p className="text-sm">
            Gördetmedrw.se grundades i april 2019 och har sedan dess haft som
            mål att inspirera och underlätta för alla som älskar att ta hand om
            sitt fordon och att städa i överlag. Företaget är baserat i Timrå,
            norr om Sundsvall och är idag ett stort väletablerat företag med
            hundratusentals kunder runtom i Sverige.
          </p>
          <br /> <p className="text-sm">060-12 88 00</p>
          <p className="text-sm">info@rw.se</p>
        </div>
        <div>
          <h4 className="text-l font-extrabold uppercase">Kundtjänst</h4>
        </div>
        <div>
          <h4 className="text-l font-extrabold uppercase">Sociala medier</h4>
        </div>
        <div></div>
      </div>
    </footer>
  );
}
