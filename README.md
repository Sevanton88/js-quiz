# JS Quiz

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-5.0-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-3.0-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-green.svg)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, interactive JavaScript knowledge assessment tool featuring a sleek iOS-inspired interface, smooth animations, and comprehensive question coverage.

![JS Quiz Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=JS+Quiz+Preview) <!-- Replace with actual screenshot -->

## ✨ Features

- **10 Randomized Questions**: Each quiz session selects 10 questions from a pool of 20 carefully crafted JavaScript questions
- **Comprehensive Coverage**: Tests fundamental concepts including variables, DOM manipulation, events, arrays, and more
- **Modern UI/UX**: iOS-inspired design with smooth animations, gradients, and micro-interactions
- **Real-time Feedback**: Immediate visual feedback on answers with correct/incorrect indicators
- **Progress Tracking**: Animated progress bar and live score updates
- **Results Analysis**: Detailed results screen with percentage score, animated ring chart, and performance statistics
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Keyboard Support**: Navigate using Enter/Space keys for enhanced accessibility
- **No Dependencies**: Pure vanilla JavaScript, HTML, and CSS implementation

## 🚀 Live Demo

Experience the quiz at: [Live Demo Link](https://your-github-username.github.io/js-quiz/) <!-- Replace with actual deployment URL -->

## 🛠️ Technologies Used

- **Frontend**:
  - HTML5 for semantic structure
  - CSS3 with modern features (CSS Grid, Flexbox, Animations, Backdrop Filter)
  - Vanilla JavaScript (ES6+) for application logic
- **Design**:
  - Google Fonts (Nunito) for typography
  - CSS Custom Properties for theming
  - SVG for animated score ring

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-github-username/js-quiz.git
   cd js-quiz
   ```

2. **Open in browser**:
   - Simply open `index.html` in your preferred web browser
   - No build process or server required

## 🎮 Usage

1. **Start the Quiz**: Click the "Start Quiz" button on the welcome screen
2. **Answer Questions**: Select your answer by clicking the option buttons (A, B, C, or D)
3. **Navigate**: Use the "Next" button or press Enter/Space to proceed
4. **View Results**: After completing all questions, review your performance on the results screen
5. **Restart**: Click "Play Again" to start a new quiz with different questions

## 📁 Project Structure

```
js-quiz/
├── index.html          # Main HTML structure and layout
├── style.css           # Complete styling with modern CSS features
├── app.js              # Core application logic and event handling
├── questions.js        # Question bank with 20 JavaScript questions
└── README.md           # Project documentation
```

## 🔧 Customization

### Adding New Questions

Edit `questions.js` to add more questions. Each question object should follow this structure:

```javascript
{
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0, // Index of correct answer (0-3)
}
```

### Styling Modifications

The design uses CSS custom properties for easy theming. Key variables in `style.css`:

```css
:root {
  --bg: #f0f4ff;
  --primary: #6c63ff;
  --success: #10b981;
  --danger: #ef4444;
  /* ... more variables */
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Maintain the iOS-inspired design aesthetic
- Ensure responsive design across all screen sizes
- Add questions that test practical JavaScript knowledge
- Follow existing code style and naming conventions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dušan** - *Full-Stack Developer*

- GitHub: [@your-github-username](https://github.com/your-github-username)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

---

⭐ If you found this project helpful, please give it a star on GitHub!

*Built with ❤️ using vanilla JavaScript*