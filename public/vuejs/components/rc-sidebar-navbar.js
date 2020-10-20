Vue.component('rc-sidebar-navbar', {
	props: ['icon', 'title', 'collapsed'],
	data: function() {
		return {
			isCollapsed: this.collapsed
		};
	},
	beforeMount:  function() {
		let screenWidth = screen.width;
		if (screenWidth <= 768){
			this.isCollapsed = true;
		}
	},
 	template: `
		<nav class="navbar navbar-expand-lg navbar-light shadow sticky-top bg-light" :class="{'active': isCollapsed}" style="margin: -20px -20px 20px -20px;">
			<div class="container-fluid">
				<button type="button" id="sidebarCollapse" class="navbar-btn" :class="{'active': isCollapsed}" v-on:click="toggleSidebar">
					<span></span>
					<span></span>
					<span></span>
				</button>
				<button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="$dict{toggle_navigation}">
					<i class="fas fa-align-justify"></i>
				</button>
				<a class="navbar-brand" href="#"><img :src="icon"/> {{title}}</a>
				<slot></slot>
			</div>
		</nav>`,
	methods: {
		toggleSidebar: function() {
			EventBus.$emit('rc-sidebar-toggle');
			this.isCollapsed = !this.isCollapsed;
		}
	}
})
