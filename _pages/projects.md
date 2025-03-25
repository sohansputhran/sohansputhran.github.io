---
layout: collection
title: "Projects"
permalink: /projects/
collection: projects
entries_layout: grid
classes: wide
author_profile: true
---

<div class="filter-bar">
  <label for="tagDropdown">Filter by tag:</label>
  <select id="tagDropdown" class="tag-dropdown">
    <option value="all">All</option>
    <option value="Machine Learning">Machine Learning</option>
    <option value="Streamlit">Streamlit</option>
    <option value="AWS">AWS</option>
    <option value="NLP">NLP</option>
    <option value="Data Engineering">Data Engineering</option>
  </select>
</div>

<script src="/assets/js/filter-projects.js"></script>

<style>
.filter-bar {
  margin-bottom: 20px;
  text-align: center;
}

.tag-dropdown {
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 1rem;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}
  
.tag-filter {
  padding: 8px 14px;
  margin: 5px;
  border: none;
  border-radius: 20px;
  background: #f0f0f0;
  cursor: pointer;
}

.tag-filter.active,
.tag-filter:hover {
  background-color: #007acc;
  color: white;
}

.tag-filter.active {
background-color: #007acc;
color: white;
}

@keyframes glow {
from {
    transform: scale(1.02);
}
to {
    transform: scale(1);
}
}
  
/* Base styling for project cards */
.archive__item {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

/* Hover effect for project cards */
.archive__item:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

/* Highlighted state for filtered project cards */
.archive__item.highlight {
  border: 2px solid #007acc;
  box-shadow: 0 0 12px rgba(0, 122, 204, 0.25);
  transform: scale(1.02);
}

/* Styling for tag badges within project cards */
.tag-badge {
  display: inline-block;
  background-color: #f0f0f0;
  color: #333;
  padding: 5px 10px;
  margin: 5px 5px 0 0;
  font-size: 0.85rem;
  border-radius: 20px;
  font-weight: 500;
}
</style>