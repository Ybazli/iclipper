<template>
	<div id="home">
		<Header></Header>

		<!-- items is here -->

		<div class="overflod-y-scroll mt-4 content-center">
			<div
				v-for="(item, index) in items"
				:key="index"
				@click="doCopy(index)"
				class="flex content-center mx-1 mt-2 pb-2 mx-2 text-gray-500 border-b border-gray-700 hover:text-white"
			>
				<div class="mr-3 text-xs">
					<button
						class="text-red-400 px-1 py-1 hover:bg-red-400 hover:text-white rounded"
						@click="removeItem(index)"
					>
						✕
					</button>
				</div>
				<div
					class="truncate mr-1 py-1 text-xs font-mono cursor-pointer"
				>
					{{ item }}
				</div>
			</div>
		</div>
		<!-- end of items -->

		<!-- empty message -->
		<div v-if="items.length == 0" class>
			<p class="text-xs text-gray-600 text-center">
				<span class="italic">The Clipboard is empty!</span>
			</p>
		</div>
		<!-- end of empty message -->

		<Footer
			:status="status"
			:length="length"
			v-on:removeAllEvent="removeAll"
		></Footer>
	</div>
</template>

<script>
const { clipboard } = require('electron')
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import store from '../store'
export default {
	name: 'Home',
	data() {
		return {
			status: '',
			length: 0,
			items: []
		}
	},
	components: {
		Header,
		Footer
	},
	created() {
		console.log('here')
		// this.getItems()
		setInterval(this.checkClipboard, 500)
		this.checkStatus()
	},
	methods: {
		checkClipboard() {
			const text = clipboard.readText()
			this.items = this.getItems()
			if (text != '' && this.items[0] != text) {
				this.items.push(text)
				this.items.reverse()
				this.checkStatus('👻')
				this.count()
			}
			// this.items = this.getItems()
		},
		doCopy(index) {
			if (this.items.length != 0) {
				let item = this.items[index]
				this.items.splice(index)
				clipboard.writeText(item)
				this.checkStatus('👻')
				this.count()
			}
		},

		removeItem(index) {
			store.dispatch('removeItem', index)
			this.getItems()
			this.checkStatus('😨')
			if (this.items.length === 0) {
				clipboard.writeText('')
				this.checkStatus('😴')
			}
			this.count()
		},
		// remove all item from items array
		removeAll() {
			store.dispatch('removeAll')
			this.getItems()
			clipboard.writeText('')
			this.checkStatus('😴')
			this.count()
		},
		// count the items item and put in the length
		count() {
			this.length = this.items.length
		},
		checkStatus(str = '') {
			this.status = str
		},
		getItems() {
			// console.log(store.getters.getItems)

			if (store.getters.getItems.length == 0) {
				this.items = []
			} else {
				this.items = store.getters.getItems
			}
			// this.items = this.$store.getters.getItems
		}
	}
}
</script>
