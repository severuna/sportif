# | "Sportif" online store

---

*The project of an online clothing store that allows **choosing** products in three categories, viewing detailed **information** about each product, **adding** a product to the bag. The catalog pages also include the possibility of **sorting** the goods according to certain characteristics.*

---

### **The main files of the project and their brief description:**

1. **[index.html](./index.html)** - main page of the project; has :
    - a navigation bar
    - a search field
    - banners
    - an "up" button
    - etc

2. **[pants.html](./pages/pants.html)**, **[shorts.html](./pages/shorts.html)**, **[shirts.html](./pages/shirts.html)** - pages of relevant product categories that have:
    - a navigation bar
    - a search field
    - sort field
    - a list of goods of the corresponding category
    - an "up" button

3. **[bag.html](./pages/bag.html)** - bag page that has:
    - a navigation bar
    - a list of products that the user has selected
    - an "up" button

4. **[product-card.html](./pages/product-card.html)** - a page that will contain all the detailed information about the product:
    - enlarged and reduced images of the product
    - product name
    - list of available sizes and colors
    - price
    - the possibility of adding the product to the bag or wish list
    - links to social networks
    - detailed product description
    - list of reviews
    - rating and evaluations
    - form for adding product feedback
    - an "up" button

5. **[index.css](./styles/index.css)**, **[pages.css](./pages/styles/pages.css)**, **[product-card.css](./pages/styles/product-card.css)** - style files where:
    - *index.css* - the main styles of the project
    - *pages.css* - styles for pants.html, shorts.html, shirts.html
    - *product-card.css* - styles for the product card page

6. **[images](./images)**, **[pages images](./pages/images)**, **[pants images](./pages/images/pants)**, **[shorts images](./pages/images/shorts)**, **[shirts images](./pages/images/shirts)** - image storage folders:
    - *images* - folder of main images
    - *pages images* - a folder of page images
    - *pants images*, *shorts images*, *shirts images* - storage folders of relevant categories of goods


7. **[pantsArr.js](./pages/script/pantsArr.js)**, **[shirtsArr.js](./pages/script/shirtsArr.js)**, **[shortsArr.js](./pages/script/shortsArr.js)** - files of arrays of objects of the corresponding product categories, which contain a description:
    - *id* - serial number in the category
    - *src* -  is the path to the image
    - *title* - product name
    - *size* - a list of available sizes
    - *colors* - list of available colors
    - *price* - price
    - *rating* - rating on a 5-point scale
    ** | the list will be supplemented **