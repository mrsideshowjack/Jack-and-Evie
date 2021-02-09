<template>
  <Layout>
    <h1>RSVP</h1>
    <p>If you received an invitation, please respond using the following form.</p>
    <form
      name="contact"
      netlify
    >
      <p>
        <label>Name <input
          type="text"
          name="name"
          required
        ></label>
      </p>
      <p>
        <label>Email <input
          type="email"
          name="email"
        ></label>
      </p>
      <p>
        <input
          id="yes"
          type="radio"
          name="RSVP"
          value="yes"
        >
        <label for="yes">I will attend</label><br>
        <input
          id="no"
          type="radio"
          name="RSVP"
          value="no"
        >
        <label for="no">I will not attend</label><br>
      </p>
      <p>
        <label>Message: <textarea name="message" /></label>
      </p>
      <p>
        <button type="submit">
          Send
        </button>
      </p>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'RSVP'
  }
}
</script>
