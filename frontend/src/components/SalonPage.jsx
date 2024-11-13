import {
  Image,
  Button,
  Input,
  TimeInput,
  DatePicker,
  Avatar,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SalonPage() {
  const location = useLocation();
  const salon = location.state?.salon;

  const [personas, setPersonas] = useState();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
          <Avatar />
        </Link>
      </header>
      <div className="grid auto-rows-auto grid-cols-4 gap-4 mx-10">
        <div className="row-span-1 col-span-3">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            className="w-9/12 m-auto"
            src="https://i0.wp.com/presidenteicmexico.com/wp-content/uploads/2024/04/salones-fiestas-cdmx-cumplea%C2%A7os-esp.jpg?fit=479%2C254&ssl=1"
          />
        </div>
        <div className="row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
          <p className="text-3xl">
            ${salon.CostoHr} <span className="text-lg">por persona </span>
          </p>
          <h1 className="my-4">Información del Evento</h1>
          <Input
            type="number"
            label="Cantidad"
            variant="bordered"
            className="mb-4"
            value={personas}
            onChange={(e) => setPersonas(e.target.value)}
          />
          <TimeInput
            label="Inicio del evento"
            variant="bordered"
            className="mb-4"
          />
          <DatePicker
            label="Dia del evento"
            className="max-w-[284px] mb-4"
            variant="bordered"
          />
          <CheckboxGroup label="Adicionales" className="mb-4">
            <Checkbox>2</Checkbox>
          </CheckboxGroup>
          <RadioGroup label="Selecciona tu platillo" className="mb-4">
            <Radio value="cremaElote">Crema de Elote</Radio>
            <Radio value="spaghettiAlfredo">Spaghetti Alfredo</Radio>
          </RadioGroup>
          <Button color="primary" onPress={onOpen}>
            Reservar
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Confirmar la reserva
                  </ModalHeader>
                  <ModalBody>
                    <p>Nombre del salon: {salon.Nombre}</p>
                    <p>Cantidad de personas: {personas}</p>
                    <p>Nombre del salon: {salon.Nombre}</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div className="row-span-1 col-span-3 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900">
          <h1 className="text-4xl mb-4">{salon.Nombre}</h1>
          <p className="text-lg">{salon.Descripcion}</p>
          <p>Anfitrion: {salon.Anfitrion}</p>
        </div>
      </div>
    </>
  );
}
