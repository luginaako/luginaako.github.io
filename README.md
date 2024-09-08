# luginaako.github.io<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website Title</title>
    <link rel="stylesheet" href="styles.css"> <!-- Optional: Link to your CSS file -->
</head>
<body>
    <!-- Header Section -->
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content Section -->
    <main>
        <!-- Home Section -->
        <section id="home">
            <h1>Welcome to My Website</h1>
            <p>This is an introduction to my website. Briefly describe your site's purpose here.</p>
        </section>

        <!-- About Section -->
        <section id="about">
            <h2>About Me/Us</h2>
            <p>Provide a short biography or description of the website, company, or project.</p>
        </section>

        <!-- Services Section -->
        <section id="services">
            <h2>Our Services</h2>
            <ul>
                <li>Service 1: Brief description</li>
                <li>Service 2: Brief description</li>
                <li>Service 3: Brief description</li>
            </ul>
        </section>

        <!-- Contact Section -->
        <section id="contact">
            <h2>Contact Us</h2>
            <p>If you’d like to get in touch, fill out the contact form below or reach out through the provided contact details.</p>
            <form action="#" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>

    <!-- Footer Section -->
    <footer>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
</body>
</html>
