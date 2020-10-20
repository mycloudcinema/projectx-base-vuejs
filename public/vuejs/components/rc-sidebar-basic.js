Vue.component('rc-sidebar-basic', {
	props: ['collapsed'],
	data: function() {
		return {
			isCollapsed: this.collapsed
		};
	},
	template: `
		<nav id="sidebar" :class="{'active': isCollapsed}">
			<slot></slot>
		</nav>`,
	created: function() {
		EventBus.$on('rc-sidebar-toggle', () => {
			this.isCollapsed = !this.isCollapsed;
		});
    }

})
