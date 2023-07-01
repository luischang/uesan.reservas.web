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
        component: () =>
          import("components/Reserva/SeleccionarServiciosAdicionales.vue"),
      },
      {
        path: "seleccionarSalaEvento",
        component: () => import("components/Reserva/SeleccionarSalaEvento.vue"),
      },
      {
        path: "ofertaGanadora",
        component: () => import("components/Reserva/OfertaSelecionada.vue"),
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
        component: () => import("components/Reserva/SelectHabitacion.vue"),
      },
      {
        path: "reservasOrder",
        component: () => import("components/Reserva/ReservaOrder.vue"),
      },
      {
        path: "mostrarServicios",
        component: () => import("pages/MostrarServicios.vue"),
      },
      {
        path: "mostrarCliente",
        component: () => import("components/Cliente/MostrarCliente.vue"),
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
    path: "/das",
    component: () => import("components/Reserva/ReservaOrder.vue"),
  },
  {
    path: "/mostrarServicios",
    component: () => import("pages/MostrarServicios.vue"),
  },
  {
    path: "/mostrarSalaEventos",
    component: () => import("pages/MostrarSalaEventos.vue"),
  },
];

export default routes;
