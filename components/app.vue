<template lang="pug">
	.container
		.row
			.col-sm-8
				.card
					.card-block
						ul.nav.justify-content-end
							li.nav-item
								a(href="#").nav-link.active Schedule
							li.nav-item
								a(href="#").nav-link Management
						appointments
			.col-sm-4
				.card
					.card-block
						sidebar
						
</template>

<style lang="stylus">
body {
	background: #f9;
}

.nav-link {
	border-bottom: 1px solid #fff;
	transition: all 0.45s;
}

.active {
	border-color: hsl(115 50 50);
	color: hsl(115 50 50);
}

.row {
	> div {
		margin: 15px 0;
	}
}

.block {
	margin: 0 20px;
}

.ml-5 {
	margin-left: 5px;
}

ul.nav {
	margin-bottom: 5px;
}

.flex {
	display: flex;

	&.between {
		justify-content: space-between;
	}

	&.middle {
		align-items: center;
	}

	&.center {
		justify-content: center;
	}
}
</style>

<script>
import appointments from "./appointments"
import sidebar from "./sidebar"

export default {
  components: { appointments, sidebar }
}
</script>


