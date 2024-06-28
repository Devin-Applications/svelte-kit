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
  <div class="form-group">
    <label for="name">Name:</label>
    <input id="name" type="text" bind:value={name} required />
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input id="email" type="email" bind:value={email} required />
  </div>
  <div class="form-group">
    <label for="company">Company:</label>
    <input id="company" type="text" bind:value={company} required />
  </div>
  <div class="form-group">
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
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input {
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  input:hover {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  p {
    margin-top: 1rem;
    color: green;
    font-weight: bold;
    text-align: center;
  }
</style>
