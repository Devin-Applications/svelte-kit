<script>
  let performanceMetric = '';
  let performanceDetails = '';

  function handleSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', { performanceMetric, performanceDetails });
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="performanceMetric">Performance Metric:</label>
    <input id="performanceMetric" type="text" bind:value={performanceMetric} required />
  </div>
  <div>
    <label for="performanceDetails">Performance Details:</label>
    <textarea id="performanceDetails" bind:value={performanceDetails} required></textarea>
  </div>
  <button type="submit">Submit Performance</button>
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
