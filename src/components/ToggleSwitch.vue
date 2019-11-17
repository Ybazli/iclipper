<template>
	<div class="toggle">
		<div class="form-switch inline-block align-middle">
			<input
				v-bind:value="value"
				v-model="isToggleOn"
				v-on:change="toggle($event)"
				type="checkbox"
				:name="name"
				:id="name"
				class="form-switch-checkbox"
			/>
			<label class="form-switch-label" :for="name"></label>
		</div>
		<label class="text-xs text-gray-500 italic" :for="name">
			{{ `${isToggleOn ? onText : offText}` }}
		</label>
	</div>
</template>

<script>
export default {
	name: 'Toggle',
	mounted() {
		this.isToggleOn = this.value
	},
	props: ['value', 'onText', 'offText', 'name'],
	data() {
		return {
			isToggleOn: false
		}
	},
	methods: {
		toggle(event) {
			this.$emit('input', event.target.checked)
			this.$emit('chnageEvent', {
				name: this.name,
				value: this.isToggleOn
			})
		}
	}
}
</script>

<style lang="postcss">
/* CHECKBOX TOGGLE SWITCH */
.form-switch {
	@apply relative select-none w-12 mr-2 leading-normal;
}
.form-switch-checkbox {
	@apply hidden;
}
.form-switch-label {
	@apply block overflow-hidden cursor-pointer bg-white  rounded-full h-6  shadow-inner;
	transition: background-color 0.2s ease-in;
}
.form-switch-label:before {
	@apply absolute block bg-white inset-y-0 w-6 rounded-full -ml-1 shadow-inner;

	right: 50%;
	content: '';
	transition: all 0.2s ease-in;
}
.form-switch-checkbox:checked + .form-switch-label,
.form-switch-checkbox:checked + .form-switch-label:before {
}
.form-switch-checkbox:checked + .form-switch-label {
	@apply bg-purple-500 shadow-none;
}
.form-switch-checkbox:checked + .form-switch-label:before {
	@apply right-0;
}
</style>
