<template>
  <div>
    <b-row>
      <b-col md-12>
        <b-table
          :striped="striped"
          :bordered="bordered"
          :outlined="outlined"
          :small="small"
          :hover="hover"
          :dark="dark"
          :fixed="fixed"
          :foot-clone="footClone"
          :items="items"
          :fields="fields"
          sort-icon-left
        >
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <b-pagination
          size="md"
          :total-rows="100"
          v-model="currentPage"
          :per-page="10"
        >
        </b-pagination>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    currentPage: 1,
    fields: [
      { key: "id", label: "Id", sortable: true },
      { key: "nombre", label: "Nombre", sortable: false },
      { key: "caracteristicas", label: "Características", sortable: false },
      { key: "fecha", label: "Fecha de lanzamiento", sortable: true },
      { key: "email", label: "Correo del fabricante", sortable: false },
      { key: "pais", label: "Pais de origen", sortable: false },
      { key: "precio", label: "Precio", sortable: false },
      { key: "disponibles", label: "Und. disponibles", sortable: false },
      { key: "vendidos", label: "Und. vendidas", sortable: false },
      { key: "borrar", label: "", sortable: false },
    ],
    items: [
      { id: 40, nombre: "Dickerson", caracteristicas: "Macdonald" },
      { id: 21, nombre: "Larsen", caracteristicas: "Shaw" },
      { id: 89, nombre: "Geneva", caracteristicas: "Wilson" },
    ],
    striped: true,
    bordered: false,
    outlined: false,
    small: false,
    hover: false,
    dark: false,
    fixed: false,
    footClone: false,
  }),
  methods: {
    linkGen(pageNum) {
      return "#page/" + pageNum + "/foobar";
    },
  },
};
</script>
