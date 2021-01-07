<template>
	<div class="sidebar">
		<el-menu 
			class="sidebar-el-menu" 
			:collapse="collapse"
			background-color="#324157"
			text-color="#bfcbd9"
			active-text-color="#20a0ff"
			unique-opened
			router
		>
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-submenu :index="item.index">
						<template slot="title">
							<i :class="item.icon"></i>
							<span>{{item.title}}</span>
						</template>
						<template v-for="subItem in item.subs">
							<el-submenu v-if="subItem.subs">
								<template slot="title">{{subItem.title}}</template>
								<el-menu-item
								 v-for="(threeItem,i) in subItem.subs"
								 :index="threeItem.index"
								 >
								 {{threeItem.title}}
								 </el-menu-item>
							</el-submenu>
							<el-menu-item v-else>
								<i :class="subItem.icon"></i>
								<span slot="title">{{subItem.title}}</span>
							</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index">
						<i :class="item.icon"></i>
						<span slot="title">{{item.title}}</span>
					</el-menu-item>
				</template>
			</template>
			
			
		</el-menu>


	</div>
</template>

<script>
	import bus from '@/components/bus.js'
	export default {
		data() {
			return {
				collapse:false,
				items: [
					{
						icon: 'el-icon-s-platform',
						index: 'websiteManage',
						title: '网站管理'
					},
					{
						icon: 'el-icon-s-custom',
						index: 'personManage',
						title: '人员管理'
					},
					{
						icon: 'el-icon-s-data',
						index: 'watchRecord',
						title: '监测记录管理'
					},
					{
						icon: 'el-icon-message-solid',
						index: 'systemNotice',
						title: '系统通知管理',
						// subs: [
						// 	{
						// 		index: 'form',
						// 		title: '基本表单'
						// 	},
						// 	{
						// 		index: 'upload',
						// 		title: '文件上传'
						// 	},
						// 	{
						// 		index: '3-2',
						// 		title: '三级菜单',
						// 		subs: [
						// 			{
						// 				index: 'editor',
						// 				title: '富文本编辑器'
						// 			},
						// 			{
						// 				index: 'markdown',
						// 				title: 'markdown编辑器'
						// 			}
						// 		]
						// 	}
						// ]
					}
				]
			}
		},
		methods: {
			
		},
		mounted(){
			bus.$on('collapse',msg=>{
				this.collapse = msg
				bus.$emit('collapse-content',msg)
			})
		}
	}
</script>

<style scoped>
	.sidebar {
		display: block;
		position: absolute;
		left: 0;
		top: 70px;
		bottom: 0;
		overflow-y: scroll;
	}

	.sidebar::-webkit-scrollbar {
		width: 0;
	}

	.sidebar-el-menu:not(.el-menu--collapse) {
		width: 250px;
	}

	.sidebar>ul {
		height: 100%;
	}
	.el-menu-item{
		font-size: 16px;
	}
	.el-menu-item [class^=el-icon-]{
		font-size: 22px;
		margin-right: 10px;
	}
</style>
