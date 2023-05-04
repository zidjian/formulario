import { Button } from "@mui/material";

export function Formulario() {
    return (
        <form>
            <label htmlFor="">Nombre</label>
            <input type="text" />
            <label htmlFor="">Epellidos</label>
            <input type="text" />
            <label htmlFor="">Correo electronico</label>
            <input type="text" />
            <label htmlFor="">Promociones</label>
            <input type="checkbox" />
            <label htmlFor="">Novedades</label>
            <input type="checkbox" />
            <Button variant="contained">Registrarse</Button>
        </form>
    );
}