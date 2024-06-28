<script>
  let invoiceNumber = '';
  let invoiceDetails = '';

  function handleSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', { invoiceNumber, invoiceDetails });
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="invoiceNumber">Invoice Number:</label>
    <input id="invoiceNumber" type="text" bind:value={invoiceNumber} required />
  </div>
  <div>
    <label for="invoiceDetails">Invoice Details:</label>
    <textarea id="invoiceDetails" bind:value={invoiceDetails} required></textarea>
  </div>
  <button type="submit">Submit Invoice</button>
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
