window.addEventListener('load', function () {
	var vm = new Vue({
		el: '#app',
		router: appRouter,
		data: appData,
		methods: appMethods,
		mixins: appMixins,
		beforeMount: appBeforeMount,
		mounted: appMounted,
		beforeDestroy: appBeforeDestroy,
		destroyed: appDestroyed,
		router: appRouter
	});
});
