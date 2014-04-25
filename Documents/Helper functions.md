Helper functions
================

### Functions for working with elements

* **`helper.checkAttributeOfElementContainsValue(elem, attr_name, value)`** - check if element attribute contains a value.

    Example:
    
```html    
<span class="item active">Text</span>
```

```js
helper.checkAttributeOfElementContainsValue(element(By.css(".item")), "class", "active"); // assertion will be true
```
<br />

* **`helper.clickOnElementFromArrayThatHasEqualText(elements, item)`** - click on element in the current set of elements which text is equal to received value.
    
    Example:

```html
<ul>
    <li class="item">Item1</li>
    <li class="item">Item2</li>
    <li class="item">Item3</li>
</ul>
```

```js
helper.clickOnElementFromArrayThatHasEqualText(element.all(By.css(".item")), "Item2"); // the second element will be clicked 
```
<br />

* **`helper.clickOnElementFromArrayThatContainText(elements, item, strict)`** - click on element in the current set of elements which text contains received value. If `strict` is true, function's behaviour will be the same as `helper.clickOnElementFromArrayThatHasEqualText`

    Example:

```html
<ul>
    <li class="item">Item1</li>
    <li class="item">Item2</li>
    <li class="item">Item3</li>
</ul>
```

```js
helper.clickOnElementFromArrayThatContainText(element.all(By.css(".item")), 'Item', false); // the first element will be clicked 
```
<br />

* **`helper.shouldBeInArrayOfElements(elements, item, not_be, strict)`** - check if the set of elements `elements` contains (`not_be = false`) or doesn't contain (`not_be = true`) element with the text `item`. Method uses strict (`strict = true`, ===) or not strict (`strict = false`, searches for substring) comparison of the text of the element with passed value.
    
    Example:

```html
<span class="item">Item</span>
<span class="item">Value</span>
<span class="item">Item</span>
```

```js
helper.shouldBeInArrayOfElements(element.all(By.css(".item")), "Value", true, true); // assertion will be true
```
<br />

* **`helper.shouldSplittedTextBeEqualToElementsText(text, elements, strict)`** - check if all values in parameter `text` match with text values from elements of the set `elements`. Order of items in text and in element is important. Number of items in text must be equal to number of elements

    Example:
    
```html
<span class="item">Value-1</span>
<span class="item">Value-2</span>
<span class="item">Value-3</span>
```

```js
helper.shouldSplittedTextBeEqualToElementsText("Value-2, Value-1, Value-3", element.all(By.css(".item")), true); // assertion will be false because order is important
```
<br />

* **`helper.shouldElementsTextContainSplittedText(text, elements, strict)`** - check if all values in parameter `text` are substrings of text values from elements of the set `elements`. Order of items in text and in element is not important. Number of items in text can be less then number of elements.

    Example:
    
```html
<span class="item">Value-1</span>
<span class="item">Value-2</span>
<span class="item">Value-3</span>
```

```js
helper.shouldSplittedTextBeEqualToElementsText("Value-2, Value", element.all(By.css(".item")), true); // assertion will be true
```
        
### Functions for working with tabs and page scrolling:

* **switchToNextTab()** - make the last opened tab current.

* **closeCurrentTab()** - close current tab.