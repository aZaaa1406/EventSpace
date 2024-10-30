import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";

export default function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(

    <div className="flex flex-col gap-3 w-96">
      <h1 className="flex flex-col gap-1">Iniciar sesion</h1>
      <Input
        autoFocus
        label="Email"
        variant="bordered"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Input
        label="Contraseña"
        type="password"
        variant="bordered"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className="flex py-2 px-1 justify-between">
        <Link color="primary" href="#" size="sm">
          ¿Olvidaste la contraseña?
        </Link>
      </div>
      <Button color="primary">Iniciar sesion</Button>
      <p>¿Aún no tienes cuenta? <Link color="primary">Registrarse</Link></p>
    </div>
    )
}