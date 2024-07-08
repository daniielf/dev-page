package com.danieldev.landingpage.controllers;

import java.util.List;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.danieldev.landingpage.models.experience.Experience;

import graphql.GraphQLContext;
import io.micrometer.common.lang.Nullable;

@Controller
public class ExperienceController {

  // private final ExperienceRepository

  record ExperienceInput(String title,
      String subtitle,
      List<String> descriptionTopics,
      @Nullable String backgroundColor,
      @Nullable String fontColor,
      List<String> mainTechs,
      List<Integer> workingYears) {
  }
}
