 <template>
  <div>
      <button @click="logout">logout</button>
      <span v-if="user !== null">{{user.nickname}}</span>
    <search-bar-admin v-on:sendKeyword="onSearch" v-on:clearSearch="onClearSearch"></search-bar-admin>
    <div v-if="errorMsg">error</div>
    <div v-if="products && products.length">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" v-if="ingredients">Ingredients</th>
            <th scope="col" v-if="isMultiWeight">Weights</th>
            <th scope="col" v-if="isMultiSize">Sizes</th>
            <th scope="col" v-if="isMultiPrice">Prices</th>
            <th scope="col" v-if="!isMultiWeight">Weight</th>
            <th scope="col" v-if="!isMultiPrice">Price</th>
            <th scope="col" v-if="ROO">ROO</th>
            <th scope="col" v-if="quantity">Quantity</th>
            <th scope="col" v-if="substanceAmount">Substance amount</th>
            <th scope="col" v-if="origin">Origin</th>
            <th scope="col" v-if="hot">Hot</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) of products" v-bind:key="index">
            <th scope="row">{{index}}</th>
            <td>{{product.title}}</td>
            <td>{{product.description}}</td>
            <td v-if="product.ingredients">
              <div v-for="(ingredient, index) of product.ingredients" :key="index">{{ingredient}}</div>
            </td>
            <td v-if="product.weights">
              <div v-for="(weight, index) of product.weights" :key="index">{{weight}} g</div>
            </td>
            <td v-if="product.weight">
              <div>{{product.weight}} g</div>
            </td>
            <td v-if="product.sizes">
              <div v-for="(size, index) of product.sizes" :key="index">{{size}} cm</div>
            </td>
            <td v-if="product.prices">
              <div
                isMultiPrice="true"
                v-for="(price, index) of product.prices"
                :key="index"
              >{{price}}$</div>
            </td>
            <td v-if="product.price">
              <div>{{product.price}}$</div>
            </td>
            <td v-if="product.ROO">
              <div>{{product.ROO}}</div>
            </td>
            <td v-if="product.quantity">
              <div>{{product.quantity}}</div>
            </td>
            <td v-if="product.substanceAmount">
              <div>{{product.substanceAmount}}</div>
            </td>
            <td v-if="product.origin">
              <div>{{product.origin}}</div>
            </td>
            <td v-if="product.hot">
              <span v-if="product.hot">yes</span>
              <span v-else>no</span>
            </td>
            <td :id="product._id">
              <button class="delete-btn" @click="deleteProduct">delete</button>
              <button data-toggle="modal" data-target="#updateModal" @click="getUpdateModal">update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="modal fade"
      id="updateModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Update product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-if="updateModal !== null">
            <form action>
              <div class="form-group">
                <label for="title">Title</label>
                <input class="form-control" id="title" placeholder="Enter title" v-model="updTitle" />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <input
                  class="form-control"
                  id="description"
                  placeholder="Enter description"
                  v-model="updDescription"
                />
              </div>
              <div class="form-group" v-if="ingredients">
                <label for="ingredients">Ingredients</label>
                <input
                  class="form-control"
                  id="ingredients"
                  placeholder="Enter ingredients"
                  v-model="updIngredients"
                />
              </div>
              <div class="form-group" v-if="isMultiWeight">
                <label for="weights">Weights</label>
                <input
                  class="form-control"
                  id="weights"
                  placeholder="Enter weights"
                  v-model="updWeights"
                />
              </div>
              <div class="form-group" v-if="!isMultiWeight">
                <label for="weight">Weight</label>
                <input
                  class="form-control"
                  id="weight"
                  placeholder="Enter weight"
                  v-model="updWeight"
                />
              </div>
              <div class="form-group" v-if="isMultiSize">
                <label for="sizes">Sizes</label>
                <input class="form-control" id="sizes" placeholder="Enter sizes" v-model="updSizes" />
              </div>
              <div class="form-group" v-if="isMultiPrice">
                <label for="prices">Prices</label>
                <input
                  class="form-control"
                  id="prices"
                  placeholder="Enter prices"
                  v-model="updPrices"
                />
              </div>
              <div class="form-group" v-if="!isMultiPrice">
                <label for="price">Price</label>
                <input class="form-control" id="price" placeholder="Enter price" v-model="updPrice" />
              </div>
              <div class="form-group" v-if="ROO">
                <label for="ROO">ROO</label>
                <input class="form-control" id="ROO" placeholder="Enter ROO" v-model="updROO" />
              </div>
              <div class="form-group" v-if="quantity">
                <label for="quantity">Quantity</label>
                <input
                  class="form-control"
                  id="quantity"
                  placeholder="Enter hot"
                  v-model="updQuantity"
                />
              </div>
              <div class="form-group" v-if="substanceAmount">
                <label for="substanceAmount">Substance amount</label>
                <input
                  class="form-control"
                  id="substanceAmount"
                  placeholder="Enter substance amount"
                  v-model="updSubstanceAmount"
                />
              </div>
              <div class="form-group" v-if="origin">
                <label for="origin">Origin</label>
                <input
                  class="form-control"
                  id="origin"
                  placeholder="Enter origin"
                  v-model="updOrigin"
                />
              </div>
              <div class="form-group" v-if="hot">
                <label for="hot">Hot</label>
                <input class="form-control" id="hot" placeholder="Enter hot" v-model="updHot" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary close"
              data-dismiss="modal"
              aria-label="Close"
              @click="updateProduct"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBarAdmin from "./SearchBarAdmin";

export default {
  name: "admin-products-list",
  components: {
    "search-bar-admin": SearchBarAdmin
  },
  data() {
    return {
      products: [],
      productName: "pills",
      deleteButtons: document.getElementsByClassName("delete-btn"),
      updateModalId: null,
      updateModal: null,
      updTitle: null,
      updDescription: null,
      updIngredients: null,
      updWeights: null,
      updSizes: null,
      updPrices: null,
      updHot: false,
      updWeight: null,
      updPrice: null,
      updOrigin: null,
      updQuantity: null,
      updSubstanceAmount: null,
      updROO: null,
      isMultiSize: false,
      isMultiPrice: false,
      isMultiWeight: false,
      keyword: null,
      errorMsg: false,
      ROO: null,
      quantity: null,
      origin: null,
      ingredients: null,
      hot: null,
      substanceAmount: null,
      user: null
    };
  },
  created() {
    if (localStorage.getItem("token") === null) {
        this.$router.push('/login')
    } else {
        this.getProduct();
    }
  },
  mounted() {
    axios.get(`http://192.168.0.164:5000/api/user`, { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.user = res.data.user
      })
  },
  methods: {
    getProduct() {
      axios
        .get(`http://192.168.0.164:5000/api/${this.productName}`)
        .then(res => {
          this.products = res.data;

          if (this.products[0].sizes) {
            this.isMultiSize = true;
            console.log("work");
          }

          if (this.products[0].prices) {
            this.isMultiPrice = true;
          }

          if (this.products[0].weights) {
            this.isMultiWeight = true;
          }

          if (this.products[0].ROO) {
            this.ROO = true;
          }

          if (this.products[0].quantity) {
            this.quantity = true;
          }

          if (this.products[0].origin) {
            this.origin = true;
          }

          if (this.products[0].ingredients) {
            this.ingredients = true;
          }
          if (this.products[0].hot) {
            this.hot = true;
          }
          if (this.products[0].substanceAmount) {
            this.substanceAmount = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteProduct(e) {
      axios
        .post(`http://192.168.0.164:5000/api/${this.productName}-delete`, {
          productId: e.target.parentElement.id
        })
        .then(res => {
          console.log(res);

          if (res.status === 200) {
            this.getProduct();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateProduct() {
      this.updateModal.title = this.updTitle;
      this.updateModal.description = this.updDescription;
      this.updateModal.ingredients = this.updIngredients;
      this.updateModal.weights = this.updWeights;
      this.updateModal.weight = this.updWeight;
      this.updateModal.sizes = this.updSizes;
      this.updateModal.prices = this.updPrices;
      this.updateModal.hot = this.updHot;
      this.updateModal.price = this.updPrice;
      this.updateModal.origin = this.updOrigin;
      this.updateModal.quantity = this.updQuantity;
      this.updateModal.substanceAmount = this.updSubstanceAmount;
      this.updateModal.ROO = this.updROO;

      axios.post(`http://192.168.0.164:5000/api/${this.productName}-update`, {
        productId: this.updateModal._id,
        updateObj: this.updateModal
      });
    },
    getUpdateModal(e) {
      this.updateModalId = e.target.parentElement.id;

      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i]._id === this.updateModalId) {
          this.updateModal = this.products[i];
        }
      }

      this.updTitle = this.updateModal.title;
      this.updDescription = this.updateModal.description;
      this.updIngredients = this.updateModal.ingredients;
      this.updWeights = this.updateModal.weights;
      this.updWeight = this.updateModal.weight;
      this.updSizes = this.updateModal.sizes;
      this.updPrices = this.updateModal.prices;
      this.updPrice = this.updateModal.price;
      this.updHot = this.updateModal.hot;
      this.updOrigin = this.updateModal.origin;
      this.updQuantity = this.updateModal.quantity;
      this.updSubstanceAmount = this.updateModal.substanceAmount;
      this.updROO = this.updateModal.ROO;
    },
    onSearch(keyword) {
      this.keyword = keyword;

      axios
        .post(`http://192.168.0.164:5000/api/${this.productName}-search`, {
          keyword: this.keyword
        })
        .then(res => {
          this.products = null;
          console.log(res.data);
          if (res.data[0] === "error") {
            this.errorMsg = true;
          } else {
            this.products = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onClearSearch() {
      this.getProduct();
      this.errorMsg = false;
    },
    logout() {
        localStorage.clear()
        this.$router.push('/login')
    }
  }
};
</script> 