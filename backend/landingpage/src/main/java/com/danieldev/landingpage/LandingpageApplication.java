package com.danieldev.landingpage;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.danieldev.landingpage.repositories.TechRepository;

@SpringBootApplication
public class LandingpageApplication {

	public static void main(String[] args) {
		SpringApplication.run(LandingpageApplication.class, args);
	}

	@Bean
	ApplicationRunner applicationRunner(TechRepository techRepo) {
		return args -> {
		};
	}
}
