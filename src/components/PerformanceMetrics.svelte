<script>
  // Mock data for performance metrics
  const performanceData = [
    { metric: 'Service Quality', value: 'Excellent' },
    { metric: 'Delivery Time', value: 'On Time' },
    { metric: 'Customer Feedback', value: 'Positive' },
    { metric: 'Compliance', value: '100%' }
  ];
</script>

<style>
  .performance-metrics {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .metric {
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    max-width: 400px;
    text-align: center;
  }

  .metric-title {
    font-weight: bold;
  }
</style>

<div class="performance-metrics">
  {#each performanceData as { metric, value }}
    <div class="metric">
      <div class="metric-title">{metric}</div>
      <div>{value}</div>
    </div>
  {/each}
</div>
