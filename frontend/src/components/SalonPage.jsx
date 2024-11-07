import { Image, Button, Input, TimeInput, DatePicker } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";

export default function SalonPage() {
  const location = useLocation();
  const salon = location.state?.salon;

  return (
    <>
      <header className="mx-10 my-9 flex items-center justify-between">
        <Link
          to={{
            pathname: `/salones`,
          }}
        >
          <h1 className="text-2xl font-mono">EnterSpace</h1>
        </Link>
        <Link>
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            className="w-10 h-10"
            src="profile"
          />
        </Link>
      </header>
      <div className="grid auto-rows-auto grid-cols-4 gap-4 mx-10">
        <div className="row-span-1 col-span-4 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            className="w-3/6"
            src="https://i0.wp.com/presidenteicmexico.com/wp-content/uploads/2024/04/salones-fiestas-cdmx-cumplea%C2%A7os-esp.jpg?fit=479%2C254&ssl=1"
          />
        </div>
        <div className="row-span-1 col-span-3 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
          <h1 className="text-4xl mb-4">{salon.Nombre}</h1>
          <p className="text-lg">{salon.Descripcion}</p>
          <p>Anfitrion: {salon.Anfitrion}</p>
        </div>
        <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
          <h1>Reservar</h1>
          <p className="text-3xl">
            ${salon.CostoHr} <span className="text-lg">hora</span>
          </p>
          <Input
            type="number"
            label="Cantidad"
            variant="bordered"
            className="my-4"
          />
          <TimeInput label="Event Time" variant="bordered" className="mb-4"/>
          <DatePicker label="Birth date" className="max-w-[284px] mb-4"  variant="bordered"/>
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
