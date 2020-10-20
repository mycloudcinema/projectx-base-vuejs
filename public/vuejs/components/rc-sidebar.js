Vue.component('rc-sidebar', {
	props: ['icon', 'title', 'page', 'collapsed'],
	data: function() {
		return {
			isCollapsed: this.collapsed
		};
	},
	template: `
		<nav id="sidebar" :class="{'active': isCollapsed}">
			<nav class="navbar navbar-dark shadow sticky-top bg-dark">
				<a class="navbar-brand" href="#"><img :src="icon"/> {{title}}</a>
			</nav>
			<div class="sidebar-header">
				<h3>{{page}}</h3>
			</div>
			<slot></slot>
		</nav>`,
	created: function() {
		EventBus.$on('rc-sidebar-toggle', () => {
			this.isCollapsed = !this.isCollapsed;
		});
    }
})
