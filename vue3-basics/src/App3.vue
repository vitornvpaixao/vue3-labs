<template>
	<h1>Vue Jobs - Web App</h1>

	<h2>{{ userName }}</h2>
	<p v-if="userStatus === 'active'">User is active</p>
	<p v-else-if="userStatus === 'pending'">
		User is pending
	</p>
	<p v-else="userStatus">User is inactive</p>

	<h3 class="mt-2">Tasks:</h3>
	<ul>
		<li v-for="task in tasks" :key="task">{{ task }}</li>
	</ul>

	<div class="mt-1">
		<a :href="link">Click for Sports News</a>
	</div>

	<div class="d-flex flex-column">
		<button v-on:click="toggleBtnStatus">
			Change Status
		</button>

		<button class="mt-2" @click="toggleBtnStatus">
			Change Status
		</button>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const userName = ref('John Djoras');
	const userStatus = ref('pending');
	const tasks = ref(['Task One', 'Task Two', 'Task Three']);
	const link = ref('https://www.abola.pt');

	const toggleBtnStatus = () => {
		if (userStatus.value === 'active') {
			userStatus.value = 'pending';
		} else if (userStatus.value === 'pending') {
			userStatus.value = 'inactive';
		} else {
			userStatus.value = 'active';
		}
	};
</script>

<style scoped>
	h1 {
		color: red;
	}

	h2 {
		color: white;
		font-weight: 700;
	}
</style>
