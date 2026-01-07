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
		<li v-for="(task, index) in tasks" :key="task">
			<span>
				{{ task }}
			</span>

			<button class="ml-4" @click="deleteTask(index)">
				X
			</button>
		</li>
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

	<div class="mt-4">
		<form @submit.prevent="addTask">
			<label for="newTask">Add Task</label>
			<input
				type="text"
				id="newTask"
				name="newTask"
				v-model="newTask"
			/>

			<button type="submit">Submit</button>
		</form>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue';

	const userName = ref('John Djoras');
	const userStatus = ref('pending');
	const tasks = ref(['Task One', 'Task Two', 'Task Three']);
	const link = ref('https://www.abola.pt');
	const newTask = ref('');

	const toggleBtnStatus = () => {
		if (userStatus.value === 'active') {
			userStatus.value = 'pending';
		} else if (userStatus.value === 'pending') {
			userStatus.value = 'inactive';
		} else {
			userStatus.value = 'active';
		}
	};

	const addTask = () => {
		if (newTask.value.trim() !== '') {
			tasks.value.push(newTask.value);
			newTask.value = '';
		}
	};

	const deleteTask = (index) => {
		tasks.value.splice(index, 1);
	};

	onMounted(async () => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/todos',
			);
			const data = await response.json();

			tasks.value = data.map((task) => task.title);
		} catch (error) {
			console.log('Error fetching tasks');
		}
	});
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
