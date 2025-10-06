const express = require('express');
const app = express();
const path = require('path');


// Serve all static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/script', express.static(path.join(__dirname, 'public', 'script')));
app.use('/styles', express.static(path.join(__dirname, 'public', 'styles')));

/*app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'styles')));
app.use(express.static(path.join(__dirname, '..', 'script')));*/


// Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.get('/courses', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'courses.html'));
});

app.get('/course-detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'course-detail.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'about.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'projects.html'));
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


