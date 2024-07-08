package com.danieldev.landingpage.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.danieldev.landingpage.models.tech.Tech;
import com.danieldev.landingpage.repositories.TechRepository;

import graphql.GraphQLContext;

@Controller
public class TechController {

  @Autowired
  private TechRepository repository;

  public TechController(TechRepository repository) {
    this.repository = repository;
  }

  @QueryMapping
  public Iterable<Tech> techs(GraphQLContext context) {
    return repository.findAll();
  }

  @MutationMapping
  Tech addTech(@Argument TechInput tech) {
    Tech t = new Tech(tech.title());
    return repository.save(t);
  }

  record TechInput(String title) {
  };
}
