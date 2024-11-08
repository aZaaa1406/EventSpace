import { Avatar, Input } from "@nextui-org/react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { SearchIcon } from "../assets/SearchIcon";
import listadoSalones from "../assets/salones.json";
import { Link } from "react-router-dom";

export default function ListaSalones() {
  const salones = listadoSalones.Search;

  return (
    <>
      <header className="mx-10 my-4 flex items-center justify-between">
        <Link
          to={{
            pathname: `/salones`,
          }}
        >
          <h1 className="text-2xl font-mono">EnterSpace</h1>
        </Link>
        <Input
          label="Search"
          placeholder="Escribe"
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          variant="bordered"
          className="max-w-[450px] p-3"
        />
        <Link>
          <Avatar />
        </Link>
      </header>
      <div className="flex flex-wrap justify-evenly">
        {salones.map((salon) => (
          <Link
            key={salon.Id}
            to={{
              pathname: `/salones/${salon.Id}`,
            }}
            state={{ salon }}
          >
            <Card className="w-[400px] min-h-[340px] mb-8" shadow="sm">
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={salon.Nombre}
                  className="w-full h-[200px]"
                  src={salon.Imagen}
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start text-ellipsis overflow-hidden">
                <b className="text-2xl font-medium">{salon.Nombre}</b>
                <p className="text-xs text-left">{salon.Espacio}</p>
                <p className="text-s">{salon.Descripcion}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
