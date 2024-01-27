import productsRoutes from "./productsRoutes";

export default function (app) {

  app.use("/Comunidad", productsRoutes);
  
}