import {
  Button,
  Input,
  Progress,
  Textarea,
  useDisclosure,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormSalon() {
  const navigate = useNavigate();
  const [number, setNumber] = useState(1);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col gap-3 w-96">
        <h1 className="text-center text-4xl font-medium">Registra tu salon</h1>
        <Progress id="progressbar" value={34 * number} />

        {
          {
            1: <Form1 />,
            2: <Form2 />,
            3: <Form3 />,
          }[number]
        }

        <div className="flex flex-row gap-2">
          <Button
            color="primary"
            className="w-full"
            onClick={() =>
              number == 1 ? setNumber(number) : setNumber(number - 1)
            }
          >
            Anterior
          </Button>
          <Button
            color="primary"
            className="w-full"
            onClick={() =>
              number == 3 ? navigate(`/salones`) : setNumber(number + 1)
            }
          >
            {number == 3 ? "Finalizar" : "Siguiente"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function Form1() {
  const [nombre, setNombre] = useState("")
  return (
    <>
      <h1 className="text-center text-2xl font-medium">Información general</h1>
      <Input autoFocus label="Nombre del Salon" variant="bordered" value={nombre} onChange={e => setNombre(e.target.value)}/>
      <Textarea
        label="Descripcion"
        placeholder="Añade una descripción"
        variant="bordered"
      />
      <Input autoFocus label="Dirección" variant="bordered" />
    </>
  );
}
function Form2() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const Adicionales = [];

  return (
    <>
      <h1 className="text-center text-2xl font-medium">Precios</h1>
      <Input autoFocus type="number" label="Precio" variant="bordered" />
      <Button onPress={onOpen} color="primary">
        Agregar adicional
      </Button>
      <div></div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Agregar</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Nombre"
                  value={nombre}
                  variant="bordered"
                />
                <Input
                  label="Precio"
                  value={precio}
                  type="number"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Agregar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
function Form3() {
  return (
    <>
      <h1 className="text-center text-2xl font-medium">Mobiliario</h1>
    </>
  );
}
