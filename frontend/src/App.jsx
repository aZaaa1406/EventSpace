import { Button, Input, Link } from "@nextui-org/react";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col gap-3 w-96">
      <h1 className="flex flex-col gap-1">Iniciar sesion</h1>
      <Input
        autoFocus
        label="Email"
        variant="bordered"
      />
      <Input
        label="Contraseña"
        type="password"
        variant="bordered"
      />
      <div className="flex py-2 px-1 justify-between">
        <Link color="primary" href="#" size="sm">
          ¿Olvidaste la contraseña?
        </Link>
      </div>
      <Button color="primary">Iniciar sesion</Button>
      <p>¿Ya tienes cuenta? <Link color="primary" href="#">Registrarse</Link></p>
    </div>
  );
}

export default App;
