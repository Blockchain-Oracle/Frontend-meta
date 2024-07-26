# Summary

In this exercise, you'll create a basic log in form for the Little Lemon website. The form will contain two fields; one for the username and another for the password. Both fields are required fields and must have a minimum text length of 2. The form will also contain a button to submit the form.

# Instructions

**Step 1:** First add a form element to the main element of the HTML document.

```html
<!-- Add a form element to the main element -->
<main>
  <form>
    <!-- Form fields will go here -->
  </form>
</main>
```

**Step 2:** Next, add two div elements to the form element; one for the username field and one for the password.

```html
<!-- Add div elements for username and password fields -->
<main>
  <form>
    <div>
      <!-- Username field will go here -->
    </div>
    <div>
      <!-- Password field will go here -->
    </div>
  </form>
</main>
```

**Step 3:** In the first div element, add a label element for the username.

```html
<!-- Add label for username field -->
<main>
  <form>
    <div>
      <label for="username">Username:</label>
      <!-- Username input field will go here -->
    </div>
    <div>
      <!-- Password field will go here -->
    </div>
  </form>
</main>
```

**Step 4:** After the label, add an input element for the username.

```html
<!-- Add input field for username -->
<main>
  <form>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required minlength="2">
    </div>
    <div>
      <!-- Password field will go here -->
    </div>
  </form>
</main>
```

**Step 5:** Add the required and minlength attributes. Set the minlength attribute value to 2 so that the field requires a minimum text length of 2.

```html
<!-- Add required and minlength attributes to username input field -->
<main>
  <form>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required minlength="2">
    </div>
    <div>
      <!-- Password field will go here -->
    </div>
  </form>
</main>
```

**Step 6:** Add an id attribute to the input element. Ensure that the for attribute of the label is set to match the id.

```html
<!-- Add id attribute to username input field -->
<main>
  <form>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required minlength="2">
    </div>
    <div>
      <!-- Password field will go here -->
    </div>
  </form>
</main>
```

**Step 7:** In the second div element, add a label element for the password.

```html
<!-- Add label for password field -->
<main>
  <form>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required minlength="2">
    </div>
    <div>
      <label for="password">Password:</label>
      <!-- Password input field will go here -->
    </div>
  </form>
</main>
```

**Step 8:** After the label, add an input element for the password. Ensure the correct input type is used so that the inputted data is not visible on screen.

```html
<!-- Add input field for password -->
<main>
  <form>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required minlength="2">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required minlength="2">
    </div>
  </form>
</main>
```

**Step 9:** Add an id attribute to the input element. Ensure that the for attribute of the label is set to match the id.

```html
<!-- Add id attribute to password input field -->
<main>
  <form>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required minlength="2">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required minlength="2">
    </div>
  </form>
</main>
```

**Step 10:** Add the required and minlength attributes to the input element. Set the minlength attribute value to 2 so that the field requires a minimum text length of 2.

```html
<!-- Add required and minlength attributes to password input field -->
<main>
  <form>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required minlength="2">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required minlength="2">
    </div>
  </form>
</main>
```

**Step 11:** Add a name attribute to all input elements.

```html
<!-- Add name attribute to input fields -->
<main>
  <form>
**Step 12:** After the second div element, add a button element containing the text "Log In".

**Step 13:** Set the type attribute of the button element to submit.

**Step 14:** Save the HTML document and open it in Live Preview.

**Step 15:** Click the Log In button and note if the form submits successfully. The form submits successfully when no errors are displayed and the content of the form resets.

**Step 16:** Add one character of text to both input fields. Again, click the Log In button and note if the form submits successfully.

**Step 17:** Type the text "admin" in the username field. Then type the text "password" in the password field. Click the Log In button and note if the form submits successfully.


## Tips

 * Refer to your cheat sheets and glossary from previous lessons.
