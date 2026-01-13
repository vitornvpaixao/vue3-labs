<template>
	<div class="bg-white rounded-md shadow-md">
		<div class="p-4">
			<div class="mb-6">
				<h2 class="text-xs text-gray-400 mb-2">{{ job.type }}</h2>
				<h1 class="text-md text-black font-bold">{{ job.title }}</h1>
			</div>

			<div class="border-solid border-b-gray-500">
				<div>
					<p class="text-sm mb-4">{{ truncatedDescription }}</p>
					<button class="text-green-500 hover:text-green-600 mb-5" @click="toggleFullDescription">
						{{ showFullDescription ? 'Less' : 'More' }}
					</button>
				</div>
				<p class="text-sm mb-4 text-green-500">{{ job.salary }} / Year</p>
			</div>

			<div class="border border-b-gray-100 mb-4"></div>

			<div class="flex flex-col lg:flex-row justify-between mb-4">
				<div class="text-orange-700 mb-3 xs:mb-3 sm:mb-3 md:mb-3 lg:mb-0">
					<i class="pi pi-map-marker text-lg"></i>
					{{ job.location }}
				</div>

				<a
					href="#"
					class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm flex items-center justify-center"
					>Read More</a
				>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { defineProps, computed, ref } from 'vue';

	const props = defineProps({
		job: Object,
	});

	const showFullDescription = ref(false);

	const toggleFullDescription = () => {
		showFullDescription.value = !showFullDescription.value;
	};

	const truncatedDescription = computed(() => {
		let description = props.job.description;

		if (!showFullDescription.value) description = description.substring(0, 90) + '...';

		return description;
	});
</script>
