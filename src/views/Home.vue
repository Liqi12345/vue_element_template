<template>
	<div class="home">
		<Header />
		<SideBar />
		<div class="content-box" :class="{'content-collapse':collapse}">
			<Tags />
			<div class="content">
				<transition name="move" mode="out-in">
					<keep-alive :include="tagsList">
						<router-view></router-view>
					</keep-alive>
				</transition>
			</div>
		</div>

	</div>
</template>

<script>
	import bus from '@/components/bus'
	import Header from '@/components/Header.vue'
	import SideBar from '@/components/SideBar.vue'
	import Tags from '@/components/Tags.vue'
	export default {
		name: 'Home',
		components: {
			Header,
			SideBar,
			Tags
		},
		data() {
			return {
				collapse: false,
				tagsList: []
			}
		},
		mounted() {

		},
		created() {
			bus.$on('collapse-content', msg => {
				this.collapse = msg
			})

			bus.$on('tags', msg => {
				let arr = [];
				for (let i = 0, len = msg.length; i < len; i++) {
					msg[i].name && arr.push(msg[i].name);
				}
				this.tagsList = arr;
			});
		}
	}
</script>
<style scope lang="scss">

</style>
