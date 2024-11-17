import { Button, DateInput, Input, Link, SelectItem, Select } from "@nextui-org/react";
import {CalendarDate} from "@internationalized/date";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [apmat, setApmat] = useState("")
    const [appat, setAppat] = useState("")
    const [birth, setBirth] = useState("")
    const [rol, setRol] = useState()
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const AdminContext = createContext(isPropietario)

    return(

    <div className="absolute inset-0 flex items-center justify-center">
    <div className="flex flex-col gap-3 w-96">
      <h1 className="text-center font-medium text-4xl">Registrarse</h1>
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
        value={appat}
        onChange={e => setAppat(e.target.value)}
      />
      <Input
        autoFocus
        label="Apellido Materno"
        variant="bordered"
        value={apmat}
        onChange={e => setApmat(e.target.value)}
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
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        label="Contraseña"
        type="password"
        variant="bordered"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Select
        label="Rol"
        placeholder="Selecciona un rol"
        variant="bordered"
        selectedKeys={rol}
        onChange={setRol()}
      >
        <SelectItem key={true}>Propietario</SelectItem>
        <SelectItem key={false}>Cliente</SelectItem>
      </Select>
      <Button color="primary" onClick={() => navigate(`/salones`)}>Registrarse</Button>
      <p>¿Ya tienes cuenta? <Link color="primary" onClick={() => navigate(`/`)}>Iniciar Sesion</Link></p>
    </div>
    </div>
    )
}