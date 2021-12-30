<template>
  <div>
    <div class="content">
      <div class="main-card mb-3 card">
        <div class="card-body">
          <h5 class="card-title">Registro de producto</h5>
          <form class="">
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
                    v-model="selected"
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
                  <label for="price" class="">Precio</label
                  ><input
                    name="price"
                    id="price"
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="unitsAvailable" class=""
                    >Unidades disponibles</label
                  ><input
                    name="unitsAvailable"
                    id="unitsAvailable"
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="soldUnits" class="">Unidades vendidas</label
                  ><input
                    name="soldUnits"
                    id="soldUnits"
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="position-relative row form-group">
              <label for="exampleFile" class="col-sm-2 col-form-label"
                >File</label
              >
              <div class="col-sm-10">
                <input
                  name="file"
                  id="exampleFile"
                  type="file"
                  class="form-control-file"
                />
              </div>
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
import moment from "moment";
import api from "@/api";
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      es: es,
      countries: [],
      selected: "",
    };
  },
  computed: {
    disabledDates: function () {
      return { to: new Date(moment().format("YYYY-MM-DD")) };
    },
  },
  created() {
    this.isLoading = true;
    api.getAllCountries().then((countries) => (this.countries = countries));
  },
};
</script>

