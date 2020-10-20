function toggleSidebar(event) {
	console.log(`Toggling sidebar`);
	$('#sidebar').toggleClass('active');
	$(this).toggleClass('active');
}
appMethods.toggleSidebar = toggleSidebar;
