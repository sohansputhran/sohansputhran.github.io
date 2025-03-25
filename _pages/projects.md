---
layout: collection
title: "Projects"
permalink: /projects/
collection: projects
entries_layout: grid
classes: wide
author_profile: false
---

<div class="filter-bar">
  <button class="tag-filter" data-filter="all">All</button>
  <button class="tag-filter" data-filter="Machine Learning">Machine Learning</button>
  <button class="tag-filter" data-filter="Streamlit">Streamlit</button>
  <button class="tag-filter" data-filter="AWS">AWS</button>
  <button class="tag-filter" data-filter="NLP">NLP</button>
  <button class="tag-filter" data-filter="Data Engineering">Data Engineering</button>
</div>


<script src="/assets/js/filter-projects.js"></script>

<style>
.filter-bar {
  margin-bottom: 20px;
  text-align: center;
}

.tag-filter {
  margin: 5px;
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background 0.2s ease;
}

.tag-filter:hover {
  background-color: #007acc;
  color: #fff;
}

.tag-filter.active {
  background-color: #007acc;
  color: white;
}

.archive__item {
  transition: opacity 0.3s ease;
}

.tag-badge {
  display: inline-block;
  background-color: #f2f2f2;
  color: #333;
  padding: 5px 10px;
  margin: 3px 5px 0 0;
  font-size: 0.85rem;
  border-radius: 12px;
  font-weight: 500;
}

.archive__item.highlight {
  animation: glow 0.3s ease;
  border: 1px solid #007acc;
  box-shadow: 0 0 8px rgba(0, 122, 204, 0.2);
}
@keyframes glow {
  from {
    transform: scale(1.02);
  }
  to {
    transform: scale(1);
  }
}
</style>