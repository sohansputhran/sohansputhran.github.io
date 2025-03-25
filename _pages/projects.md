---
layout: collection
title: "Projects"
permalink: /projects/
collection: projects
entries_layout: grid
classes: wide
author_profile: true
---

<!-- Filter Buttons -->
<div class="filter-bar">
  <button class="tag-filter" data-filter="all">All</button>
  <button class="tag-filter" data-filter="Machine Learning">Machine Learning</button>
  <button class="tag-filter" data-filter="Streamlit">Streamlit</button>
  <button class="tag-filter" data-filter="AWS">AWS</button>
  <button class="tag-filter" data-filter="NLP">NLP</button>
  <button class="tag-filter" data-filter="Data Engineering">Data Engineering</button>
</div>

<!-- The project cards will be rendered below by the collection layout -->

<script src="/assets/js/filter-projects.js"></script>

<style>
.filter-bar {
    margin-bottom: 20px;
    text-align: center;
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
  transition: all 0.3s ease;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}

/* Hover effect for project cards */
.archive__item:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

/* Highlighted state for filtered project cards */
.archive__item.highlight {
  border: 2px solid #007acc;
  box-shadow: 0 0 16px rgba(0, 122, 204, 0.25);
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