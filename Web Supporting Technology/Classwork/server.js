const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// Import Model
const Student = require('./models/Student');

// ---------- CREATE ----------
app.post('/students', async (req, res) => {
    try {
        const student = new Student(req.body);
        const saved = await student.save();
        res.json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ---------- READ ALL + FILTER ----------
app.get('/students', async (req, res) => {
    try {
        let query = {};

        // Filter 1: course
        if (req.query.course) {
            query.course = req.query.course;
        }

        // Filter 2: marks greater than
        if (req.query.minMarks) {
            query.marks = { $gte: req.query.minMarks };
        }

        const students = await Student.find(query);
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ---------- READ ONE ----------
app.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ---------- UPDATE ----------
app.put('/students/:id', async (req, res) => {
    try {
        const updated = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ---------- DELETE ----------
app.delete('/students/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Server
app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});