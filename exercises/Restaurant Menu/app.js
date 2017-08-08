var menu = {
    {name: 'Chicken', price: 10, calories: 200},
    {name: 'Beef', price: 12, calories: 225},
    {name: 'Pork', price: 13, calories: 250},
    
};

function MenuItems(name, price, calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
    
    return this.name, this.price, this.calories;
}
food.innerHTML = MenuItems.name()

menu.push(new MenuItem('Fish', 11, 175));
menu.push(new MenuItem('Potato' 7, 150));
menu.push(new MenuItem('Vegatable', 5, 75));

