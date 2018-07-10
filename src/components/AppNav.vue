<template>
  <nav class="navbar navbar-expand-sm navbar-light navbar-jw">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#appnav"
      aria-controls="appnav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="appnav">
      <div class="nav navbar-nav">
        <router-link
          to="home"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Home
        </router-link>
        <router-link
          to="product-catalog"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Product Catalog
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>