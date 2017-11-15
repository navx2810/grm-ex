<template lang="pug">
	.container
		.row
			.col-sm-8
				.card
					.card-block
						.flex.between.middle
							h2 Appointments
							div
								button.btn.btn-success +
						.card-block
							h4 Today
							.block
								p <strong>6:30pm</strong> Haircut with <a href="#">Fido</a> &mdash; <em>in 15 mins.</em>
			.col-sm-4
				.card
					.card-block
						.flex.center.middle
							h2 30
							small.ml-1 appointments today
						.flex.center.middle
							p <a href="#">Melissa</a>, <a href="#">Joan</a>, <a href="#">Zach</a> are in today.
						h3 Memos
						ul.list-unstyled
							li.mt-2 
								span We are running low on fucking shampoo. Please order more if you can!
								.text-right
									span <a href="#">comments </a>
									span.badge.badge-pill.badge-primary 5
							li.mt-2
								span We have off on Thanksgiving, don't make an appointment for that day please.
								.text-right
									span <a href="#">comments </a>
									span.badge.badge-pill.badge-success 2
</template>

<style lang="stylus">

body
	background #f9

.row 
	> div
		margin 15px 0

.block
	margin 0 20px

.ml-5
	margin-left 5px

.flex
	display flex
	&.between
		justify-content space-between
	&.middle
		align-items center
	&.center
		justify-content center

</style>

