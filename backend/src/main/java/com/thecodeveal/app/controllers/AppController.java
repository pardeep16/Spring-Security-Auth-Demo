package com.thecodeveal.app.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class AppController {
	
	
	@GetMapping
	public String testApp() {
		return "Hello Spring Security!";
	}

}
