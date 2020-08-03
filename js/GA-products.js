/*
var products = [
  {'id':'001', "name":"Uno", "list":"product details", "brand" = "La Tazza", "category":"Tasse", "variant":"weiss", "price": 9.90},
  {'id':'002', "name":"Due", "list":"product details", "brand" = "La Tazza", "category":"Tasse", "variant":"schwarz", "price": 10.90},
  {'id':'003', "name":"One Plus", "list":"product details", "brand" = "Cuppa", "category":"Tasse", "variant":"weiss", "price": 11.90},
  {'id':'004', "name":"Two Extra", "list":"product details", "brand" = "Cuppa", "category":"Tasse", "variant":"schwarz", "price": 12.90},
  {'id':'005', "name":"Bova", "list":"product details", "brand" = "CeramicsLab", "category":"Tasse", "variant":"weiss", "price":  8.90},
  {'id':'006', "name":"Fellini", "list":"product details", "brand" = "CeramicsLab", "category":"Tasse", "variant":"weiss", "price": 7.90}
]
*/
/*
var cartTable = new Vue({
  el: '#cartTable',
  data: {
    rows: [
      { id: 1, name: "Chandler Bing", phone: '305-917-1301', profession: 'IT Manager' },
      { id: 2, name: "Ross Geller", phone: '210-684-8953', profession: 'Paleontologist' },
      { id: 3, name: "Rachel Green", phone: '765-338-0312', profession: 'Waitress'},
      { id: 4, name: "Monica Geller", phone: '714-541-3336', profession: 'Head Chef' },
      { id: 5, name: "Joey Tribbiani", phone: '972-297-6037', profession: 'Actor' },
      { id: 6, name: "Phoebe Buffay", phone: '760-318-8376', profession: 'Masseuse' }
    ]
  }
});
*/
new Vue({
  el: "#cartTable",
  data: {
    test: "Hallo, Test",
    cart: [],
  },
  computed: {
    parsedCart () {
      return JSON.parse(localStorage.getItem('cart')).items
    }
  },
  
})