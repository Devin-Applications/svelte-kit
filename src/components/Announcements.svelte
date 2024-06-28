<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  let announcements = writable([]);
  let newAnnouncement = {
    title: '',
    content: ''
  };

  const addAnnouncement = () => {
    announcements.update(current => [...current, { ...newAnnouncement }]);
    newAnnouncement.title = '';
    newAnnouncement.content = '';
  };
</script>

<main>
  <h1>Announcements</h1>

  <form on:submit|preventDefault={addAnnouncement}>
    <label for="title">Title:</label>
    <input type="text" id="title" bind:value={newAnnouncement.title} required />

    <label for="content">Content:</label>
    <textarea id="content" bind:value={newAnnouncement.content} required></textarea>

    <button type="submit">Post Announcement</button>
  </form>

  <section>
    {#each $announcements as announcement}
      <article>
        <h2>{announcement.title}</h2>
        <p>{announcement.content}</p>
      </article>
    {/each}
  </section>
</main>

<style>
  main {
    padding: 1rem;
  }

  form {
    margin-bottom: 2rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input, textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  section {
    margin-top: 2rem;
  }

  article {
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  h2 {
    margin-top: 0;
  }
</style>
