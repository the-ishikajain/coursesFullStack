package com.springrest.springrest.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entity.Course;
import com.springrest.springrest.services.CourseService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class MyController {
    
	@Autowired
	private CourseService corSer;
	//get the courses
	@GetMapping("/courses")
	public List<Course> getCourses()
	{
		return this.corSer.getCourses();
	}
	
	@GetMapping("/course/{courseId}")
	public Course getCourse(@PathVariable String courseId)
	{
		return this.corSer.getCourse(Long.parseLong(courseId));
	}
	
	@PostMapping("/addcourse")
	public Course addCourse(@RequestBody Course course)
	{
		return this.corSer.addCourse(course);
	}
	
	@PutMapping("/updatecourse")
	public Course updateCourse(@RequestBody Course course)
	{
		return this.corSer.updateCourse(course);
	}
	
	@DeleteMapping("/deletecourse/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId)
	{
		try
		{
			this.corSer.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
