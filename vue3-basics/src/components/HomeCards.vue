<template>
	<section class="py-4">
		<div class="container-xl lg:container m-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
				<Card>
					<h2 class="text-2xl font-bold">For Developers</h2>
					<p class="mt-2 mb-4">Browse our Vue jobs and start your carrer today</p>
					<a href="#" class="rounded-lg bg-black text-white py-2 px-4 inline-block">Browse jobs</a>
				</Card>
				<Card
					card-bg-color="bg-green-100"
					card-title="For Employers"
					card-details="List your job to find the perfect developer for the role"
					card-btn-details="Add Job"
					card-btn-color="bg-green-400"
				>
				</Card>
				<Card
					:card-bg-color="cardInfo.bgColor"
					:card-title="cardInfo.title"
					:card-details="cardInfo.details"
					:card-btn-details="cardInfo.btnDetails"
					:card-btn-color="cardInfo.btnColor"
				>
				</Card>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref, reactive } from 'vue';
	import Card from '@/components/Card.vue';

	const cardInfo = ref({
		title: 'For other Test',
		details: 'For other type of card creation. Justo for fun and for other types of card creation',
		bgColor: 'bg-blue-100',
		btnDetails: 'Add Test',
		btnColor: 'bg-blue-400',
	});

	const cardBtnChangeColor = () => {
		setTimeout(() => {
			cardInfo.value.btnColor = 'bg-red-400';
		}, 3000);
	};

	cardBtnChangeColor();
</script>
