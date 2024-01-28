import comunidadesRoutes from "./comunidadesRoutes";
import operariosRoutes from "./operariosRoutes";

export default function (app) {

  app.use("/Comunidad", comunidadesRoutes);
  app.use("/Operario", operariosRoutes);
}