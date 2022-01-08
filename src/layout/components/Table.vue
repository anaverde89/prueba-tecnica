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
          :items="products"
          :fields="fields"
          sort-icon-left
        >
          <template #cell(precio)="data">
            {{ data.value.monto }}
          </template>
          <template #cell(borrar)="row">
            <b-button size="sm" @click="deleteItem(row.item.id)" class="mr-2">
              Borrar
            </b-button>
          </template>
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
    items: [],
    striped: true,
    bordered: false,
    outlined: false,
    small: false,
    hover: false,
    dark: false,
    fixed: false,
    footClone: false,
  }),
  props: {
    products: {
      type: Array,
      default: () => [], //Funcion que retorne un array cuando es de este tipo
    },
  },
  methods: {
    linkGen(pageNum) {
      return "#page/" + pageNum + "/foobar";
    },
    deleteItem(id) {
      console.log(id);
    },
  },
  created() {
    // this.items = [];
    // //eslint-disable-next-line
    // // debugger;
    // this.products.forEach((item) => {
    //   this.items.push({
    //     id: item.id,
    //     nombre: item.nombre,
    //     caracteristicas: item.caracteristicas,
    //     fecha: item.fecha,
    //     email: item.email,
    //     pais: item.pais,
    //     precio: item.precio.monto,
    //     disponibles: item.disponibles,
    //     vendidos: item.vendidos,
    //     borrar: "",
    //   });
    // });
    // console.log(this.items);
  },
};
</script>
