//different ways to write XPATHs
/html[1]/body[1]/ytd-app[1]/div[1]/ytd-page-manager[1]/ytd-watch-flexy[1]/div[4]/div[1]/div[1]/div[2]/div[2]/ytd-watch-metadata[1]/div[1]/div[2]/div[2]/div[1]/div[1]/ytd-menu-renderer[1]/div[1]/yt-button-view-model[1]/button-view-model[1]/button[1]/yt-touch-feedback-shape[1]/div[2]
Assignment - 20th Aug

https://selectorshub.com/ - Plugin URL - You need to try diff Plugin https://demoqa.com/automation-practice-form - Form - You need to try Below Xpath

//Differents Ways to Write XPATHs

Absolute XPath
Starts from the root of the HTML document.

/html/body/div[1]/div[2]/input Very specific Usually not recommended because small UI changes can break it. 2. Relative XPath

Starts from anywhere in the document using //.

//input

Better than absolute XPath because it doesn't depend on the entire DOM hierarchy.

XPath using an ID //input[@id='username']
Or:

//*[@id='username']

Usually one of the most reliable approaches when the ID is stable.

XPath using a class //input[@class='form-control']
If the element has multiple classes, exact matching can be problematic. You can use:

//input[contains(@class,'form-control')] 5. XPath using text //button[text()='Login']

Useful for buttons, links, labels, etc.

You can also use:

//button[contains(text(),'Login')] 6. Using multiple attributes //input[@type='text' and @name='username']

Or:

//input[@id='username' and @placeholder='Username']

This is useful when a single attribute isn't unique.

Using contains() //input[contains(@id,'user')]
For text:

//button[contains(text(),'Login')] 8. Using starts-with() //input[starts-with(@id,'user_')]

Useful when part of an attribute is dynamic.

Using normalize-space()
Handles extra spaces in text:

//button[normalize-space()='Login']

This is often better than:

//button[text()='Login']

XPath using parent-child relationship //div[@id='login']//input
Or:

//form[@id='loginForm']/input 11. Using parent //input[@id='username']/parent::div

Finds the parent

of the input.
Using ancestor //input[@id='username']/ancestor::form
Finds an ancestor

.
Using following-sibling //label[text()='Username']/following-sibling::input
Useful when two elements are siblings.

Using preceding-sibling //input[@id='username']/preceding-sibling::label
Using following //label[text()='Username']/following::input[1]
Finds the first input appearing after the label in the document.

Using XPath indexes //input[1]
or:

(//input)[2]

Be careful with indexes because they can become invalid when the page structure changes.

Using or //input[@id='username' or @name='username']
Using not() //input[not(@disabled)]
Finds inputs that aren't disabled.

Using variables/partial dynamic attributes
For example, if the HTML is:

You can use:

//input[starts-with(@id,'user_')]

or:

//input[contains(@id,'user_')] 20. Combining relationships and conditions

For example:

//div[@class='login']//button[contains(normalize-space(),'Login')]

This is often a good practical XPath because it narrows the search to a meaningful section of the page.

In Selenium automation, a good preference order is generally:

Stable ID ↓ Unique name / data-* attribute ↓ Unique combination of attributes ↓ Relative XPath with parent/child relationships ↓ Text-based XPath ↓ contains()/starts-with() ↓ Indexes ↓ Absolute XPath

If you're preparing for Selenium interviews, the most important XPath concepts to know are //, @attribute, text(), contains(), starts-with(), and/or, parent, ancestor, following-sibling, preceding-sibling, and XPath indexes.