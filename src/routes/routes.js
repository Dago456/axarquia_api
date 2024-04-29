import comunidadesRoutes from "./comunidadesRoutes";
import operariosRoutes from "./operariosRoutes";
import registrarEntController from "./registroEntRoutes";
import registrarSalController from "./registroSalRoutes";


export default function (app) {

  app.use("/comunidad", comunidadesRoutes);
  app.use("/operario", operariosRoutes);
  app.use("/registroent", registrarEntController)
  app.use("/registroesal", registrarSalController)

}