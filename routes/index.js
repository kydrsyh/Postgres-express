const express = require('express');
const router = express.Router();

const classroomController = require('../controllers').classroom;
const studentController = require('../controllers').student;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Classroom Router */
router.get('/api/classroom', classroomController.list);
router.get('/api/classroom/:id', classroomController.getById);
router.post('/api/classroom', classroomController.add);
router.put('/api/classroom/:id', classroomController.update);
router.delete('/api/classroom/:id', classroomController.delete);

/* Student Router */
router.get('/api/student', studentController.getAllStudents);
router.get('/api/student/:id', studentController.getStudent);
router.post('/api/student', studentController.addStudent);
router.put('/api/student/:id', studentController.updateStudent);
router.delete('/api/student/:id', studentController.deleteStudent);

module.exports = router;