import { Avatar, Input } from "@nextui-org/react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { SearchIcon } from "../assets/SearchIcon";
import listadoSalones from "../assets/salones.json";
import { Link } from "react-router-dom";

export default function ListaSalones() {
  const salonPropietario = [1]
  const isPropietario = true

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
        {(() => {
          if(isPropietario){
            if(salonPropietario == 0){
              return(
                <AdminCards />
              )
            } else {
              return(
                <UserCards />
              )
            }
          } else {
            return(
              <UserCards />
            )
          }
        })()}
      </div>
    </>
  );
}

function UserCards() {
  const salones = listadoSalones.Search;

  return (
    <>
      {salones.map((salon) => (
        <Link
          key={salon.Id}
          to={{
            pathname: `/salones/${salon.Id}`,
          }}
          state={{ salon }}
        >
          <Card className="w-[400px] h-[340px] mb-8" shadow="sm">
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
            <CardFooter className="flex flex-col items-start">
              <b className="text-2xl font-medium">{salon.Nombre}</b>
              <p className="text-xs text-left">{salon.Espacio}</p>
              <p className="text-s text-ellipsis">{salon.Descripcion}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </>
  );
}

function AdminCards() {
  return (
      <Link
          to={{
            pathname: `/registroSalon`,
          }}
        >
          <Button isIconOnly color="danger" aria-label="Like" className="text-2xl">
            +
          </Button>
      </Link>
  );
}
