import comunidadesRoutes from "./comunidadesRoutes";
import operariosRoutes from "./operariosRoutes";
import registroEntRoutes from "./registroEntRoutes";
import registroSalRoutes from "./registroSalRoutes";


export default function (app) {

  app.use("/comunidad", comunidadesRoutes);
  app.use("/operario", operariosRoutes);
  app.use("/registroent", registroEntRoutes)
  app.use("/registrosal", registroSalRoutes)
  app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
  });
}