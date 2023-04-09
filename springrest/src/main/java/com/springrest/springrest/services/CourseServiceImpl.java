package com.springrest.springrest.services;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entity.Course;
@Service
public class CourseServiceImpl implements CourseService
{
	@Autowired
	private CourseDao courseDao;
//    List<Course> list;
    public CourseServiceImpl()
    {
//    	list=new ArrayList<>();
//    	list.add(new Course((long)145645,"Java","basics"));
//    	list.add(new Course((long) 1432,"C++","advanced"));
    }
	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
//		return list;
		return courseDao.findAll();
	}
	@Override
	public Course getCourse(long courseId)
	{
//		Course c=null;
//		for(Course cor : list)
//		{
//			if(cor.getId()==courseId)
//			{
//				c=cor;
//				break;
//			}
//		}
		return courseDao.getOne(courseId);
	}
	
	@Override
	public Course addCourse(Course course) {
		// TODO Auto-generated method stub
//		list.add(course);
		courseDao.save(course);
		return course;
	}
	
	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
//		list.forEach(e->{
//			if(e.getId()==course.getId())
//			{
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
		courseDao.save(course);
		return course;
	}
	
	@Override
	public void deleteCourse(long courseId) {
		// TODO Auto-generated method stub
//		list=this.list.stream().filter(e->e.getId()!=courseId).collect(Collectors.toList());
		courseDao.deleteById(courseId);
	}

}
