🛩️ Aviation Safety Project – AI-Powered Aviation Incident & Accident Analysis
A powerful web application that uses AI/ML and NLP to analyze aviation incident and accident data, 
detect patterns, perform sentiment and keyword analysis, and offer intelligent insights for enhancing 
aviation safety. Designed for aviation analysts, researchers, safety boards, and regulatory authorities.

📁 Table of Contents

🔍 Project Overview

✨ Features

🧠 Tech Stack

⚙️ Project Structure

📊 Core Functionality

🚀 Getting Started

🛠️ Available Scripts

🧪 Sample Use Cases

🧾 License

📬 Contact

🔍 Project Overview: 

The Aviation Safety Project is a complete full-stack application built to:

Analyze aviation incident/accident reports

Use Natural Language Processing (NLP) to extract sentiment, root causes, and safety issues

Provide dashboards with key statistics and insights

Help aviation authorities take data-driven decisions

✨ Features

✅ Upload incident or accident report datasets

✅ Run AI/NLP models to extract causes and sentiments

✅ Dashboard for statistics, charts, and visual insights

✅ Keyword and phrase detection from safety logs

✅ REST APIs built with FastAPI

✅ Realtime feedback via formatted responses

✅ Modular and scalable project architecture

🧠 Tech Stack

Layer	Technology

  Frontend	(Coming Soon) React / Streamlit (Optional)
  
  Backend	FastAPI, Python, Uvicorn
  
  NLP/ML	NLTK, TextBlob, Spacy, Scikit-learn
  
  Data Handling	Pandas, JSON, CSV
  
  Logging	Custom logging via logger.js and Python
  
  Utilities	responseFormatter.js, .env, CORS
  
  Deployment	Docker (optional), GitHub Actions (CI/CD-ready)


📊 Core Functionality

🧠 NLP Analysis:

Tokenization

Stopword removal

Root cause detection

Severity classification

Sentiment polarity

🗂️ Input:

Aviation Incident Logs (CSV, JSON)

Reports with text-based narratives

📤 Output:

Sentiment score

Root cause summary

Affected aircraft, crew, or passengers

Summary with response formatting

🚀 Getting Started

🔧 Prerequisites

Install:

Python 3.9+

pip

Git

(Optional) Node.js for logger utilities

⬇️ Installation

# Clone the repository

git clone https://github.com/A289shek2004/aviation-safety-project.git

cd aviation-safety-project

# Set up Python environment

pip install -r requirements.txt

▶️ Run the App

uvicorn backend.main:app --reload


🛠️ Available Scripts

Command	Purpose

uvicorn backend.main:app --reload	Start FastAPI server (dev mode)

python sentiment/sentiment.py	Run sentiment test manually

python sentiment/keyword_extraction.py	Test keyword analysis module

npm run logger (optional)	Run Node utility logger (if used)

🧪 Sample Use Cases

✈️ Aircraft manufacturers analyzing reports for design flaws

🛫 Airlines monitoring crew-related incidents

📋 Aviation regulators reviewing large-scale incident datasets

📈 Data scientists testing aviation ML/NLP pipelines

📬 Contact

Author: Abhishek Kumar Harendra Gupta

📧 Email: 1289shek2004@gmail.com

🔗 GitHub: https://github.com/A289shek2004

🧾 License

This project is licensed under the MIT License – see the LICENSE file for details.

🧠 Suggestions or Contributions?

Feel free to:

Fork this repo

Create an issue

Submit a PR 🚀
