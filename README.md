# Supabase React Vite

Create .env with the following:
```
SUPABASE_PROJECT_URL=
SUPABASE_API_KEY=
```

## Database
```
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image TEXT,
  overview TEXT,
  nutrition_facts TEXT,
  instructions TEXT,
  ingredients TEXT
);
CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date_added DATE NOT NULL,
  date_expire DATE NOT NULL,
  icon TEXT,
  quantity INT NOT NULL
);

INSERT INTO recipes (name, image, overview, nutrition_facts, instructions, ingredients) VALUES
('Spaghetti Carbonara', 'https://example.com/spaghetti.jpg', 'A classic Italian pasta dish with a creamy egg sauce, pancetta, and Parmesan.', 'Calories: 670, Protein: 25g, Fat: 35g', '1. Cook pasta. 2. Fry pancetta. 3. Mix eggs and Parmesan. 4. Combine all with pasta.', 'Pasta, Eggs, Parmesan Cheese, Pancetta'),
('Vegetarian Chili', 'https://example.com/chili.jpg', 'A hearty, spicy chili made with beans, tomatoes, and a variety of vegetables.', 'Calories: 240, Protein: 9g, Fat: 1.5g', '1. Saute vegetables. 2. Add tomatoes and beans. 3. Simmer for 30 minutes.', 'Beans, Tomatoes, Corn, Bell Peppers, Onions, Chili Powder'),
('Banana Bread', 'https://example.com/banana_bread.jpg', 'Moist and delicious bread made with ripe bananas, flour, butter, and sugar.', 'Calories: 330, Protein: 4g, Fat: 10g', '1. Mix mashed bananas with melted butter. 2. Mix dry ingredients. 3. Combine all and bake.', 'Bananas, Flour, Sugar, Butter, Eggs');

INSERT INTO inventory (name, date_added, date_expire, icon, quantity) VALUES
('Milk', '2023-04-01', '2023-04-15', 'https://example.com/icons/milk.png', 10),
('Bread', '2023-04-03', '2023-04-10', 'https://example.com/icons/bread.png', 20),
('Apples', '2023-04-02', '2023-04-22', 'https://example.com/icons/apples.png', 30);
```

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
