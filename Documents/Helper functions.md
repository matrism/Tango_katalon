Helper functions
================

### Functions for working with elements

* **checkAttributeOfElementContainsValue(elem, attr_name, value)** - check if element attribute contains a value.

    Example:
    
        <span class="item active">Text</span>
        
        helper.checkAttributeOfElementContainsValue(element(By.css(".item")), "class", "active"); // assertion will be true

* **clickOnOneEqual(elements, item)** - click on element in the current set of elements which text is equal to received value.
    
    Example:

        <ul>
            <li class="item>Item1</li>
            <li class="item>Item2</li>
            <li class="item>Item3</li>
        </ul>
    
        helper.clickOnOneEqual(element.all(By.css(".item")), 'Item2'); // the second element will be clicked 
    
* **clickOnOneInclude(elements, item)** - click on element in the current set of elements which text contains received value.

    Example:
    
            <ul>
                <li class="item>Item1</li>
                <li class="item>Item2</li>
                <li class="item>Item3</li>
            </ul>
        
            helper.clickOnOneInclude(element.all(By.css(".item")), 'Item'); // the first element will be clicked 

* **clickOnSame(elements, item, time)** - click on element in the current set of elements which text contains received value and elemnet was found for the `time` time.

    Example:
    
        <ul>
            <li class="item>Value</li>
            <li class="item>Item1</li>
            <li class="item>Item2</li>
            <li class="item>Item3</li>
        </ul>
    
        helper.clickOnSame(element.all(By.css(".item")), "Item", 2); // third element will be clicked

* **shouldBeAmoungElements(elements, item)** - check if the set of elements `elements` contains element with the text `item`. Method uses strict comparison of the text of the element with passed value.
    
    Example:

        <span class="item">Item</span>
        <span class="item">Value</span>
        <span class="item">Item</span>

        helper.shouldBeAmoungElements(element.all(By.css(".item")), "Value") // assertion will be true

* **shouldNotBeAmoungElements(elements, item)** - check if the set of elements `elements` does not contain element with the text `item`. Method uses strict comparison of the text of the element with passed value.

    Example:
    
        <span class="item">Item</span>
        <span class="item">Value</span>
        <span class="item">Item</span>

        helper.shouldNotBeAmoungElements(element.all(By.css(".item")), "Value") // assertion will be false

* **shouldBeOnlyOne(elements, item)** - check if the set of elements `elements` contains only one element with the text `item`.

    Example:
    
        1)
            <span class="item">Text</span>
            <span class="item">Value</span>
            <span class="item">Text</span>
    
            helper.shouldBeOnlyOne(element.all(By.css(".item")), "Value") // assertion will be true
            
        2)    
            <span class="item">Text</span>
            <span class="item">Value</span>
            <span class="item">Value</span>
    
            helper.shouldBeOnlyOne(element.all(By.css(".item")), "Value") // assertion will be false

* **splitAndCompare(text, elements)** - check if all values in parameter `text` match with text values from elements of the set `elements`.

    Example:
    
        <span class="item">Value-1</span>
        <span class="item">Value-2</span>
        <span class="item">Value-3</span>
        
        helper.splitAndCompare("Value-2, Value-1, Value-3", element.all(By.css(".item"))) // assertion will be true
        
### Functions for working with tabs and page scrolling:

* **switchToNextTab()** - make the last opened tab current.

* **closeCurrentTab()** - close current tab.

* **pageShouldBeScrolled()** - check if the page is scrolled.
