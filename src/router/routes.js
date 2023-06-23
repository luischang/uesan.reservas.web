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
      { path: "seleccionarServicios", component: () => import("pages/SeleccionarServiciosAdicionales.vue") },
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

  {
    path: "/Mision&Vision",
    component: () => import("pages/Empresa.vue"),
  },

  {
    path: "/PubliComercial",
    component: () => import("pages/PublicidadComercial.vue"),
  },
  {
    path: "/SalaEventos",
    component: () => import("pages/SalaEventos.vue"),
  },
  {
    path: "/seleccionarServicios",
    component: () => import("pages/SeleccionarServiciosAdicionales.vue"),
  },
  {
    path: "/pagoReserva",
    component: () => import("pages/PagoReserva.vue"),
  },
  {
    path: "/crearOfertas",
    component: () => import("pages/CrearOfertas.vue"),
  }
];

export default routes;
