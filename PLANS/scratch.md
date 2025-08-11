<!DOCTYPE html>
<html lang="en"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <base target="_self">
  <style>
    :root {
      --primary-color: #0a84ff;
      --text-color: #333;
      --bg-color: #f9f9f9;
      --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-family);
      color: var(--text-color);
      background-color: var(--bg-color);
      line-height: 1.6;
    }

    header {
      background: white;
      border-bottom: 1px solid #ddd;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    header h1 {
      font-size: 1.5rem;
      color: var(--primary-color);
    }

    nav a {
      margin-left: 1.5rem;
      text-decoration: none;
      color: var(--text-color);
      font-weight: 500;
    }

    nav a:hover {
      color: var(--primary-color);
    }

    .hero {
      padding: 4rem 2rem;
      text-align: center;
      background-color: white;
    }

    .hero h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .hero p {
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto 2rem auto;
      color: #666;
    }

    .hero button {
      background-color: var(--primary-color);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .hero button:hover {
      background-color: #006edc;
    }

    footer {
      text-align: center;
      padding: 2rem;
      font-size: 0.9rem;
      color: #888;
    }

    @media (max-width: 600px) {
      nav a {
        margin-left: 1rem;
        font-size: 0.9rem;
      }

      .hero h2 {
        font-size: 2rem;
      }

      .hero p {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>MySite</h1>
    <nav>
      <a href="/home.html">Home</a>
      <a href="/about.html">About</a>
      <a href="/contact.html">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h2>Welcome to MySite</h2>
    <p>Your one-stop solution for professional web design, development, and more.</p>
    <button>Get Started</button>
  </section>

  <footer>
    © 2025 MySite. All rights reserved.
  </footer>




        </body></html> Unbounded.html:1825:33
