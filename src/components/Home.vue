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
					class="truncate mr-1 py-1  text-xs font-mono cursor-pointer"
				>
					{{ item }}
				</div>
			</div>
		</div>
		<!-- end of items -->

		<!-- empty message -->
		<div v-if="items.length == 0" class="">
			<p class="text-xs text-gray-600  text-center">
				<span class="italic">The Clipboard is empty! </span>
			</p>
		</div>
		<!-- end of empty message -->

		<Footer></Footer>
	</div>
</template>

<script>
const { clipboard } = require('electron')
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
	name: 'Home',
	data() {
		return {
			status: '',
			items: []
		}
	},
	components: {
		Header,
		Footer
	},
	created() {
		setInterval(this.checkClipboard, 500)
		this.checkStatus()
	},
	methods: {
		checkClipboard() {
			const text = clipboard.readText()
			if (text != '' && this.items[0] != text) {
				this.items.push(text)
				this.items.reverse()
				this.checkStatus('👻')
				this.count()
			}
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
			this.items.splice(index)
			this.checkStatus('😨')
			if (this.items.length === 0) {
				clipboard.writeText('')
				this.checkStatus('😴')
			}
			this.count()
		},
		// remove all item from items array
		removeAll() {
			this.items = []
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
		}
	}
}
</script>
