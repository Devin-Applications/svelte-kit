<script>
  let name = '';
  let email = '';
  let company = '';
  let phone = '';
  let successMessage = '';

  function handleSubmit() {
    // Basic client-side validation
    if (!name || !email || !company || !phone) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', { name, email, company, phone });
    successMessage = 'Vendor registered successfully!';
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="name">Name:</label>
    <input id="name" type="text" bind:value={name} required />
  </div>
  <div>
    <label for="email">Email:</label>
    <input id="email" type="email" bind:value={email} required />
  </div>
  <div>
    <label for="company">Company:</label>
    <input id="company" type="text" bind:value={company} required />
  </div>
  <div>
    <label for="phone">Phone:</label>
    <input id="phone" type="tel" bind:value={phone} required />
  </div>
  <button type="submit">Register</button>
</form>

{#if successMessage}
  <p>{successMessage}</p>
{/if}

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

  input {
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

  p {
    margin-top: 1rem;
    color: green;
    font-weight: bold;
  }
</style>
