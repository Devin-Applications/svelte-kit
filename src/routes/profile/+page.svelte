<script>
  import VendorProfile from '../components/VendorProfile.svelte';

  // Mock data for testing
  const profileData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    company: 'Example Corp',
    phone: '123-456-7890'
  };
</script>

<VendorProfile
  name={profileData.name}
  email={profileData.email}
  company={profileData.company}
  phone={profileData.phone}
/>

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
