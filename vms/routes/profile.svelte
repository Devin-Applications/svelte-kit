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
