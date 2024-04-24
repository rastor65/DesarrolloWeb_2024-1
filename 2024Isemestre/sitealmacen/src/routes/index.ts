import { ClienteRoutes } from './cliente';
import { VentaRoutes } from  './venta';
import { PrpductosRoutes } from  './producto'
import { Tipo_productoRoutes } from  "./tipo_productos";
import { Produc_VentasRoutes } from './produc_ventas';

export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public VentaRoutes: VentaRoutes = new VentaRoutes();
    public PrpductosRoutes: PrpductosRoutes = new PrpductosRoutes();
    public Produc_VentasRoutes: Produc_VentasRoutes = new Produc_VentasRoutes();
    public Tipo_productoRoutes: Tipo_productoRoutes = new Tipo_productoRoutes();
}
