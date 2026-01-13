<template>
	<div :class="`${cardBgColor} p-6 rounded-lg shadow-md`">
		<h2 v-if="cardTitle !== ''" class="text-2xl font-bold">{{ cardTitle }}</h2>
		<p v-if="cardTitle !== ''" class="mt-2 mb-4">{{ cardDetails }}</p>
		<RouterLink
			v-if="cardTitle !== ''"
			:to="cardRoute"
			:class="`${cardBtnColor} rounded-lg bg-black text-white py-2 px-4 inline-block`"
			>{{ cardBtnDetails }}
		</RouterLink>

		<slot></slot>
	</div>
</template>

<script setup>
	import { defineProps } from 'vue';
	import { RouterLink } from 'vue-router';

	defineProps({
		cardTitle: {
			type: String,
			default: '',
		},
		cardDetails: {
			type: String,
			default: 'Card Details',
		},
		cardBtnDetails: {
			type: String,
			default: 'Card Button',
		},
		cardBgColor: {
			type: String,
			default: 'bg-gray-100',
		},
		cardBtnColor: {
			type: String,
			default: 'bg-black',
		},
		cardRoute: {
			type: String,
			default: '/',
		},
	});
</script>
