<template>
	<!-- fixed footer and buttons -->
	<div
		class="flex justify-between px-4 fixed inset-x-0 bottom-0 py-2 bg-gray-700"
	>
		<div class="font-light italic text-xs text-gray-500">
			<span
				class="bg-gray-300 mr-1 rounded-full px-2 text-gray-900 font-semibold"
				>{{ length }}</span
			>
			Items
		</div>

		<div class="text-sm">{{ status }}</div>

		<div class="font-light text-xs text-gray-500">
			<button
				@click="removeAllEvent"
				class="italic text-xs bg-gray-800 rounded-full px-2 text-white hover:bg-gray-900 focus:outline-none"
				:class="this.length == 0 ? 'clear_btn_disbaled' : ''"
				:disabled="this.length == 0"
			>
				Clear All
			</button>
			<div class="text-xs text-gray-100">
				<router-link to="/setting">Setting</router-link>
			</div>
		</div>
	</div>
	<!-- end of footer -->
</template>

<script>
export default {
	name: 'Footer',
	props: ['status', 'length'],
	data() {
		return {}
	},
	methods: {
		removeAllEvent() {
			this.$emit('removeAllEvent')
		}
	}
}
</script>
