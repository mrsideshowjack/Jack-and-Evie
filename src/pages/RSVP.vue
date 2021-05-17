<template>
  <Layout>
    <h1>RSVP</h1>
    <section>
      <p>If you received an invitation, please respond using the following form.</p>
      <!-- <form
        name="Jack-and-Evie-RSVP"
        method="POST"
        netlify
        data-netlify="true"
        enctype="application/x-www-form-urlencoded"
        action="/thanks" 
        data-netlify-honeypot="bot-field" 
        @submit.prevent="handleSubmit" 
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
      </form> -->
      <form
        name="Jack-and-Evie-RSVP"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input
          type="hidden"
          name="form-name"
          value="Jack-and-Evie-RSVP"
        >
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field">
          </label>
        </p>
        <div class="sender-info">
          <div>
            <label
              for="name"
              class="label"
            >Your name</label>
            <input
              v-model="formData.name"
              type="text"
              name="name"
            >
          </div>
          <div>
            <label for="email">Your email</label>
            <input
              v-model="formData.email"
              type="email"
              name="email"
            >
          </div>
        </div>

        <div class="message-wrapper">
          <label for="message">Message</label>
          <textarea
            v-model="formData.message"
            name="message"
          />
        </div>

        <button type="submit">
          Submit form
        </button>
      </form>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'RSVP'
  },
  data() {
  return {
    formData: {},
  }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/thanks'))
      .catch(error => alert(error))
    }
  }
}
</script>
