package com.danieldev.landingpage.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.danieldev.landingpage.models.experience.Experience;

import graphql.GraphQLContext;

@Controller
public class ExperienceController {

  // private final ExperienceRepository

  @QueryMapping
  public List<Experience> experiences(GraphQLContext context) {
    return List.of(Experience.builder()
        .id(UUID.randomUUID())
        .title("Testing")
        .subtitle("SecondTesting")
        .descriptionTopics(List.of(""))
        .mainTechs(List.of(""))
        .workingYears(List.of(1))
        .build());
  }
}
