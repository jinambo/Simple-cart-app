var app = new Vue({
    el: '.app',
    data: {
      items: [
            {   
                id: 0,
                product: 'socks',
                description: "Behold mere mortal, the six precious gems of the Marvel Universe have finally been collected and bestowed upon you. Harness the power of the Infinity Stones and unleash your inner superhero.",
                image: 'https://d2zn325e89kysk.cloudfront.net/media/catalog/product/cache/image/1024x600/9d1325c86aa13970ba5272241042ed09/F/I/FIO01-7300.png',
                price: '10e',
                inStock: true,
                onSale: true,
                details: ['80% cotton', '20% polyester', 'unisex'],
                amount: 0
            },
            {
                id: 1,
                product: 'cap',
                description: '3D High definition (raised) team mascot logo embroidered on front. Team namesake on adjustable velcro closure. Youth size. Authentic Outdoor Cap merchandise. Officially Licensed Collegiate Product.',
                image: 'https://www.hudy.cz/data/images/img-large/0/69800.png',
                price: '14.99e',
                inStock: false,
                onSale: false,
                details: ['80% cotton', '20% polyester', 'men'],
                amount: 0
            },
            {
              id: 2,
              product: 'sweatshirt',
              description: 'A shirt worn against the skin, usually under other clothing, to absorb sweat.',
              image: 'http://cdn.shopify.com/s/files/1/1454/0736/products/20170825204145_60480_1200x1200.png?v=1513156894',
              price: '75e',
              inStock: true,
              onSale: true,
              details: ['100% cotton', '0% polyester', 'women'],
              amount: 0
          },
          {
            id: 3,
            product: "t-shirt",
            description: 'This premium T-shirt is as close to perfect as can be. It’s optimized for all types of print and will quickly become your favorite T-shirt. Soft, comfortable and durable, this is a definite must-own and a Spreadshirt recommended product.',
            image: 'https://i.pinimg.com/originals/91/2e/b8/912eb874d1b032d1ac3e71b2f6ff51ea.png',
            price: '25e',
            inStock: true,
            onSale: false,
            details: ['70% cotton', '30% polyester', 'unisex'],
            amount: 0
        }
      ],
      cart: [
        {
          amount: 0,
          cartContent: []
        }
      ],
      categories: ['all', 'sweatshirt', 'socks', 'cap', 't-shirt'],
      currentCategory: 'all'
    },
    methods: {
      addToCart: function(item) { // item parameter will return this item of all items
        let itemSum = document.querySelectorAll('.item-sum'); // item sum
        
        // loop of item amount
        for(let i = 0; i < itemSum[item.id].value; i++) {
          item.amount += 1; // increment item amount

          // push same item just once
          if (item.amount < 2) {
            this.cart[0].cartContent.push(item);
          } 

          // increment cart amount (all item's amount)
          this.cart[0].amount += 1;
        }
      },

      showCart: function() {
        const cartContent = document.querySelector('.cart-content')

        // if cart is empty don't change css 
        if(this.cart != '') {
          cartContent.style.cssText = "opacity: 1; transform: translateY(0%); z-index: 999"
        }
      },

      hideCart: function() {
        const cartContent = document.querySelector('.cart-content')
        cartContent.style.cssText = "opacity: 0; transform: translateY(-200%); z-index: 1"
      },

      // callback - sending category value to this.currentCategory
      chooseCategory: function(category) {
        this.currentCategory = category;
      }
    },
})

