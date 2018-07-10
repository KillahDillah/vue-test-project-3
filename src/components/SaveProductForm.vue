<!-- src/components/SaveProductForm.vue  -->
<template>
  <form>
    <div class="form-group">
      <label for="productName">Product name</label>
      <input type="text" v-model="product.name" class="form-control" id="productName" maxlength="32" placeholder="Enter product name">
    </div>
    <div class="form-group">
      <label for="productDescription">Product description <small class="text-muted">(optional)</small></label>
      <textarea class="form-control" v-model="product.description" id="productDescription" rows="3" maxlength="128" placeholder="Enter description"></textarea>
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" v-model="product.price" class="form-control" id="price" placeholder="Enter Price" number>
    </div>
    <button type="submit" v-on:click.prevent="onSubmit" class="btn btn-primary">{{product.id ? 'Update' : 'Add'}}</button>
    <!-- <button type="submit" v-on:click.prevent="onSubmit" v-else class="btn btn-primary">Add product</button> -->
    <button v-if="this.product.id" v-on:click.prevent="cancel" class="btn btn-primary">Cancel</button>
  </form>
</template>

<script>

export default {
  props: ['product'], 
  data() {
    return {
      formErrors: {}
    }
  },
  watch: {
    'product.id' () {
      this.formErrors = {}
    }
  },
  methods: {
    onSubmit () {
      if (this.validate()) {
        this.$emit('submit', this.product)
      }
    },
    cancel () {
      this.formErrors = {}
      this.$emit('cancel')
    },
    validate () {
      const errors = {}
      if (!this.product.name) {
        errors.name = 'Name is required'
      }
      if (!this.product.price) {
        errors.price = 'Price is required'
      }
      this.formErrors = errors
      return Object.keys(errors).length === 0
    },
  }
}
</script>
