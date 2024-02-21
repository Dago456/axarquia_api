import comunidadesRoutes from "./comunidadesRoutes";
import operariosRoutes from "./operariosRoutes";

export default function (app) {

  app.use("/comunidad", comunidadesRoutes);
  app.use("/operario", operariosRoutes);
}