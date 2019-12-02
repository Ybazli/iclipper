<template>
    <div id="home">
        <Header></Header>

        <!-- items is here -->

        <div class="overflod-y-scroll mt-4 content-center">
            <div
                v-for="(item, index) in getItems"
                :key="index"
                @click="copy(index)"
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
        <div v-if="this.getItems.length == 0" class>
            <p class="text-xs text-gray-600 text-center">
                <span class="italic">The Clipboard is empty!</span>
            </p>
        </div>
        <!-- end of empty message -->

        <Footer
            :status="status"
            :length="length"
            v-on:removeAllEvent="cleanAll"
        ></Footer>
    </div>
</template>

<script>
const { clipboard } = require('electron')
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Home',
    data() {
        return {}
    },
    components: {
        Header,
        Footer
    },
    computed: {
        ...mapGetters(['getItems']),
        length() {
            return this.getItems.length
        },
        status() {
            return this.getItems.length == 0 ? '😴' : '👻'
        }
    },
    created() {
        setInterval(this.checkClipboard, 500)
    },
    methods: {
        ...mapActions(['fetchToItems', 'removeItem', 'removeAll']),
        checkClipboard() {
            const text = clipboard.readText()
            if (text != '' && this.getItems[0] != text) {
                this.fetchToItems(text)
                this.getItems.reverse()
            }
        },
        copy(index) {
            if (this.getItems.length != 0) {
                const item = this.getItems[index]
                this.removeItem(index)
                this.fetchToItems(item)
                clipboard.writeText(item)
            }
        },
        cleanAll() {
            this.removeAll()
            clipboard.writeText('')
        }
    }
}
</script>
