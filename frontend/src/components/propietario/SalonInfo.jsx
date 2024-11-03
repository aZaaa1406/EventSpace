import { Image, Button } from "@nextui-org/react";

export default function SalonInfo() {

  return (
    <>
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
          <h1>Nombre</h1>
          <p>Descripcion</p>
        </div>
        <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
          <Button color="primary">Editar</Button>
        </div>
      </div>
    </>
  );
}
