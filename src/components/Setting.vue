<template>
	<div>
		<Header></Header>
		<div class="container w-64 mx-auto mt-5">
			<div class="flex justify-between items-center">
				<label for="theme" class="text-xs text-gray-400 mt-1"
					>Theme:</label
				>
				<Toggle
					:value="themeValue(theme)"
					onText="Dark"
					offText="Light"
					name="theme"
					v-on:chnageEvent="toggleSwitchHandler"
				/>
			</div>

			<div class="flex justify-between items-center mt-5">
				<label for="theme" class="text-xs text-gray-400 mt-1"
					>File Sync:</label
				>
				<Toggle
					:value="fileSync"
					onText="True"
					offText="False"
					name="fileSync"
					v-on:chnageEvent="toggleSwitchHandler"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Header from './Header'
import Toggle from './ToggleSwitch'
import Store from 'electron-store'
const store = new Store()
export default {
	name: 'Setting',
	components: {
		Header,
		Toggle
	},
	created() {},
	data() {
		return {
			theme: store.get('theme'),
			fileSync: store.get('fileSync')
		}
	},
	methods: {
		toggleSwitchHandler(val) {
			switch (val.name) {
				case 'theme':
					store.set('theme', val.value ? 'light' : 'dark')
					break
				case 'fileSync':
					store.set('fileSync', val.value)
					break

				default:
					break
			}
		},
		themeValue(val) {
			if ((val = 'dark')) {
				return true
			} else {
				return false
			}
		}
	}
}
</script>
