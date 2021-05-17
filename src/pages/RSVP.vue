<template>
  <Layout>
    <h1>RSVP</h1>
    <p>If you received an invitation, please respond using the following form. We promise not to use your data for anything other than wedding planning.</p>
    <section class="form-area">
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
        <div class="form-field">
          <label
            for="name"
            class="label"
          >Your name*</label>
          <input
            v-model="formData.name"
            type="text"
            name="name"
            placeholder="John Doe"
            required
          >
        </div>
        <div class="form-field">
          <label for="email">Your email</label>
          <input
            v-model="formData.email"
            type="email"
            name="email"
            placeholder="John.Doe@example.com"
          >
        </div>
        <div class="form-field">
          <span>RSVP*</span>
          <input
            id="yes"
            v-model="formData.RSVP_TRUE"
            type="radio"
            name="RSVP"
          >
          <label for="yes">I will attend</label>
          <input
            id="no"
            v-model="formData.RSVP_FALSE"
            type="radio"
            name="RSVP"
          >
          <label for="no">I will not be attending</label>
        </div>
        <div class="form-field">
          <input
            id="plus1"
            v-model="formData.plus1"
            type="checkbox"
            name="plus1"
          >
          <label for="plus1"> I will be bringing a +1?</label>
        </div>
        <div
          v-if="formData.plus1"
          class="form-field"
        >
          <label
            for="plus1name"
            class="label"
          >If so, please tell us who</label>
          <input
            v-model="formData.plus1name"
            type="text"
            name="plus1name"
            placeholder="Jane Doe"
          >
        </div>
        <div class="form-field">
          <input
            id="veggie"
            v-model="formData.veggie"
            type="checkbox"
            name="veggie"
          >
          <label for="veggie"> <span v-if="!formData.plus1">I</span><span v-else>One of us</span> will be having the veggie option.</label>
        </div>
        <div class="form-field">
          <label
            for="song"
            class="label"
          >Request a song</label>
          <input
            v-model="formData.song"
            type="text"
            name="song"
            placeholder="Never gonna give you up"
          >
        </div>
        <div class="form-field">
          <label for="message">Include a message</label>
          <input
            v-model="formData.message"
            type="text"
            name="message"
            placeholder="Looking forward to it!"
          >
        </div>
        <button
          type="submit"
          class="btn"
        >
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
      fetch('/RSVP', {
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
<style scoped>
.form-area{
  border: 1rem double var(--text-color);
  padding: 1rem;
}
.form-field{
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
}
.form-field label{
  margin-right: 0.5rem;
}
.form-field input[type=text],
.form-field input[type=email]{
  border: 1px solid var(--text-color);
  padding: 0.5rem;
  border-radius: 0px;
}

/* radio buttons */
[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 1.5rem;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    margin-top: .5rem;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid var(--text-color);
    border-radius: 100%;
    background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: var(--text-color);
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}

/* checkboxes */
	[type="checkbox"]:not(:checked),
	[type="checkbox"]:checked {
		position: absolute;
		left: 0;
		opacity: 0.01;
	}
	[type="checkbox"]:not(:checked) + label,
	[type="checkbox"]:checked + label {
		position: relative;
		padding-left: 1.7rem;
		line-height: 1.7;
		cursor: pointer;
	}

	/* checkbox aspect */
	[type="checkbox"]:not(:checked) + label:before,
	[type="checkbox"]:checked + label:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 1em;
		height: 1em;
		border: 1px solid var(--text-color);
		background: #FFF;
		border-radius: 0px;
		-webkit-transition: all .275s;
				transition: all .275s;
	}

	/* checked mark aspect */
	[type="checkbox"]:not(:checked) + label:after,
	[type="checkbox"]:checked + label:after {
		content: '✕';
		position: absolute;
    top: 0.65em;
    left: 0.14em;
		font-size: 1.1em;
		color: var(--text-color);
		line-height: 0;
		-webkit-transition: all .2s;
				transition: all .2s;
	}

	/* checked mark aspect changes */
	[type="checkbox"]:not(:checked) + label:after {
		opacity: 0;
		-webkit-transform: scale(0) rotate(45deg);
				transform: scale(0) rotate(45deg);
	}

	[type="checkbox"]:checked + label:after {
		opacity: 1;
		-webkit-transform: scale(1) rotate(0);
				transform: scale(1) rotate(0);
	}

	/* Accessibility */
	[type="checkbox"]:checked:focus + label:before,
	[type="checkbox"]:not(:checked):focus + label:before {
		box-shadow: 0 0 0 4px rgba(203, 34, 237, .2);
	}

  .form-area .btn{
    margin-top: 1rem;
  }
</style>