<script>
  export let name;
  export let email;
  export let company;
  export let phone;
</script>

<div class="profile">
  <h1>Profile</h1>
  <p><strong>Name:</strong> {name}</p>
  <p><strong>Email:</strong> {email}</p>
  <p><strong>Company:</strong> {company}</p>
  <p><strong>Phone:</strong> {phone}</p>
</div>

<style>
  .profile {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    max-width: 400px;
    margin: 0 auto;
  }
  .profile h1 {
    margin-bottom: 20px;
  }
  .profile p {
    margin: 10px 0;
  }
</style>
