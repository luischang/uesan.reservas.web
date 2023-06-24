const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("components/Inicio/IniDefault.vue"),
      },
      { path: "empresa", component: () => import("pages/Empresa.vue") },
      { path: "salaEventos", component: () => import("pages/SalaEventos.vue") },
      {
        path: "seleccionarServicios",
        component: () => import("pages/SeleccionarServiciosAdicionales.vue"),
      },
      { path: "galeria", component: () => import("pages/Galeria.vue") },
      {
        path: "politicaPrivacidad",
        component: () => import("pages/PoliticaPrivacidad.vue"),
      },
      {
        path: "publicidadComercial",
        component: () => import("pages/PublicidadComercial.vue"),
      },
      {
        path: "pagoReserva",
        component: () => import("pages/PagoReserva.vue"),
      },
      {
        path: "confirmacionPago",
        component: () => import("pages/ConfirmacionPago.vue"),
      },
      {
        path: "crearOfertas",
        component: () => import("pages/CrearOfertas.vue"),
      },
      {
        path: "reporteOfertas",
        component: () => import("pages/ReporteOfertas.vue"),
      },
      {
        path: "crearHabitacion",
        component: () => import("pages/CreateHabitacion.vue"),
      },
      {
        path: "seleHabitacion",
        component: () => import("pages/SelectHabitacion.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },

  {
    path: "/Login",
    component: () => import("components/auth/LoginForm.vue"),
  },
  {
    path: "/register",
    component: () => import("components/auth/RegisterForm.vue"),
  },
];

export default routes;
