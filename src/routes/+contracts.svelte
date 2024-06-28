<script>
  let contractName = '';
  let contractDetails = '';

  function handleSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', { contractName, contractDetails });
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="contractName">Contract Name:</label>
    <input id="contractName" type="text" bind:value={contractName} required />
  </div>
  <div>
    <label for="contractDetails">Contract Details:</label>
    <textarea id="contractDetails" bind:value={contractDetails} required></textarea>
  </div>
  <button type="submit">Submit Contract</button>
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
