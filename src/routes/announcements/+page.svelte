<script>
  export const prerender = true;

  let announcementTitle = '';
  let announcementDetails = '';

  function handleSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', { announcementTitle, announcementDetails });
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="announcementTitle">Announcement Title:</label>
    <input id="announcementTitle" type="text" bind:value={announcementTitle} required />
  </div>
  <div>
    <label for="announcementDetails">Announcement Details:</label>
    <textarea id="announcementDetails" bind:value={announcementDetails} required></textarea>
  </div>
  <button type="submit">Submit Announcement</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.5rem;
  }

  input, textarea {
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
