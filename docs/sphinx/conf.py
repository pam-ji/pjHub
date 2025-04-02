
# Configuration file for the Sphinx documentation builder
import os
import sys
sys.path.insert(0, os.path.abspath('../..'))

project = 'PjHub'
copyright = '2024'
author = 'PjHub Team'

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    'sphinx.ext.viewcode',
    'sphinx.ext.githubpages',
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']
html_theme = 'sphinx_rtd_theme'
