async function getCart() {
    const pizzaCart = PizzaContract.getCart();
    const Cart = await pizzaCart;
    var currentNode = document.querySelector('#add');
    var newNode = document.createElement('section');
    newNode.id = 'add';
    for (var i = 0; i < Cart.length; i++) {
      console.log(Cart[i].name)
      newNode.innerHTML += "<figure id='target" + i + "'>" + "<img src = " + Cart[i].imgUrl + " width=207 height=207 >" + "<figcaption id=" + i + ">" + "id = " + i + "</figcaprion>" + "<figcaption>" + Cart[i].name + "</figcaprion>" + "<figcaption>" + Cart[i].price + " Wei " + "</figcaprion>" + "</figure>";
    }
    const cost = await PizzaContract.getCost();
    console.log(cost*(10**(-18)).toString());
    newNode.innerHTML += "<p>"+ "Cart cost: " + cost +" Wei </p>";
    currentNode.parentNode.replaceChild(newNode, currentNode);
  }

  async function getMenu() {
    const getMenuList = PizzaContract.getMenu()
    const Menu = await getMenuList;
    var currentNode = document.querySelector('#add');
    var newNode = document.createElement('section');
    newNode.id = 'add';
    for (var i = 0; i < Menu.length; i++) {
      console.log(Menu[i].name)
      newNode.innerHTML += "<figure id='target" + i + "'>" + "<img src = " + Menu[i].imgUrl + " width=207 height=207 >" + "<figcaption id=" + i + ">" + "id = " + i + "</figcaprion>" + "<figcaption>" + Menu[i].name + "</figcaprion>" + "<figcaption>" + Menu[i].price + " Wei " + "</figcaprion>" + "</figure>";
    }
    newNode.innerHTML += "<p>Menu</p>";
    currentNode.parentNode.replaceChild(newNode, currentNode);
  }

  async function getOrderHistory() {
    const getOrderList = PizzaContract.getOrderHistory()
    const orderHistory = await getOrderList;
    var currentNode = document.querySelector('#add');
    var newNode = document.createElement('section');
    newNode.id = 'add';
    for (var i = 0; i < orderHistory.length; i++) {
      console.log(orderHistory[i].name)
      newNode.innerHTML += "<figure id='target" + i + "'>" + "<img src = " + orderHistory[i].imgUrl + " width=207 height=207 >" + "<figcaption id=" + i + ">" + "id = " + i + "</figcaprion>" + "<figcaption>" + orderHistory[i].name + "</figcaprion>" + "<figcaption>" + orderHistory[i].price + " Wei " + "</figcaprion>" + "</figure>";
    }
    newNode.innerHTML += "<p>Order History</p>";
    currentNode.parentNode.replaceChild(newNode, currentNode);
  }

  async function addToCart() {
    const mood = document.getElementById("mood").value;
    const _size = document.getElementById("size").value;
    const addToCart = PizzaContract.addPizzaToCart(mood, _size);
    await addToCart;
  }

  async function getCost() {
    const cost = PizzaContract.getCost();
    await cost;
    return cost;
  }

  async function buyPizza() {
    const deposit = await PizzaContract.getCost();
    var total ='0.0000000000000000'+deposit;
    const overrides = {
      value: ethers.utils.parseEther(total), //sending one ether  
      gasLimit: 3000000 //optional
    }

    const buyPizza = PizzaContract.buyPizza(overrides);
    await buyPizza;
  }

  async function getTokenBalance() {
    const getTokenBalance = PizzaContract.getTokenBalance(addressSigner);
    const balance = await getTokenBalance;
    var currentNode = document.querySelector('#add');
    var newNode = document.createElement('div');
    newNode.id = 'add';
    newNode.className='add';
    newNode.innerHTML += "<p>" + "Token Balance: " + balance + " PLT </p>";
    currentNode.parentNode.replaceChild(newNode, currentNode);
  }