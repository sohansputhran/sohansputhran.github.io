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
</style>