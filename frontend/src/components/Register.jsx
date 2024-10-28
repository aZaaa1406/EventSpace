import { Button, DateInput, Input, Link } from "@nextui-org/react";
import {CalendarDate} from "@internationalized/date";
import { useState } from "react";

export default function Register(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(

    <div className="flex flex-col gap-3 w-96">
      <h1 className="flex flex-col gap-1">Registrarse</h1>
      <Input
        autoFocus
        label="Nombre"
        variant="bordered"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Input
        autoFocus
        label="Apellido Paterno"
        variant="bordered"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Input
        autoFocus
        label="Apellido Materno"
        variant="bordered"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
        <DateInput 
          label="Cumpleaños"
          variant="bordered"
          placeholderValue={new CalendarDate(1995, 11, 6)} 
          className="text-left"
        />
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
      <Button color="primary">Registrarse</Button>
      <p>¿Ya tienes cuenta? <Link color="primary">Iniciar Sesion</Link></p>
    </div>
    )
}