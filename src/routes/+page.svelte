<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Vendor Management System</title>
	<meta name="description" content="Vendor Management System Application" />
</svelte:head>

<section>
	<h1>Welcome to the Vendor Management System</h1>
	<p>This application allows you to manage vendor registrations, profiles, contracts, performance, invoices, and announcements.</p>
	<p>Use the navigation bar to access different sections of the application.</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		padding: 2rem;
		text-align: center;
	}

	h1 {
		width: 100%;
		margin-bottom: 1rem;
	}

	p {
		margin-bottom: 1rem;
	}
</style>
