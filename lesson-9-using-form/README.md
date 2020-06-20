---
title: Using form
---

## Netlify Form


Documentation: https://docs.netlify.com/forms/setup/#html-forms

Pros & Cons

Pros

- Easy to use: Just create a form and Netlify handles everything for us
- Anti-spam handled.
- Support file upload.

Cons

- 100 form submissions per month
- External service = external branding
- No after-submission redirection
- Not supporting multiple file input.


## Form-to-email service

Example: FormSubmit.co

Documentation: https://formsubmit.co/

Pros

- Easy to use: Post form to https://formsubmit.co/your_email@example.com and activate it to use.
- Anti-spam handled.
- After-submission redirection.
- Support file upload.
- Free.

Cons

- External service = external branding
- Not supporting multiple file input.




## Build your own form by using Lambda function

More on that later


## Tackling spams

Netlify form and those form-to-email services usually come with built-in recapcha or suspecious spam filtering. In additin, we can add honeypot field to the form to further prevent spamming bot.




## Code example

### Netlify Form

```lang-html
<form name="contact" method="POST" data-netlify="true" enctype="multipart/form-data">
  <p>
    <label>
      Your Name:
      <input type="text" name="name" />
    </label>
  </p>
  <p>
    <label>
      Your Email:
      <input type="email" name="email" />
    </label>
  </p>
  <p>
    <label>
      Message:
      <textarea name="message"></textarea>
    </label>
  </p>
  <p>
    <label>
      Attachment:
      <input type="file" name="attachment">
    </label>
  </p>
  <p>
    <input type="submit" value="Send">
  </p>
</form>
```


### FormSubmit.co code example

```lang-html
<form name="contact" method="POST" action="https://formsubmit.co/demo@makzan.net" enctype="multipart/form-data">
  <p>
    <label>
      Your Name:
      <input type="text" name="name" />
    </label>
  </p>
  <p>
    <label>
      Your Email:
      <input type="email" name="email" />
    </label>
  </p>
  <p>
    <label>
      Message:
      <textarea name="message"></textarea>
    </label>
  </p>
  <p>
    <label>
      Attachment:
      <input type="file" name="attachment">
    </label>
  </p>
  <p>
    <input type="hidden" name="_next" value="https://demo-20200516.netlify.app/thanks">
    <input type="submit" value="Send">
  </p>
</form>
```