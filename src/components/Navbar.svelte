<script>
  import { page } from '$app/stores';

  let activeRoute = '';

  $: if (page && page.url) {
    activeRoute = page.url.pathname;
  }
</script>

<nav>
  <ul>
    <li class={activeRoute === '/' ? 'active' : ''}><a href="/">Home</a></li>
    <li class={activeRoute === '/register' ? 'active' : ''}><a href="/register">Register</a></li>
    <li class={activeRoute === '/profile' ? 'active' : ''}><a href="/profile">Profile</a></li>
    <li class={activeRoute === '/contracts' ? 'active' : ''}><a href="/contracts">Contracts</a></li>
    <li class={activeRoute === '/performance' ? 'active' : ''}><a href="/performance">Performance</a></li>
    <li class={activeRoute === '/invoices' ? 'active' : ''}><a href="/invoices">Invoices</a></li>
    <li class={activeRoute === '/announcements' ? 'active' : ''}><a href="/announcements">Announcements</a></li>
  </ul>
</nav>

<style>
  nav {
    background-color: #333;
    padding: 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;
  }

  .active a {
    background-color: #555;
  }
</style>
