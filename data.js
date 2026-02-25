// E-Kart Application Data
window.appData = {
    title: "E-Kart Grocery Store",
    version: "1.0.0",
    
    // Customer Information
    customer: {
        name: "",
        email: "",
        phone: "",
        address: ""
    },
    
    // Product Categories
    categories: [
        { id: "all", name: "All Products", icon: "fa-grip" },
        { id: "fruits", name: "Fruits", icon: "fa-apple-whole" },
        { id: "vegetables", name: "Vegetables", icon: "fa-carrot" },
        { id: "dairy", name: "Dairy", icon: "fa-cheese" },
        { id: "grains", name: "Grains & Cereals", icon: "fa-wheat-awn" },
        { id: "beverages", name: "Beverages", icon: "fa-mug-hot" },
        { id: "snacks", name: "Snacks", icon: "fa-cookie-bite" }
    ],
    
    // Products Data
    products: [
        // Fruits
        { id: 1, name: "Fresh Apples", category: "fruits", price: 3.99, unit: "kg", image: "🍎", stock: 50, description: "Crisp and sweet red apples" },
        { id: 2, name: "Bananas", category: "fruits", price: 2.49, unit: "kg", image: "🍌", stock: 80, description: "Fresh yellow bananas" },
        { id: 3, name: "Oranges", category: "fruits", price: 4.99, unit: "kg", image: "🍊", stock: 60, description: "Juicy citrus oranges" },
        { id: 4, name: "Strawberries", category: "fruits", price: 5.99, unit: "pack", image: "🍓", stock: 30, description: "Sweet strawberries" },
        { id: 5, name: "Grapes", category: "fruits", price: 6.99, unit: "kg", image: "🍇", stock: 40, description: "Seedless green grapes" },
        { id: 6, name: "Watermelon", category: "fruits", price: 8.99, unit: "piece", image: "🍉", stock: 25, description: "Large fresh watermelon" },
        { id: 7, name: "Mango", category: "fruits", price: 7.99, unit: "kg", image: "🥭", stock: 35, description: "Sweet tropical mangoes" },
        { id: 8, name: "Pineapple", category: "fruits", price: 4.49, unit: "piece", image: "🍍", stock: 20, description: "Fresh pineapple" },
        
        // Vegetables
        { id: 9, name: "Tomatoes", category: "vegetables", price: 3.49, unit: "kg", image: "🍅", stock: 70, description: "Fresh red tomatoes" },
        { id: 10, name: "Carrots", category: "vegetables", price: 2.99, unit: "kg", image: "🥕", stock: 65, description: "Organic carrots" },
        { id: 11, name: "Broccoli", category: "vegetables", price: 4.49, unit: "kg", image: "🥦", stock: 45, description: "Fresh green broccoli" },
        { id: 12, name: "Potatoes", category: "vegetables", price: 2.49, unit: "kg", image: "🥔", stock: 100, description: "Farm fresh potatoes" },
        { id: 13, name: "Onions", category: "vegetables", price: 2.99, unit: "kg", image: "🧅", stock: 80, description: "Red onions" },
        { id: 14, name: "Bell Peppers", category: "vegetables", price: 5.49, unit: "kg", image: "🫑", stock: 40, description: "Mixed color peppers" },
        { id: 15, name: "Cucumber", category: "vegetables", price: 3.99, unit: "kg", image: "🥒", stock: 55, description: "Fresh cucumbers" },
        { id: 16, name: "Lettuce", category: "vegetables", price: 2.99, unit: "head", image: "🥬", stock: 50, description: "Crisp lettuce" },
        
        // Dairy
        { id: 17, name: "Whole Milk", category: "dairy", price: 3.99, unit: "liter", image: "🥛", stock: 60, description: "Fresh whole milk" },
        { id: 18, name: "Cheddar Cheese", category: "dairy", price: 7.99, unit: "pack", image: "🧀", stock: 40, description: "Aged cheddar cheese" },
        { id: 19, name: "Greek Yogurt", category: "dairy", price: 4.99, unit: "pack", image: "🥛", stock: 50, description: "Creamy Greek yogurt" },
        { id: 20, name: "Butter", category: "dairy", price: 5.49, unit: "pack", image: "🧈", stock: 45, description: "Salted butter" },
        { id: 21, name: "Eggs", category: "dairy", price: 4.49, unit: "dozen", image: "🥚", stock: 80, description: "Farm fresh eggs" },
        
        // Grains & Cereals
        { id: 22, name: "White Rice", category: "grains", price: 12.99, unit: "5kg", image: "🍚", stock: 40, description: "Premium white rice" },
        { id: 23, name: "Whole Wheat Bread", category: "grains", price: 3.49, unit: "loaf", image: "🍞", stock: 50, description: "Freshly baked bread" },
        { id: 24, name: "Oats", category: "grains", price: 5.99, unit: "pack", image: "🌾", stock: 55, description: "Rolled oats" },
        { id: 25, name: "Pasta", category: "grains", price: 2.99, unit: "pack", image: "🍝", stock: 70, description: "Italian pasta" },
        { id: 26, name: "Cornflakes", category: "grains", price: 4.49, unit: "box", image: "🥣", stock: 45, description: "Breakfast cereal" },
        
        // Beverages
        { id: 27, name: "Orange Juice", category: "beverages", price: 4.99, unit: "liter", image: "🧃", stock: 50, description: "100% pure orange juice" },
        { id: 28, name: "Coffee Beans", category: "beverages", price: 9.99, unit: "pack", image: "☕", stock: 35, description: "Arabica coffee beans" },
        { id: 29, name: "Green Tea", category: "beverages", price: 6.99, unit: "box", image: "🍵", stock: 40, description: "Organic green tea" },
        { id: 30, name: "Mineral Water", category: "beverages", price: 1.99, unit: "bottle", image: "💧", stock: 100, description: "Natural mineral water" },
        
        // Snacks
        { id: 31, name: "Potato Chips", category: "snacks", price: 2.99, unit: "pack", image: "🥔", stock: 60, description: "Crispy potato chips" },
        { id: 32, name: "Chocolate Bar", category: "snacks", price: 1.99, unit: "bar", image: "🍫", stock: 80, description: "Milk chocolate" },
        { id: 33, name: "Cookies", category: "snacks", price: 3.49, unit: "pack", image: "🍪", stock: 55, description: "Chocolate chip cookies" },
        { id: 34, name: "Peanuts", category: "snacks", price: 4.99, unit: "pack", image: "🥜", stock: 45, description: "Roasted peanuts" },
        { id: 35, name: "Popcorn", category: "snacks", price: 2.49, unit: "pack", image: "🍿", stock: 50, description: "Butter popcorn" }
    ],
    
    // Shopping Cart
    cart: [],
    
    // Delivery Charges
    deliveryCharge: 5.00,
    freeDeliveryThreshold: 50.00
};
