<template>
  <div>
    <div class="content">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <h5 class="card-title">Registro de producto</h5>
          <form class="" @submit.prevent="addProduct">
            <div class="form-row">
              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label for="name" class="">Nombre</label
                  ><input
                    name="name"
                    id="name"
                    placeholder="Nombre"
                    type="text"
                    class="form-control"
                    v-model="producto.nombre"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="position-relative form-group">
                  <label for="releaseDate" class="">Fecha de lanzamiento</label
                  ><datepicker
                    :language="es"
                    name="releaseDate"
                    id="releaseDate"
                    input-class="form-control"
                    :disabled-dates="disabledDates"
                    v-model="producto.fecha"
                  ></datepicker>
                </div>
              </div>
            </div>
            <div class="position-relative form-group">
              <label for="description" class="">Características</label
              ><textarea
                name="text"
                id="description"
                class="form-control"
                v-model="producto.caracteristicas"
              ></textarea>
            </div>
            <div class="form-row">
              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label for="email" class="">E-mail del fabricante</label
                  ><input
                    name="email"
                    id="email"
                    type="email"
                    class="form-control"
                    v-model="producto.email"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="country" class="">Pais de origen</label>
                  <select
                    name="country"
                    id="country"
                    class="form-control"
                    v-model="producto.pais"
                  >
                    <option disabled value="">Seleccione un elemento</option>
                    <option
                      v-for="opt in countries"
                      :value="opt.cioc"
                      :key="opt.cioc"
                    >
                      {{ opt.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="price" class="">Precio</label>
                  <input
                    ref="input"
                    v-model="precioFormatted"
                    v-currency="options"
                    class="form-control"
                  />
                  <!-- <p>Number value: {{ precioValue }}</p> -->
                </div>
              </div>
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="unitsAvailable" class=""
                    >Unidades disponibles</label
                  ><input
                    name="unitsAvailable"
                    id="unitsAvailable"
                    type="number"
                    class="form-control"
                    v-model="producto.disponibles"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="soldUnits" class="">Unidades vendidas</label
                  ><input
                    name="soldUnits"
                    id="soldUnits"
                    type="number"
                    class="form-control"
                    v-model="producto.vendidos"
                  />
                </div>
              </div>
            </div>
            <div class="position-relative row form-group">
              <!-- <label for="imgFile" class="col-sm-2 col-form-label">File</label> -->
              <div class="col-sm-6">
                <input
                  name="imgFile"
                  @change="previewImage($event)"
                  id="imgFile"
                  type="file"
                  accept="image/*"
                  class="form-control-file"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <img class="mh-125p" src="" alt="" />
            </div>
            <div class="row">
              <div class="col-sm-1">
                <div class="position-relative form-group">
                  <button class="btn btn-success">Guardar</button>
                </div>
              </div>
              <div class="col-sm-1">
                <div class="position-relative form-group">
                  <button class="btn btn-danger">Salir</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { es } from "vuejs-datepicker/dist/locale";
import { currencyFilter } from "@/filters";
import moment from "moment";
import { parse } from "vue-currency-input";
import api from "@/api";
import datos from "@/datos";
// import { storage } from "@/firebaseConfig";

// const ref = storage.ref();
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      es: es,
      countries: [],
      precioFormatted: "",
      imageData: null,
      imgUrl: "",
      producto: {
        nombre: "",
        fecha: "",
        caracteristicas: "",
        email: "",
        pais: "",
        precio: { monto: "", options: {} },
        disponibles: 0,
        vendidos: 0,
        img: "",
      },
    };
  },
  computed: {
    disabledDates: function () {
      return { to: new Date(moment().format("YYYY-MM-DD")) };
    },
    options() {
      return {
        distractionFree: true,
        valueAsInteger: true,
        autoDecimalMode: true,
        style: "currency",
        currency: "VES",
      };
    },
    precioValue() {
      return parse(this.precioFormatted, this.options);
    },
  },
  created() {
    api.getAllCountries().then((countries) => (this.countries = countries));
  },
  filters: {
    currency: (value) => currencyFilter(value),
  },
  methods: {
    addProduct() {
      this.producto.precio = {
        monto: this.precioFormatted,
        options: this.options,
      };
      this.producto.img = this.imageData.name;
      datos.addData(this.producto);
      console.log(this.producto);
      // this.$router.replace({
      //   name: "Home",
      //   // params: { id: resp.data[0].id },
      // });
    },
    previewImage(event) {
      // this.picture = null;
      this.imageData = event.target.files[0];
      // console.log(this.imageData);
    },
    imgUpload() {
      // const refImg = ref.child(`imagenes/${this.imageData.name}`);
      // const metaData = { contentType: "img/jpeg" };
      // refImg.put(this.imageData, metaData).catch((e) => console.error(e));
      // refImg.on(
      //   "state_changed",
      //   (error) => {
      //     console.log(error.message);
      //   },
      //   () => {
      //     refImg.snapshot.ref.getDownloadURL().then((url) => {
      //       this.picture = url;
      //     });
      //   }
      // );
    },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
