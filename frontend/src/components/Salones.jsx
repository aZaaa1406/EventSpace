import { Input } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { SearchIcon } from "../assets/SearchIcon";
import listadoSalones from "../assets/salones.json"

export default function ListaSalones() {
    const salones = listadoSalones.Search;

  return (
    <>
      <header>
        <Input
          label="Search"
          placeholder="Escribe"
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          variant="bordered"
          className="max-w-[400px] p-3"
        />
      </header>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {salones.map((salon, index) => (
        <Card className="min-w-[250px]" shadow="sm" key={index} isPressable>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={salon.Nombre}
              className="w-full h-[140px]"
              src={salon.Imagen}
            />
          </CardBody>
          <CardFooter className="flex flex-col">
            <b className="text-xl">{salon.Nombre}</b>
            <p className="text-default-500">{salon.Espacio}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
    </>
  );
}
