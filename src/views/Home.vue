<template>
  <div>
    <div class="content">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="position-relative form-group">
                <input
                  name="search"
                  id="search"
                  type="text"
                  class="form-control"
                  v-model="buscar"
                />
              </div>
            </div>
            <div class="col-sm-2">
              <div class="position-relative form-group">
                <button
                  @click="$router.push({ name: 'Register' })"
                  class="btn btn-success"
                >
                  Agregar producto
                </button>
              </div>
            </div>
          </div>
          <div class="row">
            <table-products :products="products"></table-products
            ><!---->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableProducts from "@/layout/components/Table";
import datos from "@/datos";
export default {
  data: () => ({
    buscar: "",
    products: [],
  }),
  components: {
    TableProducts,
  },
  created() {
    this.products = datos.getData();
  },
};
</script>
