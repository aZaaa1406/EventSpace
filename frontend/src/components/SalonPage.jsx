import { Image, Button } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";

export default function SalonPage() {
  const location = useLocation();
  const salon = location.state?.salon;

  return (
    <>
    <header>
      <Link
        to={{
          pathname: `/salones`,
        }}
      >
      <h1 className="m-8 text-xl">EnterSpace</h1>
      </Link>
    </header>
      <div className="grid auto-rows-[400px] grid-cols-2 gap-4">
        <div className="row-span-1 col-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            className="w-full h-[372px]"
            src="https://i0.wp.com/presidenteicmexico.com/wp-content/uploads/2024/04/salones-fiestas-cdmx-cumplea%C2%A7os-esp.jpg?fit=479%2C254&ssl=1"
          />
        </div>
        <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
          <h1 className="text-4xl mb-4">{salon.Nombre}</h1>
          <p className="text-lg">{salon.Descripcion}</p>
          <p>Anfitrion: {salon.Anfitrion}</p>
        </div>
        <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
          <h1>Reservar</h1>
          <p>Inputs</p>
          <Link
            key={salon.Id}
            to={{
              pathname: `/reservar/${salon.Id}`,
            }}
            state={{ salon }}
          >
            <Button color="primary">Reservar</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
