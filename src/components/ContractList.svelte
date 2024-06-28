<script>
  // Mock data for testing
  let contracts = [
    { id: 1, vendor: 'Vendor A', startDate: '2023-01-01', endDate: '2023-12-31', status: 'Active' },
    { id: 2, vendor: 'Vendor B', startDate: '2023-02-01', endDate: '2023-11-30', status: 'Pending' },
    { id: 3, vendor: 'Vendor C', startDate: '2023-03-01', endDate: '2023-10-31', status: 'Expired' }
  ];

  function viewContract(id) {
    // Logic to view contract details
    console.log(`Viewing contract ${id}`);
  }

  function editContract(id) {
    // Logic to edit contract
    console.log(`Editing contract ${id}`);
  }

  function deleteContract(id) {
    // Logic to delete contract
    contracts = contracts.filter(contract => contract.id !== id);
    console.log(`Deleted contract ${id}`);
  }

  function createContract() {
    // Logic to create a new contract
    console.log('Creating new contract');
  }
</script>

<div class="contract-list">
  <h1>Contracts</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Vendor</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each contracts as contract}
        <tr>
          <td>{contract.id}</td>
          <td>{contract.vendor}</td>
          <td>{contract.startDate}</td>
          <td>{contract.endDate}</td>
          <td>{contract.status}</td>
          <td>
            <button on:click={() => viewContract(contract.id)}>View</button>
            <button on:click={() => editContract(contract.id)}>Edit</button>
            <button on:click={() => deleteContract(contract.id)}>Delete</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <button on:click={createContract}>Create New Contract</button>
</div>

<style>
  .contract-list {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
  }
  th {
    background-color: #f4f4f4;
  }
  button {
    margin: 5px;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>
