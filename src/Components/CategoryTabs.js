// CategoryTabs.js

import React from "react";
import Nav from "react-bootstrap/Nav";
import '../Components/Categories.css';

function CategoryTabs({ categories, activeCategory, onSelectCategory }) {
  return (
    <Nav variant="tabs" defaultActiveKey={activeCategory} onSelect={onSelectCategory}>
      {categories.map((category) => (
        <Nav.Item key={category}>
          <Nav.Link eventKey={category}>{category}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default CategoryTabs;
